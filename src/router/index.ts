import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import ErrorPage from '@/pages/error.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: ErrorPage,
    },
  ],
})

router.beforeEach((to, _, next) => {
  if (to.path === '/') {
    return next(`/menu`)
  }
  next()
})

export default router