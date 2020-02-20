import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import MapView from '@/views/MapView'
import MapInfo from '@/views/MapInfo'

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
  },
  {
    path: '/info',
    name: 'MapInfo',
    component: MapInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
