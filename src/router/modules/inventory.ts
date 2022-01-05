import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/inventory',
    component: Layout,
    redirect: '/inventory/store',
    alwayShow: true,
    meta: { title: 'message.menu.inventory.name', icon: 'sfont system-menu' },
    children: [
      {
        path: '/material',
        component: Layout,
        redirect: '/material/list',
        meta: { title: 'message.menu.inventory.material.name', icon: 'iconfont icon-material' },
        alwayShow: true,
        children: [
          {
            path: 'list',
            component: createNameComponent(() => import('@/views/main/inventory/material/list/index.vue')),
            meta: { title: 'message.menu.inventory.material.list', cache: false, roles: ['admin', 'editor'] }
          },
          {
            path: 'bom',
            component: createNameComponent(() => import('@/views/main/inventory/material/bom/index.vue')),
            meta: { title: 'message.menu.inventory.material.bom', cache: true, roles: ['admin'] }
          },
          {
            path: 'sort',
            component: createNameComponent(() => import('@/views/main/inventory/material/sort/index.vue')),
            meta: { title: 'message.menu.inventory.material.sort', cache: true }
          },
        ]
      }
  ]
  }
]

export default route