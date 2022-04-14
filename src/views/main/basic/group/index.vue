<template>
  <div class="layout-container">
    <form-handle 
      :condition="condition" 
      :query="query"
      @getTableData="getTableData"
      @handleAdd="handleAdd"  
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
  import { groupQuery,groupDelete, groupInsert,groupFetch,groupValid,groupUpdate } from '@/api/ruleSettings/group'
  import { condition,columnArr,itemArr,searchData,rules,typeData,updateData } from './enum';
  import FormHandle from '@/components/Form/handle.vue'
  import TableNormal from '@/components/table/normal.vue'
  import { getData } from '@/utils/transform/httpConfig'

  // 存储搜索用的数据
  const query = ref({})
  // 弹窗控制器
  const layer: LayerInterface = reactive({
    show: false,
    title: '新增',
    showButton: true,
    width:'30%'
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
    groupQuery(params).then(res => {
      console.log(res);
      res.data.map(item=>{
        item.c_valid =  item.c_valid ? true : false
        const type = typeData.find(d=> d.value== item.g_type)
        item.g_type_desc = type ? type.label : item.g_type
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
    groupDelete(params)
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
        groupValid(params).then(res=>{
          ElMessage({
            type: 'success',
            message: '切换成功'
          })
        })
    }
  }
  // 新增弹窗功能
  const handleAdd = () => {
    layer.title = '新增分组'
    layer.show = true
    delete layer.row
  }
  // 编辑弹窗功能
  const handleEdit = (row: object) => {
    layer.title='编辑分组'
    layer.show = true
    console.log(row)
    layer.row = row
  }
  getTableData(true)

  // 新增提交事件
  const  addForm = async (params: object)=> {
    groupInsert(params)
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
  const updateForm =async (params: object)=> {
    const data = getData(updateData,params)
    groupUpdate(data)
    .then(res => {
      ElMessage({
        type: 'success',
        message: '编辑成功'
      })
      getTableData(true)
      layer.show = false
    })
  }
</script>

<style lang="scss" scoped>
  
</style>