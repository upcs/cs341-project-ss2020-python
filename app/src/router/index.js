import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import GraphInfo from '@/views/GraphInfo'
import News from '@/views/News'
import ContactUs from '@/views/ContactUs'
import Demo from '@/views/Demo'
import ThankYou from '@/views/ThankYou'

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
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/thankyou',
    name: 'ThankYou',
    component: ThankYou
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
