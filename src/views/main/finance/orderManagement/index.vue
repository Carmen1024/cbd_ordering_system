<template>
  <div class="layout-container">
    <form-handle 
      :condition="condition" 
      :query="query"
      :handles="['search']"
      @getTableData="getTableData"
      @handleClear="handleClear"
    />
    <!--  -->
    <!-- <tab :tabs="tabs" :tabValue="tabValue" @change="changeTab" /> -->
    <table-normal 
      :columnArr="columnArr" 
      :tableData="tableData"
      :page="page"
      :loading="loading"
      :handles="tableHandles"
      @getTableData="getTableData"
      @handleSelectionChange="handleSelectionChange"
      @tableHandle="tableHandle"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { Page } from '@/components/table/type'
import { ElMessage } from 'element-plus'
import LayerNormal from '@/components/layer/normal.vue';
import type { LayerInterface } from '@/components/layer/index.vue'
import { dictQuery,dictValid } from '@/api/system/dictionary'
import { condition,columnArr,searchData,tabs } from './enum';
import FormHandle from '@/components/Form/handle.vue';
import TableNormal from '@/components/table/normal.vue';
import { getData } from '@/utils/transform/httpConfig';
import Tab from '@/components/tab/index.vue';
export default defineComponent({
  name: 'orderRules',
  components: {
    TableNormal,
    LayerNormal,
    FormHandle,
    Tab,
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
    const tabValue = ref(-1)
    const tableHandles = [
      { value: "detail", label: '查看'}
    ]
    
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
      dictQuery(params)
      .then(res => {
        console.log(res);
        let data = res.data
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
    
    const tableHandle = ({ type,row}) => {
      if( type =='valid'){
          const params = getData({"eq":["_id"],"set":["c_valid"]},row)
          dictValid(params).then(res=>{
            ElMessage({
              type: 'success',
              message: '切换成功'
            })
          })
      }else if(type=="detail"){
        
      }
    }
    
    const handleClear = ()=>{
      query.value = {}
      getTableData(true)
    }
    getTableData(true)
    return {
      query,
      tableData,
      chooseData,
      loading,
      page,
      handleSelectionChange,
      getTableData,
      layer,
      condition,
      columnArr,
      tableHandle,
      tabs,
      tabValue,
      handleClear,
      tableHandles
    }
  },
  methods:{
    // 新增提交事件
   async addForm(params: object) {
      dictInsert(params)
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
      const data = getData({
        "eq":["_id"],
        "set":["dict_group","dict_key","store_status","dict_name","dict_val_type","dict_val"]
        },params)
      dictUpdate(data)
      .then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
        this.getTableData(true)
        this.layer.show = false
      })
    },
    changeTab(item:object){
      this.tabValue = item.value
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>