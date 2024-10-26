import { createRouter, createWebHistory } from 'vue-router'
import LocationBar from '../components/LocationBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LocationBar
    }
  ]
})

export default router
