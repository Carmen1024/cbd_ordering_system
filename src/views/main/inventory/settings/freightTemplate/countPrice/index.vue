<!--  -->
<template>
  <div  class="price">
    <div>
      <el-radio v-model="radio1" label="1" size="large">固定收费</el-radio>
      <span>每月第一单收取固定费用</span>
      <el-input v-model="input" placeholder="运费金额" />
      <span>元</span>
    </div>
    <div class="price-total">
      <el-radio v-model="radio2" label="1" size="large">按金额收费</el-radio>
      <div>
        <p>
          <span>每单总金额满</span>
          <el-input v-model="input" placeholder="订单金额" />
          <span>元收</span>
          <el-input v-model="input" placeholder="运费金额" />
          <span>元（包邮）</span>
        </p>
        <p>
          <span>每单总金额未满</span>
          <el-input v-model="input" placeholder="订单金额" />
          <span>元收</span>
          <el-input v-model="input" placeholder="运费金额" />
          <span>元（最低收费）</span>
        </p>
      </div>
    </div>
    <div>
      <el-radio v-model="radio2" label="1" size="large">按件收费</el-radio>
      <price />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Price from './price.vue';
export default defineComponent({
  name: 'name',
  components:{
    Price
  },
  setup(){
    
    return{
      
    }
  },
})
</script>
<style lang='scss'>
   .price{
    flex-wrap: wrap;
    align-items: center;
    > div{
      border-bottom: dashed 1px #ddd;
    }
    &-total{
      display: flex;
      p{
        margin: 0;
        line-height: 40px;
      }
    }
    .el-input{
      width: 100px;
      margin: 0 10px;
    }
  }
</style>