import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/ruleSettings',
    component: Layout,
    redirect: '/ruleSettings/orderWindow',
    alwayShow: true,
    meta: { title: 'message.menu.ruleSettings.name', icon: 'iconfont icon-settings' },
    children: [
      // {
      //   path: 'settings',
      //   component: createNameComponent(() => (import('@/components/menu/index.vue'))),
      //   redirect: '/ruleSettings/orderWindow',
      //   meta: { title: 'message.menu.ruleSettings.name', icon: 'iconfont icon-settings' },
      //   alwayShow: false,
      //   children: [
          {
            path: 'priceLevel',
            component: createNameComponent(() => import('@/views/main/ruleSettings/priceLevel/index.vue')),
            meta: { title: 'message.menu.ruleSettings.priceLevel', icon: 'iconfont icon-priceLevel', cache: false }
          },
          {
            path: 'orderRules',
            component: createNameComponent(() => import('@/views/main/ruleSettings/orderRules/index.vue')),
            meta: { title: 'message.menu.ruleSettings.orderRules', icon: 'iconfont icon-orderRules', cache: false }
          },
          {
            path: 'freightTemplate',
            component: createNameComponent(() => import('@/views/main/ruleSettings/freightTemplate/list/index.vue')),
            meta: { title: 'message.menu.ruleSettings.freightTemplate.list', icon: 'iconfont icon-freightTemplate', cache: false }
          },
          {
            path: 'orderWindow',
            component: createNameComponent(() => import('@/views/main/ruleSettings/orderWindow/index.vue')),
            meta: { title: 'message.menu.ruleSettings.orderWindow', icon: 'iconfont icon-orderWindow', cache: false }
          },
        // ]
      // },
    ]
  }
]

export default route