import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/project',
    component: Layout,
    redirect: '/project/code',
    alwayShow: true,
    meta: { title: 'message.menu.project.name', icon: 'iconfont icon-project' },
    children: [
      {
        path: 'code',
        component: createNameComponent(() => (import('@/components/menu/index.vue'))),
        redirect: '/project/code/service',
        meta: { title: 'message.menu.project.code.name', icon: 'iconfont icon-code' },
        children: [
          {
            path: 'base',
            component: createNameComponent(() => import('@/views/main/project/code/base/index.vue')),
            meta: { title: 'message.menu.project.code.base', icon: 'iconfont icon-service' },
          },
          // {
          //   path: 'business',
          //   component: createNameComponent(() => import('@/views/main/project/code/business/index.vue')),
          //   meta: { title: 'message.menu.project.code.business', icon: 'iconfont icon-business' },
          // },
        ]
      },
      {
        path: 'version',
        component: createNameComponent(() => import('@/views/main/project/version/index.vue')),
        meta: { title: 'message.menu.project.version', icon: 'iconfont icon-version' },
      },
      {
        path: 'developer',
        component: createNameComponent(() => import('@/views/main/project/developer/index.vue')),
        meta: { title: 'message.menu.project.developer', icon: 'iconfont icon-developer' }
      },
    ]
  }
]

export default route