import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/basic',
    component: Layout,
    redirect: '/basic/shop',
    alwayShow: true,
    meta: { title: 'message.menu.basic.name', icon: 'iconfont icon-basic2' },
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
      // {
      //   path: 'staff',
      //   component: createNameComponent(() => import('@/views/main/basic/staff/index.vue')),
      //   meta: { title: 'message.menu.basic.staff', icon: 'iconfont icon-staff' },
      // },
      {
        path: 'group',
        component: createNameComponent(() => import('@/views/main/basic/group/index.vue')),
        meta: { title: 'message.menu.basic.group', icon: 'iconfont icon-group', cache: false }
      },
      {
        path: 'customer',
        component: createNameComponent(() => import('@/views/main/basic/customer/index.vue')),
        meta: { title: 'message.menu.basic.customer', icon: 'iconfont icon-customer' }
      },
    ]
  }
]

export default route