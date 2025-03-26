import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '@/views/LoginPage.vue'
import UserRegistration from '@/views/UserRegistration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'ShopHub' },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: { title: 'Login' },
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: UserRegistration,
      meta: { title: 'Cadastro' },
    },
    {
      path: '/usuario',
      name: 'usuario',
      component: () => import('@/views/users/IndexUser.vue'), // componente "pai"
      meta: { title: 'Home' },
      children: [
        {
          path: 'favoritos',
          name: 'favoritos',
          component: () => import('@/views/users/FavItens.vue'),
          meta: { title: 'Seus Favoritos' },
        },
        {
          path: 'carrinho',
          name: 'carrinho',
          component: () => import('@/views/users/ShoppingCart.vue'),
          meta: { title: 'Seu Carrinho' },
        },
      ],
    },
  ],
})

export default router
