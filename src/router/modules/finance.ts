import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/chargeBill',
    alwayShow: true,
    meta: { title: 'message.menu.finance.name', icon: 'iconfont icon-finance' },
    children: [
      {
        path: 'chargeBill',
        component: createNameComponent(() => import('@/views/main/finance/chargeBill/index.vue')),
        meta: { title: 'message.menu.finance.chargeBill', icon: 'iconfont icon-chargeBill' },
      },
      {
        path: 'refundBill',
        component: createNameComponent(() => import('@/views/main/finance/refundBill/index.vue')),
        meta: { title: 'message.menu.finance.refundBill', icon: 'iconfont icon-refundBill' },
      },
    ]
  }
]

export default route