import { ActionContext } from 'vuex'
import { orderRulesQuery } from '@/api/shop/shop'


export interface enumState {
  orderRules : object
}
const state = (): enumState => ({
  orderRules:{}
})

// mutations
const mutations = {
  orderRulesChange(state: enumState, orderRules: Array<any>) {
    state.orderRules = orderRules
  }
}

// actions
const actions = {
  // login by login.vue
  
  // get user info after user logined
  getOrderRules({ commit }: ActionContext<enumState, enumState>) {
    return new Promise((resolve, reject) => {
      orderRulesQuery()
      .then(res => {
        let orderRules:object = {}
        orderRules.freight = res.data.rule_freight.map(item=>{
          return {value:item.r_f_code,label:item.r_f_name}
        })
        orderRules.orderPeriod = res.data.rule_order_period.map(item=>{
          return {value:item.r_o_p_code,label:item.r_o_p_name}
        })

        orderRules.warehouse = res.data.warehouse.map(item=>{
          return {value:item.wh_code,label:item.wh_name}
        })

        orderRules.price = res.data.rule_price.map(item=>{
          return {value:item.r_p_code,label:item.r_p_name}
        })

        orderRules.cycleOrder = res.data.rule_cycle_order.map(item=>{
          return {value:item.r_c_o_code,label:item.r_c_o_name}
        })
        console.log(orderRules)
        commit('orderRulesChange', orderRules)
        resolve(orderRules)
      },rej=>{
        reject("不存在")
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
