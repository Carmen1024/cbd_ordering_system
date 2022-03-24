import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/basic',
    component: Layout,
    redirect: '/basic/shop',
    alwayShow: true,
    meta: { title: 'message.menu.basic.name', icon: 'iconfont icon-basic' },
    children: [
      {
        path: 'shop',
        component: createNameComponent(() => (import('@/components/menu/index.vue'))),
        redirect: '/basic/shop/list',
        meta: { title: 'message.menu.basic.shop.name', icon: 'iconfont icon-shop' },
        children: [
          {
            path: 'list',
            component: createNameComponent(() => import('@/views/main/basic/shop/list/index.vue')),
            meta: { title: 'message.menu.basic.shop.list', icon: 'iconfont icon-shopList' },
          },
          {
            path: 'staff',
            component: createNameComponent(() => import('@/views/main/basic/shop/staff/index.vue')),
            meta: { title: 'message.menu.basic.shop.staff', icon: 'iconfont icon-staff' },
          },
          {
            path: 'role',
            component: createNameComponent(() => import('@/views/main/basic/shop/role/index.vue')),
            meta: { title: 'message.menu.basic.shop.role', icon: 'iconfont icon-role' },
          },
          {
            path: 'device',
            component: createNameComponent(() => import('@/views/main/basic/shop/device/index.vue')),
            meta: { title: 'message.menu.basic.shop.device', icon: 'iconfont icon-device' },
          },
        ]
      },
      {
        path: 'customer',
        component: createNameComponent(() => import('@/views/main/basic/customer/index.vue')),
        meta: { title: 'message.menu.basic.customer', icon: 'iconfont icon-customer' }
      },
      //systemDictionary
      {
        path: 'systemDictionary',
        component: createNameComponent(() => import('@/views/main/basic/systemDictionary/index.vue')),
        meta: { title: 'message.menu.basic.systemDictionary', icon: 'iconfont icon-systemDictionary' }
      },
      {
        path: 'receipt',
        component: createNameComponent(() => import('@/views/main/basic/receipt/index.vue')),
        meta: { title: 'message.menu.basic.receipt', icon: 'iconfont icon-receipt' }
      },
    ]
  }
]

export default route