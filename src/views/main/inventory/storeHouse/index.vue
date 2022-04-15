<template>
  <div class="layout-container">
    <form-handle 
      :condition="condition" 
      :query="query"
      @getTableData="getTableData"
      @handleAdd="handleAdd"  
      @handleClear="handleClear"
    />
    <table-normal 
      :columnArr="columnArr" 
      :tableData="tableData"
      :page="page"
      :loading="loading"
      @getTableData="getTableData"
      @handleSelectionChange="handleSelectionChange"
      @handleEdit="handleEdit"
      @handleDel="handleDel"
      @tableHandle="tableHandle"
    />
    <layer-normal 
      :layer = "layer" 
      :rules = "rules"
      :itemArr="itemArr"
      v-if="layer.show"
      @addForm="addForm"
      @updateForm="updateForm"
    />
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent, ref, reactive } from 'vue'
  import { Page } from '@/components/table/type'
  import { ElMessage } from 'element-plus'
  import LayerNormal from '@/components/layer/normal.vue'
  import type { LayerInterface } from '@/components/layer/index.vue'
  import { wareHouseQuery,wareHouseDelete, wareHouseInsert,wareHouseFetch,wareHouseValid,wareHouseUpdate } from '@/api/inventory/wareHouse'
  import { condition,columnArr,itemArr,searchData,rules,addData,updateData,updateRule } from './enum'
  import FormHandle from '@/components/Form/handle.vue'
  import TableNormal from '@/components/table/normal.vue'
  import { getData } from '@/utils/transform/httpConfig'
  import { useStore } from 'vuex';

  const store = useStore()
  // 存储搜索用的数据
  const query = ref({})
  // 弹窗控制器
  const layer: LayerInterface = reactive({
    show: false,
    title: '新增',
    showButton: true,
    width:'50%'
  })
  // 分页参数, 供table使用
  const page: Page = reactive({
    index: 1,
    size: 20,
    total: 0
  })
  const loading = ref(true)
  const tableData = ref([])
  const chooseData = ref([])
  const handleSelectionChange = (val: []) => {
    chooseData.value = val
  }
  
  // 获取表格数据
  // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
  const getTableData = (init: boolean) => {
    loading.value = true
    if (init) {
      page.index = 1
    }
    const queryData = getData(searchData,query.value)
    let params = {
      start: <number>page.index-1,
      size: page.size,
      ...queryData
    }
    wareHouseQuery(params).then(res => {
      console.log(res);
      res.data.map(item => {
        item.wh_o_is_closed_date_desc = item.wh_o_is_closed_date ? '停止订货' : '正常开放'
        item.c_valid = item.c_valid ? true : false
        const {pro_code='',city_code='',area_code='',wh_addr=''} = item
        const areaGroup = {pro_code,city_code,area_code}

        item.wh_addr_desc = `${wh_addr}`
      })
      tableData.value = res.data
      page.total = res.total
    })
    .catch(error => {
      tableData.value = []
      page.index = 1
      page.total = 0
    })
    .finally(() => {
      loading.value = false
    })
  }
  // 删除功能
  const handleDel = (row: object) => {
    let params = {"eq": {"_id": row._id}};
    wareHouseDelete(params)
    .then(res => {
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
      getTableData(tableData.value.length === 1 ? true : false)
    })
  }
  const tableHandle = ({ type,row}) => {

    if( type =='valid'){
        const params = getData({"eq":["_id"],"set":["c_valid"]},row)
        wareHouseValid(params).then(res=>{
          ElMessage({
            type: 'success',
            message: '切换成功'
          })
        })
    }
  }
  // 新增弹窗功能
  const handleAdd = () => {
    layer.title = '新增仓库'
    layer.show = true
    delete layer.row
  }
  // 编辑弹窗功能
  const handleEdit = (row: object) => {
    console.log(row)
    const { _id } = row
    wareHouseFetch({_id}).then(res=>{
      layer.title='编辑仓库'
      layer.show = true
      const data = res.data
      data.wh_o_is_opened_order_time = data.wh_o_is_opened_order_time ? true : false
      data.wh_o_is_closed_date = data.wh_o_is_closed_date ? true : false
      data._id = _id
      data.areaGroup = [data.pro_code,data.city_code,data.area_code]
      layer.row = data
    })
  }
  const handleClear = ()=>{
    query.value = {}
  }
  getTableData(true)
  // 新增提交事件
  async function addForm(params: object) {
    const p = resetModel(params)
    const new_params = getData(addData,p)
    wareHouseInsert(new_params)
    .then(res => {
      ElMessage({
        type: 'success',
        message: '新增成功'
      })
      getTableData(true)
      layer.show = false
    })
  }
  // 编辑提交事件
  async function updateForm(params: object) {
    const p = resetModel(params)
    const data = getData(updateData,p)
    const ruleData = getData(updateRule,params)
    ruleData.eq._id = params.wr_id
    wareHouseUpdate({ data,ruleData })
    .then(res => {
      ElMessage({
        type: 'success',
        message: '编辑成功'
      })
      getTableData(true)
      layer.show = false
    })
  }
  function resetModel(params:object){
    const [pro_code,city_code,area_code] = params.areaGroup || ["","",""]
    return {...params,pro_code,city_code,area_code}
  }
  function getAreaStr(params: any) {
    let group1,group2,group3
    let {pro_code='',city_code='',area_code=''} = params
    group1 = state.areaList.find(item=>{
      item.code == pro_code
    })
    if(!group1){
      return ''
    }
    pro_code = group1.name
    group2 = group1.children.find(item=>{
      item.code == city_code
    })
    if(!group2){
      return pro_code
    }
    city_code = group2.name
    group3 = group1.children.find(item=>{
      item.code == area_code
    })
    if(!group3){
      return pro_code + city_code
    }
    area_code = group.name

    return pro_code + city_code + area_code
  }
</script>

<style lang="scss" scoped>
  
</style>