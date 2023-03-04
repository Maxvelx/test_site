import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/app/Home/Index.vue')
    },
],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {top: 0}
  },
})


export default router
