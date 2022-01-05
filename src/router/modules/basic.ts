import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/basic',
    component: Layout,
    redirect: '/basic/shop',
    alwayShow: true,
    meta: { title: 'message.menu.basic.name', icon: 'sfont system-menu' },
    children: [
      {
        path: 'shop',
        component: createNameComponent(() => (import('@/components/menu/index.vue'))),
        redirect: '/basic/shop/list',
        meta: { title: 'message.menu.basic.shop.name' },
        children: [
          {
            path: 'list',
            component: createNameComponent(() => import('@/views/main/basic/shop/list/index.vue')),
            meta: { title: 'message.menu.basic.shop.list' },
          },
          {
            path: 'staff',
            component: createNameComponent(() => import('@/views/main/basic/shop/staff/index.vue')),
            meta: { title: 'message.menu.basic.shop.staff' },
          },
          {
            path: 'role',
            component: createNameComponent(() => import('@/views/main/basic/shop/role/index.vue')),
            meta: { title: 'message.menu.basic.shop.role' },
          },
          {
            path: 'device',
            component: createNameComponent(() => import('@/views/main/basic/shop/device/index.vue')),
            meta: { title: 'message.menu.basic.shop.device' },
          },
        ]
      },
      {
        path: 'customer',
        component: createNameComponent(() => import('@/views/main/basic/customer/index.vue')),
        meta: { title: 'message.menu.basic.customer.list' },
      },
      {
        path: 'receipt',
        component: createNameComponent(() => import('@/views/main/basic/receipt/index.vue')),
        meta: { title: 'message.menu.basic.receipt' }
      },
    ]
  }
]

export default route