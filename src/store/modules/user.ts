import { loginApi, getInfoApi, loginOutApi,loginByCodeApi } from '@/api/user'
import { ActionContext } from 'vuex'
import store from '..'
const baseURL: any = import.meta.env.VITE_PAGE_URL

export interface userState {
  token: string,
  info: object,
  loginInfo:object,
  verificationCodeKey:string
}
const state = (): userState => ({
  token: 'admin', // 登录token
  info: {},  // 用户信息
  loginInfo:{},
  verificationCodeKey:''
})

// getters
const getters = {
  token(state: userState) {
    return state.token
  }
}

// mutations
const mutations = {
  tokenChange(state: userState, token: string) {
    state.token = token
  },
  infoChange(state: userState, info: object) {
    state.info = info
  },
  loginInfoChange(state: userState, loginInfo: object) {
    state.loginInfo = loginInfo
  },
  verificationCodeKeyChange(state: userState, verificationCodeKey: string) {
    state.verificationCodeKey = verificationCodeKey
  },
}

// actions
const actions = {
  // login by login.vue
  login({ commit, dispatch }: ActionContext<userState, userState>, params: any) {
    return new Promise((resolve, reject) => {
      let new_params = {
        "eq":{
          user_phone: params.name,
          user_pass: params.password
        }
      }
      loginApi(new_params).then(res => {
        commit('tokenChange', res.data.token)
        commit('loginInfoChange', params)
        // resolve(res.data.token)
        dispatch('getInfo')
        .then(infoRes => {
          resolve(res.data.token)
        })
      }).catch(err => {
        reject(err)
      })
    })
  },
  loginByCode({ commit, dispatch }: ActionContext<userState, userState>, params: any) {
    return new Promise((resolve, reject) => {
      const {name,verificationCode,verificationCodeKey} = params
    
      let new_params = {
        "eq":{
          user_phone: name
        },
        verificationCode,  //验证码
        verificationCodeKey //获取验证码时返回的key
      }
      loginByCodeApi(new_params).then(res => {
        commit('tokenChange', res.data.token)
        commit('loginInfoChange', params)
        // resolve(res.data.token)
        dispatch('getInfo')
        .then(infoRes => {
          resolve(res.data.token)
        })
      }).catch(err => {
        reject(err)
      })
    })
  },
  // get user info after user logined
  getInfo({ commit }: ActionContext<userState, userState>) {
    return new Promise((resolve, reject) => {
      getInfoApi()
      .then(res => {
        commit('infoChange', res.data)
        resolve(res.data)
      })
    })
  },

  // login out the system after user click the loginOut button
  loginOut({ commit }: ActionContext<userState, userState>) {
    const _this = this
    return new Promise((resolve, reject) => {
      loginOutApi().then(res => {
        localStorage.removeItem('tabs')
        localStorage.removeItem('vuex')
        sessionStorage.removeItem('vuex')
        // location.reload()
        // router.push('/login')
        setTimeout(() => {
          window.location.href = `${baseURL}login`
        }, 100);
        // resolve(res)
      })
      .catch(error => {

      })
      .finally(() => {

      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
