import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/inventory',
    component: Layout,
    redirect: '/inventory/material',
    alwayShow: true,
    meta: { title: 'message.menu.inventory.name', icon: 'sfont system-menu' },
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
            meta: { title: 'message.menu.inventory.settings.orderWindow', cache: false }
          },
          {
            path: 'orderRules',
            component: createNameComponent(() => import('@/views/main/inventory/settings/orderRules/index.vue')),
            meta: { title: 'message.menu.inventory.settings.orderRules', cache: false }
          },
          {
            path: 'freightTemplate',
            component: createNameComponent(() => import('@/components/menu/index.vue')),
            meta: { title: 'message.menu.inventory.settings.freightTemplate.name', cache: false },
            redirect: '/inventory/settings/freightTemplate/list',
            children:[
              {
                path: 'list',
                component: createNameComponent(() => import('@/views/main/inventory/settings/freightTemplate/list/index.vue')),
                meta: { title: 'message.menu.inventory.settings.freightTemplate.list', cache: false }
              },
              {
                path: 'countPrice',
                component: createNameComponent(() => import('@/views/main/inventory/settings/freightTemplate/countPrice/index.vue')),
                meta: { title: 'message.menu.inventory.settings.freightTemplate.countPrice', cache: false }
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
            meta: { title: 'message.menu.inventory.material.sort', cache: true }
          },
          {
            path: 'list',
            component: createNameComponent(() => import('@/views/main/inventory/material/list/index.vue')),
            meta: { title: 'message.menu.inventory.material.list', cache: false, roles: ['admin', 'editor'] }
          },
          {
            path: 'detail',
            hideMenu: true,
            component: createNameComponent(() => import('@/views/main/inventory/material/detail/index.vue')),
            meta: { title: 'message.menu.inventory.material.detail' }
          },
          {
            path: 'bom',
            component: createNameComponent(() => import('@/views/main/inventory/material/bom/index.vue')),
            meta: { title: 'message.menu.inventory.material.bom', cache: true, roles: ['admin'] }
          },
        ]
      },
  ]
  }
]

export default route