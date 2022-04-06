<!-- 抽屉 -->
<template>
   <div class="drawerContainer">
       <el-drawer
          v-model="drawer.show"
          :title="drawer.title"
          :direction="direction"
          :before-close="handleClose"
          :with-header="drawer.title"
          :size="drawer.width || '30%'"
        >
          <div class="drawer_main"><slot></slot></div>
          <div class="demo-drawer__footer" v-if="drawer.showButton">
            <el-button type="primary" :loading="loading" @click="confirm">确认</el-button>
            <el-button @click="close">取消</el-button>
          </div>
          <div class="demo-drawer__footer" v-else>
            <el-button @click="close">关闭</el-button>
          </div>
        </el-drawer>
   </div>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import { ElMessageBox } from 'element-plus'
export interface DrawerInterface {
  show: boolean;
  title: string;
  showButton?: boolean;
  width?: string;
  [propName: string]: any;
}
export default defineComponent({
  name: 'name',
  props:{
      drawer:{
        type: Object,
        default: () => {
            return {
                show: false,
                title:'',
                showButton:true
            }
        }
      }
  },
  setup(props,ctx){
    const direction = ref('rtl')
    const handleClose = (done: () => void) => {
        ElMessageBox.confirm('关闭前请确认已保存')
            .then(() => {
            done()
            })
            .catch(() => {
            // catch error
            })
    }
    function confirm() {
      ctx.emit('confirm')
    }
    const close=()=>{
      props.drawer.show = false
    }
    return{
      direction,
      handleClose,
      confirm,
      close
    }
  },
})
</script>
<style lang='scss'>
  .el-drawer__header{
    margin-bottom: 0;
    // border-bottom: solid 1px #ddd;
  }
  .el-drawer__body{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .drawer_main{
      overflow-y: scroll;
      height: 100%;
    }
    .demo-drawer__footer{
      border-top: solid 1px #ddd;
      margin-top: 10px;
      padding-top: 10px;
      // height: 50px;
    }
  }

</style>