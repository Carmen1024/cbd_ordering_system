import { getAreaList } from '@/utils/system/store'
import { areaTree } from '@/api/area/area';
import { ActionContext } from 'vuex'

export interface areaState {
  areaList : Array<any>
}
const state = (): areaState => ({
  areaList:[]
})

const getters = {
  
}

// mutations
const mutations = {
  areaListChange(state: areaState, areaList: Array<any>) {
    state.areaList = areaList
  }
}

// actions
const actions = {
  // login by login.vue
  
  // get user info after user logined
  getArea({ commit }: ActionContext<areaState, areaState>) {
    return new Promise((resolve, reject) => {
      // getAreaList().then(areaList => {
      //   resolve(areaList)
      // },rej=>{
      //   reject("不存在")
      // })
      areaTree().then(res=>{
        commit('areaListChange', res.data)
        resolve(res.data)
      })
    })
  },
  getAreaStr({ commit }: ActionContext<areaState, areaState>, params: any) {
    let group1,group2,group3
    let {pro_code='',city_code='',area_code=''} = params
    group1 = state.areaList.find(item=>{
      item.code == pro_code
    })
    if(!group1){
      return ''
    }
    pro_code = group1.name
    group2 = group1.children.find(item=>{
      item.code == city_code
    })
    if(!group2){
      return pro_code
    }
    city_code = group2.name
    group3 = group1.children.find(item=>{
      item.code == area_code
    })
    if(!group3){
      return pro_code + city_code
    }
    area_code = group.name

    return pro_code + city_code + area_code
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
