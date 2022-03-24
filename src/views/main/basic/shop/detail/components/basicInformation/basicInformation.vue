<template>
  <form-main
    :form = "form" 
    :rules = "rules"
    :itemArr="itemArr"
    @addForm="addForm"
    @updateForm="updateForm"
  />
</template>

<script lang="ts">
import { defineComponent,reactive,ref,computed } from 'vue'
import FormMain from '@/components/Form/main.vue';
import { rules,itemArr,updateFormat } from './enum'
import { storeInsert,storeFetch,storeUpdate } from '@/api/shop/shop'
import { getData } from '@/utils/transform/httpConfig';
export default defineComponent({
// do not use same name with ref
components:{
  FormMain
},
props:{
  form:{
    type: Object,
    default: () => {
        return {}
    }
  }
},
setup(props){

  init()
  function init() { // 用于判断新增还是编辑功能
    if (props.form.row) {
      let row = JSON.parse(JSON.stringify(props.form.row));
      const params={ "eq":{"_id":row._id}}
      storeFetch(params).then(res=>{
        props.form.row = res.data
      })
    } else {

    }
  }

  return{
      rules,
      itemArr,
      
  }
  
},methods:{
  // 新增提交事件
   addForm(params: object) {

      storeInsert(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '新增成功'
        })
      })
    },
    // 编辑提交事件
    updateForm(params: object) {
      const data = getData(updateFormat,params)
      storeUpdate(data)
      .then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
      })
    },
}
})
</script>
<style lang="scss" scoped>
  
</style>
