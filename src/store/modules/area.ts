import { getAreaList } from '@/utils/system/store'
import { ActionContext } from 'vuex'

export interface areaState {
  areaList : Array<any>
}
const state = (): areaState => ({
  areaList:[]
})

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
      getAreaList()
      .then(areaList => {
        commit('areaListChange', areaList)
        resolve(areaList)
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
