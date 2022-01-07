import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: 'message.menu.dashboard.name', icon: 'iconfont icon-home' },
    children: [
      {
        path: 'dashboard',
        component: createNameComponent(() => import('@/views/main/dashboard/index.vue')),
        meta: { title: 'message.menu.dashboard.index', icon: 'iconfont icon-home', hideClose: true }
      }
    ]
  }
]

export default route