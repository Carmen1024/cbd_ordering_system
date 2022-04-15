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
    <Detail :drawer="drawer" v-if="drawer.show" />
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent, ref, reactive } from 'vue'
  import { useStore } from 'vuex'
  import TableNormal from '@/components/table/normal.vue'
  import FormHandle from '@/components/Form/handle.vue'
  import { Page } from '@/components/table/type'
  import { getData } from '@/utils/transform/httpConfig'
  import { packQuery,packDelete,packValid } from '@/api/material/pack'
  import { ElMessage } from 'element-plus'
  import type { DrawerInterface } from '@/components/drawer/index.vue'
  import { options,sData,condition,columnArr,statusData,storageData } from './enum'
  import { Plus, Search, Delete } from '@element-plus/icons'
  import Detail from './detail/index.vue'
    
  const pack = useStore()
  // 存储搜索用的套餐
  const query:any = ref({})
  // 弹窗控制器
  const drawer: DrawerInterface = reactive({
    show:false,
    title:"编辑规则",
    showButton:false,
    width:'70%'
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
  // 获取表格套餐
  // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
  const getTableData = (init: boolean) => {
    loading.value = true
    if (init) {
      page.index = 1
    }
    let params = {
      start: <number>page.index-1,
      size: page.size,
      ...query.value
    }
    packQuery(params).then(res => {
      let data = res.data
      if (Array.isArray(data)) {
        data.forEach(d => {
          d.countFreightFlag_desc = d.countFreightFlag ? "计算":"不计算"
          d.status_desc = d.status ? "正常":"下架"
        })
      }
      tableData.value = data
      page.total = Number(res.total)
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
  const handleDel = (data: object[]) => {
    let params = {
      ids: data.map((e:any)=> {
        return e.id
      }).join(',')
    }
    packDelete(params)
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
        packValid(params).then(res=>{
          ElMessage({
            type: 'success',
            message: '切换成功'
          })
        })
    }
  }
  // 新增弹窗功能
  const handleAdd = () => {
    drawer.title = '新增套餐'
    drawer.show = true
    delete drawer.row
  }
  // 编辑弹窗功能
  const handleEdit = (row: object) => {
    drawer.title = '编辑套餐'
    drawer.row = row
    drawer.show = true
  }
  const handleClear = ()=>{
    query.value = {}
  }
  
  const getOrderRulesQuery=()=>{
    pack.dispatch('enum/getOrderRules').then(() => {
      
    })
  }
      
  init()
  async function init(){
    await getTableData(true)
    const orderRules = pack.state.enum.orderRules
    console.log(orderRules)
    getOrderRulesQuery()
  }
</script>

<style lang="scss" scoped>
  
</style>