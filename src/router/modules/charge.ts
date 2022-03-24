import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/charge',
    component: Layout,
    redirect: '/charge/service',
    alwayShow: true,
    meta: { title: 'message.menu.charge.name', icon: 'iconfont icon-charge' },
    children: [
      {
        path: 'service',
        component: createNameComponent(() => import('@/views/main/charge/service/index.vue')),
        meta: { title: 'message.menu.charge.service.name', icon: 'iconfont icon-chargeService' },
      },
      {
        path: 'expense',
        component: createNameComponent(() => (import('@/components/menu/index.vue'))),
        redirect: '/charge/expense/expenseType',
        meta: { title: 'message.menu.charge.expense.name', icon: 'iconfont icon-expense' },
        children: [
          {
            path: 'expenseType',
            component: createNameComponent(() => import('@/views/main/charge/expense/expenseType/index.vue')),
            meta: { title: 'message.menu.charge.expense.expenseType', icon: 'iconfont icon-expenseType' },
          },
          // {
          //   path: 'refundReason',
          //   component: createNameComponent(() => import('@/views/main/charge/expense/refundReason/index.vue')),
          //   meta: { title: 'message.menu.charge.expense.refundReason', icon: 'iconfont icon-refundReason' },
          // },
        ]
      },
      {
        path: 'chargeManagement',
        component: createNameComponent(() => (import('@/components/menu/index.vue'))),
        redirect: '/charge/chargeManagement/list',
        meta: { title: 'message.menu.charge.chargeManagement.name', icon: 'iconfont icon-chargeManagement' },
        children: [
          {
            path: 'chargeBill',
            component: createNameComponent(() => import('@/views/main/charge/chargeManagement/list/index.vue')),
            meta: { title: 'message.menu.charge.chargeManagement.name', icon: 'iconfont icon-chargeManagement' },
          },
          // {
          //   path: 'chargeBill',
          //   component: createNameComponent(() => import('@/views/main/charge/chargeManagement/chargeBill/index.vue')),
          //   meta: { title: 'message.menu.charge.chargeManagement.chargeBill', icon: 'iconfont icon-chargeBill' },
          // },
          // {
          //   path: 'refundBill',
          //   component: createNameComponent(() => import('@/views/main/charge/chargeManagement/refundBill/index.vue')),
          //   meta: { title: 'message.menu.charge.chargeManagement.refundBill', icon: 'iconfont icon-refundBill' },
          // },
        ]
      },
    ]
  }
]

export default route