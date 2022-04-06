import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/marketing',
    component: Layout,
    redirect: '/marketing/chargeBill',
    alwayShow: true,
    meta: { title: 'message.menu.marketing.name', icon: 'iconfont icon-marketing' },
    children: [
      {
        path: 'coupon',
        component: createNameComponent(() => import('@/views/main/marketing/coupon/index.vue')),
        meta: { title: 'message.menu.marketing.coupon', icon: 'iconfont icon-coupon' },
      },
      {
        path: 'rebate',
        component: createNameComponent(() => import('@/views/main/marketing/rebate/index.vue')),
        meta: { title: 'message.menu.marketing.rebate', icon: 'iconfont icon-rebate' },
      },
      {
        path: 'credits',
        component: createNameComponent(() => import('@/views/main/marketing/credits/index.vue')),
        meta: { title: 'message.menu.marketing.credits', icon: 'iconfont icon-credits' },
      },
    ]
  }
]

export default route