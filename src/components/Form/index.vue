<template>
  <div class="formContainer">
    <el-form :ref="formRef" :model="form" label-width="120px">
        <slot></slot>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
// do not use same name with ref
setup(){
    const formRef = "formRef";
    return{
        formRef
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
