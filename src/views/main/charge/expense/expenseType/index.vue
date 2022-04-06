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
import { expenseTypeQuery,expenseTypeDelete, 
         expenseTypeInsert,expenseTypeFetch,expenseTypeValid,expenseTypeUpdate
       } from '@/api/charge/expenseType'
import { condition,columnArr,itemArr,rules,searchData, updateData } from './enum';
import FormHandle from '@/components/Form/handle.vue';
import TableNormal from '@/components/table/normal.vue';
import { getData,getFields } from '@/utils/transform/httpConfig';
export default defineComponent({
  name: 'orderRules',
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
      console.log(query.value,queryData)
      let params = {
        start: <number>page.index-1,
        size: page.size,
        ...queryData
      }
      expenseTypeQuery(params)
      .then(res => {
        console.log(res);
        let data = res.data
        if (Array.isArray(data)) {
          data.forEach(d => {
            d.c_valid = d.c_valid==1 ? true : false
          })
        }
        tableData.value = data
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
      let params = {"cost_code": row.cost_code};
      expenseTypeDelete(params)
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
          expenseTypeValid(params).then(res=>{
            ElMessage({
              type: 'success',
              message: '切换成功'
            })
          })
      }
    }
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = '新增费用类型'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      // const {cost_code} = row
      // expenseTypeFetch({cost_code}).then(res=>{
        layer.title='编辑费用类型'
        layer.show = true
        console.log(row)
        layer.row = row
      // })
    }
    const handleClear=()=>{
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
      expenseTypeInsert(params)
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
      const fields = getFields(updateData , params)
      expenseTypeUpdate(fields)
      .then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
        this.getTableData(true)
        this.layer.show = false
      })
    },
  }
})
</script>

<style lang="scss" scoped>
  
</style>