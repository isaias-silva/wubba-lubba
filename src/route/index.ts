
import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import characterPage from '../views/characterPage.vue'
import allCharactersPage from '../views/allCharactersPage.vue'
const routes = [{
  path: '/',
  name: 'home',
  component: homePage
}, {
  path: '/character/:id',
  name: 'character',
  component: characterPage
},
{
  path: '/characters',
  name: 'characters',
  component: allCharactersPage
}]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
