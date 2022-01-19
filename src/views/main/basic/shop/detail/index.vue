<!-- 物料编辑单项 -->
<template >
  <Drawer :drawer="drawer" @confirm="submit">
    <div class="detail-container">
      <p>客户基本信息</p>
      <div class="layout-basic">
        <basic-information />
      </div>
      <p>财务结算信息</p>
      <div class="layout-basic">
        <financial-settlement />
      </div>
      <p>配置信息</p>
      <div class="layout-full">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="员工信息" name="first"><staff /></el-tab-pane>
          <el-tab-pane label="订购信息" name="second"><ordering-information /></el-tab-pane>
          <el-tab-pane label="优惠券" name="third"><coupon /></el-tab-pane>
          <el-tab-pane label="门店设备" name="fourth"><store-equipment /></el-tab-pane>
          <el-tab-pane label="变更记录" name="fifth"><change-log /></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </Drawer>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import basicInformation from './components/basicInformation.vue'
import financialSettlement from './components/financialSettlement.vue'
import staff from './components/staff/index.vue'
import orderingInformation from './components/orderingInformation.vue';
import coupon from './components/coupon/index.vue';
import storeEquipment from './components/storeEquipment/index.vue';
import ChangeLog from './components/changeLog.vue';
import Drawer from '@/components/drawer/index.vue';
export default defineComponent({
  name: 'materialDetail',
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
  components:{
    basicInformation,
    financialSettlement,
    staff,
    orderingInformation,
    coupon,
    storeEquipment,
    Drawer,
    ChangeLog
  },
  setup(props){
    const activeName = ref('first')    
    let form = ref({
      id:'',
      name: ''
    })
    const rules = {
      label: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    }
    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.drawer.row) {
        form.value = JSON.parse(JSON.stringify(props.drawer.row)) // 数量量少的直接使用这个转
      } else {

      }
    }
    const handleClick = (tab: string, event: Event) => {
    console.log(tab, event)
    }
    // import { useRoute } from 'vue-router'
    // const route = useRoute();
    // username = ref(<string>route.query.username)
    // 打印
    const submit = ()=>{
      console.log("confirm");
      props.drawer.show = false;
    }
    return{
      activeName,
      handleClick,
      form,
      submit
    }
  },
})
</script>
<style lang='scss' scoped>
    .detail-container{
      // display: flex;
      // flex-direction: column;
      .tip{
        padding:10px;
        color:var(--system-primary-color);
      }
      .layout-basic{
          padding:15px;
      }
      .layout-full{
          padding:15px;
          // height: 500px;
      }
      p{
        // width: 100%;
        margin:0 10px;
        line-height: 40px;
        border-bottom: solid 1px #ddd;
        text-align: left;
      }
    }
</style>