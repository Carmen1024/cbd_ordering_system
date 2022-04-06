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
        path: 'storeHouse',
        component: createNameComponent(() => import('@/views/main/inventory/storeHouse/index.vue')),
        meta: { title: 'message.menu.inventory.storeHouse', icon: 'iconfont icon-storeHouse' },
      },
      // {
      //   path: 'material',
      //   component: createNameComponent(() => (import('@/components/menu/index.vue'))),
      //   redirect: '/inventory/material/list',
      //   meta: { title: 'message.menu.inventory.material.name', icon: 'iconfont icon-material' },
      //   alwayShow: true,
      //   children: [
      //     {
      //       path: 'classify',
      //       component: createNameComponent(() => import('@/views/main/inventory/material/classify/index.vue')),
      //       meta: { title: 'message.menu.inventory.material.classify', icon: 'iconfont icon-materialSort', cache: true }
      //     },
      //     {
      //       path: 'list',
      //       component: createNameComponent(() => import('@/views/main/inventory/material/list/index.vue')),
      //       meta: { title: 'message.menu.inventory.material.list', icon: 'iconfont icon-materialList', cache: false }
      //     },
      //     // {
      //     //   path: 'bom',
      //     //   component: createNameComponent(() => (import('@/components/menu/index.vue'))),
      //     //   meta: { title: 'message.menu.inventory.material.bom.name', icon: 'iconfont icon-bom', cache: true },
      //     //   redirect: '/inventory/material/bom/list',
      //     //   children:[
      //     //     {
      //     //       path: 'list',
      //     //       component: createNameComponent(() => import('@/views/main/inventory/material/bom/list/index.vue')),
      //     //       meta: { title: 'message.menu.inventory.material.bom.list', icon: 'iconfont icon-bomList', cache: false }
      //     //     },
      //     //     {
      //     //       path: 'version',
      //     //       component: createNameComponent(() => import('@/views/main/inventory/material/bom/version/index.vue')),
      //     //       meta: { title: 'message.menu.inventory.material.bom.version', icon: 'iconfont icon-bomVersion', cache: false }
      //     //     },
      //     //     {
      //     //       path: 'relatedProduct',
      //     //       component: createNameComponent(() => import('@/views/main/inventory/material/bom/relatedProduct/index.vue')),
      //     //       meta: { title: 'message.menu.inventory.material.bom.relatedProduct', icon: 'iconfont icon-bomRelatedProduct', cache: false }
      //     //     },
      //     //   ]
      //     // },
      //     {
      //       path: 'orderFile',
      //       component: createNameComponent(() => import('@/views/main/inventory/material/orderFile/index.vue')),
      //       meta: { title: 'message.menu.inventory.material.orderFile', icon: 'iconfont icon-orderFile', cache: true }
      //     },
      //   ]
      // },
  ]
  }
]

export default route