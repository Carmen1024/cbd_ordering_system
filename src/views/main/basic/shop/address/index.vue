
<template>
  <div class="layout-container">
    <form-handle 
      :condition="condition" 
      :query="query"
      :handles="['add']"
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

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { Page } from '@/components/table/type'
import { ElMessage } from 'element-plus'
import LayerNormal from '@/components/layer/normal.vue';
import type { LayerInterface } from '@/components/layer/index.vue'
import { addressQuery,addressDelete, addressInsert,addressFetch,addressValid,addressUpdate } from '@/api/shop/address'
import { valTypeData,condition,columnArr,itemArr,searchFormat,updateFormat,rules,defaultData,auditStatusOptions } from './enum';
import FormHandle from '@/components/Form/handle.vue';
import TableNormal from '@/components/table/normal.vue';
import { getData } from '@/utils/transform/httpConfig';
export default defineComponent({
  name: 'address',
  components: {
    TableNormal,
    LayerNormal,
    FormHandle
  },
  props:{
    father:{
      type: Object,
      default: () => {
          return {}
      }
    }
  },
  setup(props) {
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
      size: 10,
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
      if(props.father.row){
        query.value.s_id = props.father.row._id
      }
      const queryData = getData(searchFormat,query.value)
      let params = {
        start: <number>page.index-1,
        size: page.size,
        ...queryData
      }

      addressQuery(params).then(res => {
        console.log(res);
        let data = res.data
        if (Array.isArray(data)) {
          data.forEach(d => {
            const s_a_audit_status = auditStatusOptions.find(item => item.value === d.s_a_audit_status)
            d.s_a_audit_status_desc = s_a_audit_status ?  s_a_audit_status.label : d.s_a_audit_status
            const s_a_default = defaultData.find(item => item.value === d.s_a_default)
            d.s_a_default_desc = s_a_default ?  s_a_default.label : d.s_a_default
            
            d.areaGroup = [d.s_a_province,d.s_a_city,d.s_a_area]
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
      let params = {"eq": {"_id": row._id}};
      addressDelete(params)
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
          addressValid(params).then(res=>{
            ElMessage({
              type: 'success',
              message: '切换成功'
            })
          })
      }
      else if(type=""){

      }
    }
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = '新增收货地址'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title='编辑收货地址'
      layer.show = true
      console.log(row)
      layer.row = row
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
      tableHandle
    }
  },
  methods:{
    // 新增提交事件
   async addForm(params: object) {
     const p = this.resetModel(params)
      addressInsert(p).then(res => {
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
      const data = getData(updateFormat,p)
      addressUpdate(data).then(res => {
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
      const s_id = this.query.s_id
      const s_a_audit_desc = "未审核"
      if(params.areaGroup) delete params.areaGroup
      return {...params,s_a_province,s_a_city,s_a_area,s_a_audit_desc,s_id}
    }
  }
})
</script>

<style lang="scss" scoped>

</style>