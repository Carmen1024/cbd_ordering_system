/**
 * @description 所有人可使用的参数配置列表
 * @params hideMenu: 是否隐藏当前路由结点不在导航中展示
 * @params alwayShow: 只有一个子路由时是否总是展示菜单，默认false
 */
import type { Route } from './index.type'
import { reactive } from 'vue'
import { createRouter, createWebHashHistory,createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import i18n from '@/locale'
import NProgress from '@/utils/system/nprogress'
import { changeTitle } from '@/utils/system/title'

NProgress.configure({ showSpinner: false })

// 动态路由相关引入数据
import Layout from '@/layout/index.vue'
import MenuBox from '@/components/menu/index.vue'
import { createNameComponent } from './createNode'

// 引入modules
import Dashboard from './modules/dashboard'
import System from './modules/system'
import Inventory from './modules/inventory';
import Basic from './modules/basic';
import Charge from './modules/charge';
import Finance from './modules/finance';
// import Project from './modules/project';
import User from './modules/user';
import RuleSettings from './modules/ruleSettings';
import Commodity from './modules/commodity';
import Marketing from './modules/marketing';
import Deploy from './modules/deploy';
import Statistics from './modules/statistics';

/** 
 * @name 初始化必须要的路由
 * @description 使用reactive属性使得modules可以在路由菜单里面实时响应，搞定菜单回显的问题
 * @detail 针对modules的任何修改，均会同步至菜单级别，记住，是针对变量名为：moduels的修改
 **/
let modules = reactive([
  ...System
])

const { t } = i18n.global

const routes: any = modules

const router = createRouter({
  history: createWebHistory('/admintest/'), //createWebHistory createWebHashHistory
  routes
})

// 登录后动态加入的路由
let asyncRoutes: Route[] = [
  ...Dashboard,
  ...Commodity,
  ...Basic,
  ...Inventory,
  ...RuleSettings,
  // ...Charge,
  ...Finance,
  ...Marketing,
  // ...Project,
  ...Statistics,
  ...User,
  ...Deploy,
]
// 动态路由的权限新增，供登录后调用
export async function addRoutes() {

  // 与后端交互的逻辑处理，处理完后异步添加至页面
  // let data = [ // 来源于后端的数据
  //   {
  //     path: '/echarts',
  //     meta: { title: '权限管理', icon: 'el-icon-pie-chart' },
  //     children: [
  //       {
  //         meta: { title: '菜单管理' },
  //         component: 'index',
  //         path: 'box456789'
  //       },
  //       {
  //         meta: { title: '角色管理' },
  //         component: 'index',
  //         path: 'box1'
  //       },
  //       {
  //         meta: { title: '用户管理' },
  //         component: 'index',
  //         path: 'box1456'
  //       },
  //     ]
  //   },
  // ]
  // eachData(data, 0) // 匹配本地路由，产生一棵新树
  // data.forEach(item => { // 添加到路由表里面去
  //   modules.push(item)
  //   router.addRoute(item)
  // })

  // 已验证完成，下面代码添加的可以实时同步至菜单中去，可以添加setTimeout(() => {}) 模拟异步代码的操作
  // 利用前端路由表模拟后端数据问题
  asyncRoutes.forEach(item => {
    modules.push(item)
    router.addRoute(item)
  })
}

// 重置匹配所有路由的解决方案，todo
function eachData(data: any, type?: number) {
  data.forEach(d => {
    if (d.children && d.children.length > 0) {
      if (type === 0) {
        d.component = Layout
      } else {
        d.component = createNameComponent(() => MenuBox)
      }
      eachData(d.children, type + 1)
    } else {
      /* 组件匹配暂时写死，todo项 */
      // d.component = createNameComponent(() => import('@/views/main/pages/crudTable/index.vue'))
      // d.component = x.component
    }
  })
  console.log(data)
}

// 如果你登录了，那么系统才会把路由加入到路由表里面，防止越权访问
if (store.state.user.token) {
  addRoutes()
}

// 未授权时可访问的白名单
const whiteList = ['/login']

// 路由跳转前的监听操作
router.beforeEach((to, _from, next) => {
  NProgress.start();
  if (store.state.user.token || whiteList.indexOf(to.path) !== -1) {
    to.meta.title ? (changeTitle(to.meta.title)) : ""; // 动态title
    next()
  } else {
    next("/login"); // 全部重定向到登录页
    to.meta.title ? (changeTitle(to.meta.title)) : ""; // 动态title
  }
});

// 路由跳转后的监听操作
router.afterEach((to, _from) => {
  const keepAliveComponentsName = store.getters['keepAlive/keepAliveComponentsName'] || []
  const name = to.matched[to.matched.length - 1].components.default.name
  if (to.meta && to.meta.cache && name && !keepAliveComponentsName.includes(name)) {
    store.commit('keepAlive/addKeepAliveComponentsName', name)
  }
  NProgress.done();
});

export {
  modules
}

export default router
