import type { Route } from '../index.type'
import Layout from '@/layout/index.vue'
import { createNameComponent } from '../createNode'
const route: Route[] = [
  {
    path: '/deploy',
    component: Layout,
    redirect: '/deploy/shop',
    alwayShow: true,
    meta: { title: 'message.menu.deploy.name', icon: 'iconfont icon-deploy' },
    children: [
      // systemDictionary:"系统字典",
      // operationLog:"系统日志",
      // interfaceTask:"接口任务",
      // receipt:"单据配置",
      // announcement:"公告推送",
      {
        path: 'systemDictionary',
        component: createNameComponent(() => import('@/views/main/deploy/systemDictionary/index.vue')),
        meta: { title: 'message.menu.deploy.systemDictionary', icon: 'iconfont icon-systemDictionary' }
      },
      {
        path: 'operationLog',
        component: createNameComponent(() => import('@/views/main/deploy/operationLog/index.vue')),
        meta: { title: 'message.menu.deploy.operationLog', icon: 'iconfont icon-operationLog' }
      },
      {
        path: 'interfaceTask',
        component: createNameComponent(() => import('@/views/main/deploy/interfaceTask/index.vue')),
        meta: { title: 'message.menu.deploy.interfaceTask', icon: 'iconfont icon-interfaceTask' }
      },
      {
        path: 'receipt',
        component: createNameComponent(() => import('@/views/main/deploy/receipt/index.vue')),
        meta: { title: 'message.menu.deploy.receipt', icon: 'iconfont icon-receipt' }
      },
      {
        path: 'announcement',
        component: createNameComponent(() => import('@/views/main/deploy/announcement/index.vue')),
        meta: { title: 'message.menu.deploy.announcement', icon: 'iconfont icon-announcement' }
      },
      {
        path: 'code',
        component: createNameComponent(() => import('@/views/main/deploy/code/base/index.vue')),
        meta: { title: 'message.menu.deploy.code', icon: 'iconfont icon-code' }
      },
    ]
  }
]

export default route