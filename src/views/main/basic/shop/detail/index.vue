<!-- 商品编辑单项 -->
<template >
  <Drawer :drawer="drawer">
    <div class="detail-container">
      <div>
        <!-- <p>客户基本信息</p> -->
        <basic-information :form="form" @getTableData="getTableData" />
      </div>
      <!-- <p>财务结算信息</p>
      <div class="layout-basic">
        <financial-settlement />
      </div> -->
      <div v-if="form.row">
        <p>配置信息</p>
        <div class="layout-full">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="员工信息" name="first"><staff :father="form" /></el-tab-pane>
            <el-tab-pane label="收货地址" name="second"><address1 :father="form" /></el-tab-pane>
            <!-- <el-tab-pane label="订购信息" name="second"><ordering-information :father="form" /></el-tab-pane> -->
            <!-- <el-tab-pane label="优惠券" name="third"><coupon /></el-tab-pane> -->
            <!-- <el-tab-pane label="门店设备" name="fourth"><store-equipment /></el-tab-pane> -->
            <!-- <el-tab-pane label="变更记录" name="fifth"><change-log /></el-tab-pane> -->
          </el-tabs>
        </div>
      </div>
    </div>
  </Drawer>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import basicInformation from './components/basicInformation/basicInformation.vue'
import financialSettlement from './components/financialSettlement/financialSettlement.vue'
import staff from './../staff/index.vue'
import Address1 from './../address/index.vue'

// import orderingInformation from './components/orderingInformation/orderingInformation.vue';
// import coupon from './components/coupon/index.vue';
// import storeEquipment from './components/storeEquipment/index.vue';
// import ChangeLog from './components/changeLog/changeLog.vue';
import Drawer from '@/components/drawer/index.vue';
import { formInterface } from '@/components/Form/main.vue';
export interface storeInterface {
  [propName: string]: any;
}
export default defineComponent({
  name: 'materialDetail',
  props:{
    drawer:{
      type: Object,
      default: () => {
          return {
              show: false,
              title:'',
              showButton:false
          }
      }
    }
  },
  components:{
    basicInformation,
    financialSettlement,
    staff,
    Address1,
    // orderingInformation,
    // coupon,
    // storeEquipment,
    Drawer,
    // ChangeLog
  },
  setup(props,cxt){
    const activeName = ref('first')    

    const handleClick = (tab: string, event: Event) => {
      console.log(tab, event)
    }

    const form:formInterface = reactive({
      title:props.drawer.title,
      showButton:true
    })
    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.drawer.row) {
        let row = JSON.parse(JSON.stringify(props.drawer.row));
        form.row = row
      } else {
        
      }
    }
    function getTableData(){
        cxt.emit("getTableData")
    }

    return{
      activeName,
      handleClick,
      form,
      getTableData
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