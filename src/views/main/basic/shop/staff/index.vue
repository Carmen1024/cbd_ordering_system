
<template>
  <div class="layout-container">
    <form-handle 
      :condition="conditions" 
      :query="query"
      :handles="handles"
      @getTableData="getTableData"
      @handleAdd="handleAdd"  
    />
    <table-normal 
      :columnArr="columnArr" 
      :tableData="tableData"
      :page="page"
      :loading="loading"
      :handles="tableHandles"
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
import { staffQuery,staffDelete, staffInsert,staffFetch,staffValid,staffUpdate } from '@/api/shop/staff'
import { valTypeData,condition,columnArr,itemArr,searchFormat,updateFormat,rules,tableHandles } from './enum';
import FormHandle from '@/components/Form/handle.vue';
import TableNormal from '@/components/table/normal.vue';
import { getData } from '@/utils/transform/httpConfig';
export default defineComponent({
  name: 'orderRules',
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
    const from = ref("")
    const handles = ref(['search','add'])
    const conditions = ref(condition)
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
      size: 10,
      total: 0
    })
    const loading = ref(true)
    const tableData = ref([])
    const chooseData = ref([])

    if(props.father.row){ //门店-员工
      query.value.s_id = props.father.row._id
      from.value = "store"
      handles.value = ['add']
      conditions.value = []
    }

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
      const queryData = getData(searchFormat,query.value)
      let params = {
        start: <number>page.index-1,
        size: page.size,
        ...queryData
      }
      console.log(props.father)

      staffQuery(params,from.value)
      .then(res => {
        console.log(res);
        let data = res.data
        if (Array.isArray(data)) {
          data.forEach(d => {
            const staff_val_type = valTypeData.find(item => item.value === d.staff_val_type)
            d.staff_val_type_desc = staff_val_type ?  staff_val_type.label : d.staff_val_type
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
      staffDelete(params)
      .then(res => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        getTableData(tableData.value.length === 1 ? true : false)
      })
    }
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = '新增员工'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title='编辑员工'
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
      conditions,
      columnArr,
      rules,
      itemArr,
      from,
      tableHandles,
      handles
      
    }
  },
  methods:{
    // 新增提交事件
   async addForm(params: object) {
     if(this.father.row) params.s_id = this.query.s_id
      staffInsert(params,this.from)
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
      const data = getData(updateFormat,params)
      staffUpdate(data)
      .then(res => {
        this.$message({
          type: 'success',
          message: '修改成功'
        })
        this.getTableData(true)
        this.layer.show = false
      })
    },
    tableHandle({ type,row}) {
      if( type =='valid'){
          const params = getData({"eq":["_id"],"set":["c_valid"]},row)
          staffValid(params).then(res=>{
            ElMessage({
              type: 'success',
              message: '切换成功'
            })
          })
      }
      if( type == 'editPass' ){
        const { _id,user_phone } = row
        const user_pass = user_phone.substring(user_phone.length-6)
        this.updateForm({_id,user_pass})
      }
    }
  }
})
</script>

<style lang="scss" scoped>

</style>