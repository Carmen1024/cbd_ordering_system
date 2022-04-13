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
  import { dictQuery,dictDelete, dictInsert,dictFetch,dictValid,dictUpdate } from '@/api/system/dictionary'
  import { valTypeData,condition,columnArr,itemArr,searchFormat,updateFormat,rules } from './enum'
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
      const queryData = getData(searchFormat,query.value)
      let params = {
        start: <number>page.index-1,
        size: page.size,
        ...queryData
      }
      dictQuery(params)
      .then(res => {
        console.log(res);
        let data = res.data
        if (Array.isArray(data)) {
          data.forEach(d => {
            const dict_val_type = valTypeData.find(item => item.value === d.dict_val_type)
            d.dict_val_type_desc = dict_val_type ?  dict_val_type.label : d.dict_val_type
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
      dictDelete(params)
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
          dictValid(params).then(res=>{
            ElMessage({
              type: 'success',
              message: '切换成功'
            })
          })
      }
    }
    const toStr = row=>{
      const valType = valTypeData.find(item=>item.value == row.dict_val_type) || null
      let newVal:any
      const val = row.dict_val
      if(typeof val === 'string'){
        newVal = val
      }else if(valType.type=='Array'){
        newVal = `[${val.join(",")}]`
      }else if(valType.type=='Object'){
        newVal = JSON.stringify(val)
      }else if(valType.type=='Array<Object>'){
        const arr = val.map(item=>JSON.stringify(item))
        newVal = `[${arr.join(",")}]`
      }else{
        newVal = val
      }
      return newVal
    }
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = '新增字典'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title='编辑字典'
      layer.show = true
      console.log(row)
      row.dict_val = toStr(row)
      layer.row = row
    }
    const handleClear = ()=>{
      query.value = {}
    }
    getTableData(true)
    // 新增提交事件
    async function addForm(params: object) {
      let newP = await validateVal(params)
      newP.dict_type=1
      dictInsert(newP)
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
      let newP = await validateVal(params)
      const data = getData(updateFormat,newP)
      dictUpdate(data)
      .then(res => {
        ElMessage({
          type: 'success',
          message: '编辑成功'
        })
        getTableData(true)
        layer.show = false
      })
    }
    function validateVal(params:Object) {
      return new Promise((resolve,reject)=>{
        
        try{
          const { dict_val_type,dict_val } = params
          const valType = valTypeData.find(item=>item.value == dict_val_type)
          let newVal:any
          if(valType){
            if(valType.type=='Number'){
              const reg = /^-?[1-9]\d*$/g
              if(reg.test(dict_val)){
                newVal = parseInt(dict_val)
              }
            }else if(valType.type=='Boolean'){
              newVal = dict_val ? true : false
            }else if(valType.type=='Array'){
              const obj = dict_val.split(",")
              if(obj.constructor === Array){
                newVal = obj
              }
            }else if(valType.type=='Object'){
              // newVal = <Boolean>dict_val
              const obj = JSON.parse(dict_val)
              if(obj.constructor === Object){
                newVal = obj
              }
            }else if(valType.type=='Array<Object>'){
              newVal = JSON.parse(dict_val)
            }else{
              newVal = dict_val
            }
          }
          console.log(newVal)
          if((newVal??'') !== ''){
            const newParams = {...params,dict_val:newVal}
            resolve(newParams)
          }else{
            ElMessage({
              type: 'error',
              message: '请根据类型填写正确的字典值格式'
            })
            reject()
          }
        }catch(e){
          ElMessage({
            type: 'error',
            message: '请根据类型填写正确的字典值格式'
          })
          reject()
        }
      })

    }
    
</script>

<style lang="scss" scoped>
  
</style>