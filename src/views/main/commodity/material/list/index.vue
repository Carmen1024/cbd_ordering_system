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
    <Detail @getTableData="getTableData" :drawer="drawer" v-if="drawer.show" />
  </div>
</template>

<script lang="ts" setup>
  import { defineComponent, ref, reactive } from 'vue'
  import { useStore } from 'vuex'
  import TableNormal from '@/components/table/normal.vue'
  import FormHandle from '@/components/Form/handle.vue'
  import { Page } from '@/components/table/type'
  import { getData } from '@/utils/transform/httpConfig'
  import { materialQuery,materialDelete,materialValid } from '@/api/material/material'
  import { ElMessage } from 'element-plus'
  import type { DrawerInterface } from '@/components/drawer/index.vue'
  import { options,sData,condition,columnArr,statusData,storageData } from './enum'
  import { Plus, Search, Delete } from '@element-plus/icons'
  import Detail from './../detail/index.vue'
  import { materialFetch } from '@/api/material/material';
  import { resolve } from 'dns'
  import { rejects } from 'assert'
    
  const material = useStore()
  // 存储搜索用的数据
  const query:any = ref({})
  // 弹窗控制器
  const drawer: DrawerInterface = reactive({
    show:false,
    title:"编辑规则",
    showButton:true,
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
  // 获取表格数据
  // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
  const getTableData = (init: boolean) => {
    loading.value = true
    drawer.show = false
    if (init) {
      page.index = 1
    }
    let params = {
      start: <number>page.index-1,
      size: page.size,
      ...query.value
    }
    materialQuery(params).then(res => {
      let data = res.data
      if (Array.isArray(data)) {
        data.forEach(d => {
          const m_status = statusData.find(item=>item.value == d.m_status)
          d.m_status_desc = m_status ? m_status.label : d.m_status

          const m_storage_type = storageData.find(item=>item.value == d.m_storage_type)
          d.m_storage_type_desc = m_storage_type ? m_storage_type.label : d.m_storage_type

          d.m_is_cac_freight_desc = d.m_is_cac_freight ? "计算":"不计算"
          d.c_valid = d.c_valid ? true:false
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
  const handleDel = (row:object) => {
    let params = {_id:row._id}
    materialDelete(params).then(res => {
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
      getTableData(tableData.value.length === 1 ? true : false)
    })
  }
  const tableHandle = ({ type,row}) => {
    if( type =='valid'){
        const {_id,c_valid} = row
        materialValid({_id,c_valid}).then(res=>{
          ElMessage({
            type: 'success',
            message: '切换成功'
          })
        })
    }
  }
  // 新增弹窗功能
  const handleAdd = () => {
    drawer.title = '新增数据'
    drawer.show = true
    delete drawer.row
  }
  // 编辑弹窗功能
  const handleEdit = async (row: object) => {
    drawer.title = '编辑数据'
    drawer.row = await getMaterial(row)
    drawer.show = true
  }
  const handleClear = ()=>{
    query.value = {}
  }
  
  const getClassifyQuery=()=>{
    material.dispatch('enum/getClassifyOptions').then(() => {
      
    })
  }

  function getMaterial(row:object){
    return new Promise((resolve,reject)=>{
      const params={"_id":row._id}
      materialFetch(params).then(res=>{
        const vo = res.data.materialDetailResultVo
        const {_id,m_p_money,m_name,m_code,m_package,clf_b_id,m_status,m_classify_id} = vo
        const {order_unit,m_sell_type,order_unit_count,m_order_window_ctrl,stock_unit_count,
              m_order_step_type,bom_unit_count,m_split_type,m_order_lower,m_order_upper,
              m_is_check_stock,bom_unit,m_storage_type,stock_unit,m_is_cac_freight} = vo.m_sell_info
        const {m_s_desc,m_s_brand,m_s_origin_place,m_s_main_picture,m_s_attachment_file} = vo.materialGroup
        const m_classify_id_arr = m_classify_id?.split("/") || []
        const newRow = {
          _id,m_p_money,m_name,m_code,m_package,clf_b_id,m_status,m_classify_id_arr,
          order_unit,m_sell_type,order_unit_count,m_order_window_ctrl,stock_unit_count,
          m_order_step_type,bom_unit_count,m_split_type,m_order_lower,m_order_upper,
          m_is_check_stock,bom_unit,m_storage_type,stock_unit,m_is_cac_freight,
          m_s_desc,m_s_brand,m_s_origin_place,m_s_main_picture,m_s_attachment_file
        }
        resolve(newRow)
      })
    })
  }
      
  init()
  async function init(){
    await getTableData(true)
    const orderRules = material.state.enum.orderRules
    console.log(orderRules)
    getClassifyQuery()
  }
</script>

<style lang="scss" scoped>
  
</style>