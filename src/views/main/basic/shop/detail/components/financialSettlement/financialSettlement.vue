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
import { defineComponent,reactive,ref } from 'vue'
import FormMain from '@/components/Form/main.vue';
import { rules,itemArr } from './enum'
import { storeInsert,storeFetch,storeUpdate } from '@/api/shop/shop'
import { getData } from '@/utils/transform/httpConfig';

export default defineComponent({
// do not use same name with ref
components:{
  FormMain
},
setup(){

  const form = reactive({
    show: false,
    title: '新增',
    showButton: true,
  })

  return{
      form,
      rules,
      itemArr
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
      const data = getData({
        "eq":["_id"],
        "set":["dict_group","dict_key","store_status","dict_name","dict_val_type","dict_val"]
        },params)
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
