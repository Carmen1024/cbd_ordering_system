<!--  -->
<template>
   <Drawer :drawer="drawer" @confirm="submit">
       <Detail />
   </Drawer>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import Drawer from '@/components/drawer/index.vue';
import Detail from './../detail/index.vue';
export default defineComponent({
  name: 'name',
  components:{
      Drawer,
      Detail
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