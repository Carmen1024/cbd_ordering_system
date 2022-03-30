<template>
  <form-main
    :form = "form" 
    :rules = "rules"
    :itemArr="itemArr"
    @addForm="addForm"
    @updateForm="updateForm"
  />
</template>

<script lang="ts">
import { defineComponent,reactive,ref,computed } from 'vue'
import { useStore } from 'vuex';
import FormMain from '@/components/Form/main.vue';
import { rules,itemArr,updateFormat } from './enum'
import { storeInsert,storeFetch,storeUpdate,orderRulesQuery } from '@/api/shop/shop'
import { getData } from '@/utils/transform/httpConfig';

export default defineComponent({
// do not use same name with ref
components:{
  FormMain
},
props:{
  form:{
    type: Object,
    default: () => {
      return {}
    }
  }
},
setup(props){

  // const orderRules = ref({})
  const store = useStore()
  const getStore=()=>{
    let row = JSON.parse(JSON.stringify(props.form.row));
    const params={ "eq":{"_id":row._id}}
    storeFetch(params).then(res=>{
      props.form.row = res.data
    })
  }
  const getOrderRulesQuery=()=>{
    return new Promise((resolve,reject)=>{
      orderRulesQuery().then(res=>{
        //运费规则 rule_freight        r_f_id  
        //订货窗口 rule_order_period   r_o_p_id
        //发货仓库 warehouse           r_t_id
        //价格等级 rule_price          r_p_id
        //订货规则 rule_cycle_order    r_c_o_id
        const orderRules = store.state.enum.orderRules
        const freight = itemArr.find(item=>item.prop == 'r_f_id')
        freight.options = orderRules.freight

        const orderPeriod = itemArr.find(item=>item.prop == 'r_o_p_id')
        orderPeriod.options = orderRules.orderPeriod
        
        const warehouse = itemArr.find(item=>item.prop == 'wh_id')
        warehouse.options = orderRules.warehouse

        const price = itemArr.find(item=>item.prop == 'r_p_id')
        price.options = orderRules.price

        const cycleOrder = itemArr.find(item=>item.prop == 'r_c_o_id')
        cycleOrder.options = orderRules.cycleOrder

        resolve(true)
      })
    })
  }

  init()
  async function init() { // 用于判断新增还是编辑功能
    getOrderRulesQuery()
    props.form.row && getStore()
  }

  return{
      rules,
      itemArr,
  }
  
},methods:{
  // 新增提交事件
   addForm(params: object) {

      storeInsert(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '新增成功'
        })
      })
    },
    // 编辑提交事件
    updateForm(params: object) {
      const data = getData(updateFormat,params)
      storeUpdate(data)
      .then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
      })
    },
}
})
</script>
<style lang="scss" scoped>
  
</style>
