<template>
  <div class="formContainer">
    <el-form :ref="formRef" :model="form" :rules="rules" label-width="120px">
      <slot></slot>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent,watch,onMounted } from 'vue'
  export default defineComponent({
    // do not use same name with ref
    props:{
        rules:{
          type: Object,
          default: () => {
            return {}
          }
        },
        form:{
          type: Object,
          default: () => {}
        },
        formRef:{
          type: String,
          default: "formRef"
        },
    },
    setup(props){
      console.log("props.rules:",props.rules)
      // onMounted(() => {
      //   watch(props.rules, (newVal) => {
      //     console.log("props.rules2:",newVal)
      //   })
      // })
      // watch(props.rules, (newVal) => {
      //   console.log("props.rules1:",newVal)
      // })
      return {

      }
    }

  })
</script>
<style lang="scss">
    .formContainer{
      max-width: 1000px;
      .el-form{
        display: flex;
        flex-wrap: wrap;
        .el-form-item{
          width: 50%;
          text-align: left;
        }
      }
    }
</style>
