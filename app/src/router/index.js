import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import MapView from '@/views/MapView'
import MapInfo from '@/views/MapInfo'
import AboutUs from '@/views/AboutUs'
import News from '@/views/News'
import ContactUs from '@/views/ContactUs'

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
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  }
  // },
  // {
  //   path: '/trimet',
  //   name: 'TriMet',
  //   component: TriMet
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
