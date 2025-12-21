import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: () => import('../views/Category.vue')
    },
    {
      path: '/category/:categoryName',
      name: 'CategoryPage',
      component: () => import('../views/EachCategory.vue')
    },
    {
      path: '/category/:categoryName',
      name: 'ProductDetail',
      component: () => import('../views/ProductDetail.vue')
    }
  ],
})

export default router
