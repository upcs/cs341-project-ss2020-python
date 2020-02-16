import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import MapView from '@/views/MapView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'MapView',
    component: MapView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
