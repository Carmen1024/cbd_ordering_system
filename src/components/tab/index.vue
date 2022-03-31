<!--  -->
<template>
    <div class="tab-container">
        <span 
            v-for="(item,index) in tabs" 
            :key="index"
            @click="handleClick(item)"
            :class="tabValue == item.value ? 'active' : ''"
        >
            {{item.label}}
        </span>
    </div>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'name',
  props:{
      tabs:{
          type:Array,
          default(){
              return []
          }
      },
      tabValue:{
          type:Number,
          default(){
              return -1
          }
      }
  },
  setup(props,cxt){
    
    const store = useStore()

    const handleClick = (item:object)=>{
        cxt.emit("change",item)
    }
    
    return{
      handleClick
    }
  },
  methods:{
      
  }
})
</script>
<style lang='scss' scoped>
    .tab-container{
        margin:0 20px;
        // padding:10px;
        // width: 100%;
        display: flex;
        border-bottom: solid 1px #ddd;
        span{
            border:solid 1px #ddd;
            border-bottom: none;
            padding:0 20px;
            line-height: 30px;
            border-radius: 5px 5px 0 0;
            cursor: pointer;
        }
        .active{
            background-color: var(--system-primary-color);
            border-color: var(--system-primary-color);
            color: #fff;
        }
    }
</style>