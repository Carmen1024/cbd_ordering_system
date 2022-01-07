<!--  -->
<template >
    <!-- {{this.$route.query}} -->
    <div class="layout-container">
        <p>基本信息</p>
        <div class="layout-basic">
            <BasicInformation />
        </div>
        <p>详细信息</p>
        <div class="layout-full">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="存储信息" name="first"><StoreInformation /></el-tab-pane>
                <el-tab-pane label="关联物料" name="second"><Relation /></el-tab-pane>
                <el-tab-pane label="效期管理" name="third"><ValidityPeriod /></el-tab-pane>
                <el-tab-pane label="补充信息" name="fourth"><AdditionalInformation /></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import BasicInformation from './components/basicInformation.vue'
import StoreInformation from './components/storeInformation.vue'
import Relation from './components/relation/index.vue';
import ValidityPeriod from './components/validityPeriod.vue';
import AdditionalInformation from './components/additionalInformation.vue';
export default defineComponent({
  name: 'materialDetail',
  components:{
    BasicInformation,
    StoreInformation,
    Relation,
    ValidityPeriod,
    AdditionalInformation
  },
  setup(){
    const activeName = ref('first')    
    const handleClick = (tab: string, event: Event) => {
    console.log(tab, event)
    }
    // console.log(this.$router.query);
    return{
      activeName,
      handleClick
    }
  },
})
</script>
<style lang='scss' scoped>
    .layout-container{
        .layout-basic{
            padding:15px;
        }
        .layout-full{
            padding:15px;
        }
        p{
            margin:0 10px;
            line-height: 40px;
            border-bottom: solid 1px #ddd;
            text-align: left;
        }
    }
</style>