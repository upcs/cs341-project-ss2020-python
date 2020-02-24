import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import MapView from '@/views/MapView'
import MapInfo from '@/views/MapInfo'
import Test from '@/views/Test'

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
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
