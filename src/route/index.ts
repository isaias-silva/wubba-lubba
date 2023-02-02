
import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import characterPage from '../views/characterPage.vue'

const routes = [{
  path: '/',
  name: 'home',
  component: homePage
}, {
  path: '/character',
  name: 'character',
  component: characterPage
}]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
