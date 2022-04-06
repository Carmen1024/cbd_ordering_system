<!-- 商品编辑单项 -->
<template >
  <Drawer :drawer="drawer">
    <div class="detail-container">
      <div>
        
      </div>
    </div>
  </Drawer>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import Drawer from '@/components/drawer/index.vue';
export default defineComponent({
  name: 'orderDetail',
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
    Drawer,
  },
  setup(props){
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

    return{
      activeName,
      handleClick,
      form
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