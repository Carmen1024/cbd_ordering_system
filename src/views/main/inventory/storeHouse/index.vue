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

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { Page } from '@/components/table/type'
import { ElMessage } from 'element-plus'
import LayerNormal from '@/components/layer/normal.vue';
import type { LayerInterface } from '@/components/layer/index.vue'
import { wareHouseQuery,wareHouseDelete, wareHouseInsert,wareHouseFetch,wareHouseValid,wareHouseUpdate } from '@/api/inventory/wareHouse'
import { condition,columnArr,itemArr,searchData,rules,addData,updateData,updateRule } from './enum';
import FormHandle from '@/components/Form/handle.vue';
import TableNormal from '@/components/table/normal.vue';
import { getData } from '@/utils/transform/httpConfig';
export default defineComponent({
  name: 'storeHouse',
  components: {
    TableNormal,
    LayerNormal,
    FormHandle
  },
  setup() {
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
      wareHouseQuery(params)
      .then(res => {
        console.log(res);
        res.data.map(item => {
          item.wh_o_is_closed_date_desc = item.wh_o_is_closed_date ? '停止订货' : '正常开放'
          item.s_a_province=""
          item.s_a_city=""
          item.s_a_area=""
          item.areaGroup = [item.s_a_province,item.s_a_city,item.s_a_area]
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
        layer.row = res.data
      })
    }
    const handleClear = ()=>{
      query.value = {}
    }
    getTableData(true)
    return {
      query,
      tableData,
      chooseData,
      loading,
      page,
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      getTableData,
      layer,
      condition,
      columnArr,
      rules,
      itemArr,
      tableHandle,
      handleClear
    }
  },
  methods:{
    // 新增提交事件
   async addForm(params: object) {
     const p = this.resetModel(params)
     const new_params = getData(addData,p)
      wareHouseInsert(new_params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '新增成功'
        })
        this.getTableData(true)
        this.layer.show = false
      })
    },
    // 编辑提交事件
    async updateForm(params: object) {
      const p = this.resetModel(params)
      const data = getData(updateData,p)
      const ruleData = getData(updateRule,params)
      ruleData.eq._id = params.wr_id
      wareHouseUpdate({ data,ruleData })
      .then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
        this.getTableData(true)
        this.layer.show = false
      })
    },
    resetModel(params:object){
      const [s_a_province,s_a_city,s_a_area] = params.areaGroup || ["","",""]
      return {...params,s_a_province,s_a_city,s_a_area}
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>