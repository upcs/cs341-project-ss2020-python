import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import MapView from '@/views/MapView'
import GraphInfo from '@/views/GraphInfo'
import AboutUs from '@/views/AboutUs'
import Info from '@/views/Info'
import News from '@/views/News'
import ContactUs from '@/views/ContactUs'
import Demo from '@/views/Demo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/graph',
    name: 'GraphInfo',
    component: GraphInfo
  },
  {
    path: '/map',
    name: 'MapView',
    component: MapView
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
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
