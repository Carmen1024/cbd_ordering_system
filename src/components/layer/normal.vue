<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <form-main
      :form="form" 
      :rules="rules"
      :itemArr="itemArr"
      @addForm="addForm"
      @updateForm="updateForm"
     />
  </Layer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Layer from '@/components/layer/index.vue'
import formMain from '@/components/Form/main.vue';

export default defineComponent({
  components: {
    Layer,
    formMain
  },
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: true
        }
      }
    },
    rules:{
      type: Array,
      default: () => {
        return []
      }
    },
    itemArr:{
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(props, ctx) {
    
    const form=ref({
      showButton:true,
      row:null
    })


    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.layer.row) {
        let row = JSON.parse(JSON.stringify(props.layer.row));
        form.value.row = row // 数量量少的直接使用这个转
      } else {

      }
    }

    const updateForm = (params: object)=>{
      ctx.emit("updateForm",params)
    }
    const addForm = (params: object)=>{
      ctx.emit("addForm",params)
    }

    return {
      form,
      updateForm,
      addForm
    }
  }
})
</script>

<style lang="scss" scoped>
  .el-form{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // padding: 15px 15px 0;
  }
</style>