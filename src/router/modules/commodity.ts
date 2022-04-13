import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/commodity',
    component: Layout,
    redirect: '/commodity/classify',
    alwayShow: true,
    meta: { title: 'message.menu.commodity.name', icon: 'iconfont icon-commodity' },
    children: [
        {
            path: 'classify',
            component: createNameComponent(() => import('@/views/main/commodity/classifyNew/index.vue')),
            meta: { title: 'message.menu.commodity.classify', icon: 'iconfont icon-materialSort', cache: true }
        },
        // {
        //     path: 'group',
        //     component: createNameComponent(() => import('@/views/main/commodity/group/index.vue')),
        //     meta: { title: 'message.menu.commodity.group', icon: 'iconfont icon-materialSort', cache: true }
        // },
        {
            path: 'material',
            component: createNameComponent(() => import('@/views/main/commodity/material/list/index.vue')),
            meta: { title: 'message.menu.commodity.material', icon: 'iconfont icon-materialList', cache: false }
        },
        {
            path: 'orderFile',
            component: createNameComponent(() => import('@/views/main/commodity/orderFile/index.vue')),
            meta: { title: 'message.menu.commodity.orderFile', icon: 'iconfont icon-orderFile', cache: true }
        },
        {
            path: 'combo',
            component: createNameComponent(() => import('@/views/main/commodity/combo/index.vue')),
            meta: { title: 'message.menu.commodity.combo', icon: 'iconfont icon-combo', cache: true }
        },
  ]
  }
]

export default route