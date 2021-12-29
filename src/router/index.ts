// 文件系统路由
import autoRoutes from 'pages-generated'
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import initGuard from './hooks'

export const routes: RouteRecordRaw[] = [
  ...autoRoutes,
  {
    path: '/:pathMatch(.*)',
    redirect: '/error/404',
  },
]
const mode: string = import.meta.env.MODE;
const basename: string = mode === 'development' ? '' :'/dashboard';
const router = createRouter({
  history: createWebHistory(basename),
  routes,
})

initGuard(router)

export default router
