import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/inventory',
    component: Layout,
    redirect: '/inventory/material',
    alwayShow: true,
    meta: { title: 'message.menu.inventory.name', icon: 'iconfont icon-inventory' },
    children: [
      {
        path: 'settings',
        component: createNameComponent(() => (import('@/components/menu/index.vue'))),
        redirect: '/inventory/settings/orderWindow',
        meta: { title: 'message.menu.inventory.settings.name', icon: 'iconfont icon-settings' },
        alwayShow: false,
        children: [
          {
            path: 'orderWindow',
            component: createNameComponent(() => import('@/views/main/inventory/settings/orderWindow/index.vue')),
            meta: { title: 'message.menu.inventory.settings.orderWindow', icon: 'iconfont icon-orderWindow', cache: false }
          },
          {
            path: 'orderRules',
            component: createNameComponent(() => import('@/views/main/inventory/settings/orderRules/index.vue')),
            meta: { title: 'message.menu.inventory.settings.orderRules', icon: 'iconfont icon-orderRules', cache: false }
          },
          {
            path: 'priceLevel',
            component: createNameComponent(() => import('@/views/main/inventory/settings/priceLevel/index.vue')),
            meta: { title: 'message.menu.inventory.settings.priceLevel', icon: 'iconfont icon-priceLevel', cache: false }
          },
          {
            path: 'storeHouse',
            component: createNameComponent(() => import('@/views/main/inventory/settings/storeHouse/index.vue')),
            meta: { title: 'message.menu.inventory.settings.storeHouse', icon: 'iconfont icon-storeHouse', cache: false }
          },
          {
            path: 'transferRelationship',
            component: createNameComponent(() => import('@/views/main/inventory/settings/transferRelationship/index.vue')),
            meta: { title: 'message.menu.inventory.settings.transferRelationship', icon: 'iconfont icon-transferRelationship', cache: false }
          },
          {
            path: 'scrapReason',
            component: createNameComponent(() => import('@/views/main/inventory/settings/scrapReason/index.vue')),
            meta: { title: 'message.menu.inventory.settings.scrapReason', icon: 'iconfont icon-scrapReason', cache: false }
          },
          {
            path: 'freightTemplate',
            component: createNameComponent(() => import('@/components/menu/index.vue')),
            meta: { title: 'message.menu.inventory.settings.freightTemplate.name', icon: 'iconfont icon-freightTemplate', cache: false },
            redirect: '/inventory/settings/freightTemplate/list',
            children:[
              {
                path: 'list',
                component: createNameComponent(() => import('@/views/main/inventory/settings/freightTemplate/list/index.vue')),
                meta: { title: 'message.menu.inventory.settings.freightTemplate.list', icon: 'iconfont icon-freightTemplate', cache: false }
              },
              {
                path: 'countPrice',
                component: createNameComponent(() => import('@/views/main/inventory/settings/freightTemplate/countPrice/index.vue')),
                meta: { title: 'message.menu.inventory.settings.freightTemplate.countPrice', icon: 'iconfont icon-countPrice', cache: false }
              },
            ]
          },
        ]
      },
      {
        path: 'material',
        component: createNameComponent(() => (import('@/components/menu/index.vue'))),
        redirect: '/inventory/material/list',
        meta: { title: 'message.menu.inventory.material.name', icon: 'iconfont icon-material' },
        alwayShow: true,
        children: [
          {
            path: 'sort',
            component: createNameComponent(() => import('@/views/main/inventory/material/sort/index.vue')),
            meta: { title: 'message.menu.inventory.material.sort', icon: 'iconfont icon-home', cache: true }
          },
          {
            path: 'list',
            component: createNameComponent(() => import('@/views/main/inventory/material/list/index.vue')),
            meta: { title: 'message.menu.inventory.material.list', icon: 'iconfont icon-home', cache: false }
          },
          {
            path: 'detail',
            hideMenu: true,
            component: createNameComponent(() => import('@/views/main/inventory/material/detail/index.vue')),
            meta: { title: 'message.menu.inventory.material.detail', icon: 'iconfont icon-home' }
          },
          {
            path: 'bom',
            component: createNameComponent(() => import('@/views/main/inventory/material/bom/index.vue')),
            meta: { title: 'message.menu.inventory.material.bom', icon: 'iconfont icon-home', cache: true }
          },
        ]
      },
  ]
  }
]

export default route