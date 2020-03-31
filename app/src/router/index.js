import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import GraphInfo from '@/views/GraphInfo'
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
    path: '/graph',
    name: 'GraphInfo',
    component: GraphInfo
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
