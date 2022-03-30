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
        path: 'chargeManagement',
        component: createNameComponent(() => (import('@/components/menu/index.vue'))),
        redirect: '/finance/chargeManagement/chargeBill',
        meta: { title: 'message.menu.finance.chargeManagement.name', icon: 'iconfont icon-chargeManagement' },
        children: [
          {
            path: 'chargeBill',
            component: createNameComponent(() => import('@/views/main/finance/chargeManagement/chargeBill/index.vue')),
            meta: { title: 'message.menu.finance.chargeManagement.chargeBill', icon: 'iconfont icon-chargeBill' },
          },
          {
            path: 'refundBill',
            component: createNameComponent(() => import('@/views/main/finance/chargeManagement/refundBill/index.vue')),
            meta: { title: 'message.menu.finance.chargeManagement.refundBill', icon: 'iconfont icon-refundBill' },
          },
        ]
      },
      {
        path: 'orderManagement',
        component: createNameComponent(() => import('@/views/main/finance/orderManagement/index.vue')),
        meta: { title: 'message.menu.finance.orderManagement', icon: 'iconfont icon-dingdan' },
      }
    ]
  }
]

export default route