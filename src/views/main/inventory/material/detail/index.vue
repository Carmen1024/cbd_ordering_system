<!-- 物料编辑单项 -->
<template >
  <Drawer :drawer="drawer" @confirm="submit">
    <div class="detail-container">
      <p>基本信息</p>
      <div class="layout-basic">
        <BasicInformation :basic-info="drawer"  />
      </div>
      <p>详细信息</p>
      <!-- <div class="layout-full">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="效期管理" name="first"><ValidityPeriod /></el-tab-pane>
          <el-tab-pane label="关联物料" name="second"><Relation /></el-tab-pane>
          <el-tab-pane label="补充信息" name="third"><AdditionalInformation /></el-tab-pane>
        </el-tabs> -->
      <!-- </div> -->
    </div>
  </Drawer>
</template>

<script lang='ts'>
import { defineComponent,reactive,ref } from 'vue'
import BasicInformation from './components/basicInformation.vue'
import Relation from './components/relation/index.vue';
import ValidityPeriod from './components/validityPeriod.vue';
import AdditionalInformation from './components/additionalInformation.vue';
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
    BasicInformation,
    Relation,
    ValidityPeriod,
    AdditionalInformation,
    Drawer,
  },
  setup(props){
    const activeName = ref('first')    
    let form = ref({
      id:'',
      name: ''
    })

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