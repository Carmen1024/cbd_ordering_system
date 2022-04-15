<!-- 商品编辑单项 -->
<template >
  <Drawer :drawer="drawer">
    <div class="detail-container">
      <basic-information :form="form" @getTableData="getTableData" />
    </div>
  </Drawer>
</template>

<script lang='ts' setup>
  import { defineComponent,ref,reactive } from 'vue'
  import basicInformation from './components/basicInformation/basicInformation.vue'
  import relation from './components/relation/index.vue';
  import Drawer from '@/components/drawer/index.vue';
  import { formInterface } from '@/components/Form/main.vue';
  export interface storeInterface {
    [propName: string]: any;
  }
  const props = defineProps({
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
  })
  const emit = defineEmits(["getTableData"])
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
      emit("getTableData")
  }

</script>
<style lang='scss'>
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