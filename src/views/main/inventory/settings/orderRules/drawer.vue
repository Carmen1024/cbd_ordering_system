<!--  -->
<template>
   <Drawer :drawer="drawer" @confirm="submit">
       test
   </Drawer>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import Drawer from '@/components/drawer/index.vue';
export default defineComponent({
  name: 'name',
  components:{
      Drawer
  },
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
  setup(props){

    const submit = ()=>{
      console.log("confirm");
      props.drawer.show = false;
    }
    return{
      submit
    }
  },
})
</script>
<style lang='scss' scoped>
 
</style>