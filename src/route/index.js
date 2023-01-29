import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/meucomponente1',
  name: 'meucomponente1',
  component: homePage
}]
const router = new VueRouter({
  mode: 'history',
  base: 'http://localhost:8080',
  routes
})
export default router
