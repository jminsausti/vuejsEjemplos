import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Home from '../views/Home.vue'*/

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue')
  },
  {
    path: '/fotos/:id',
    name: 'fotos',
    component: () => import(/* webpackChunkName: "fotos" */ '../views/Fotos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
