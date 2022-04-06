import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/salesTurnover',
    alwayShow: true,
    meta: { title: 'message.menu.statistics.name', icon: 'iconfont icon-statistics' },
    children: [
      {
        path: 'salesTurnover',
        component: createNameComponent(() => import('@/views/main/statistics/salesTurnover/index.vue')),
        meta: { title: 'message.menu.statistics.salesTurnover', icon: 'iconfont icon-salesTurnover' },
      },
  ]
  }
]

export default route