import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import GraphInfo from '@/views/GraphInfo'
import Info from '@/views/Info'
import News from '@/views/News'
import ContactUs from '@/views/ContactUs'
import ThankYou from '@/views/ThankYou'

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
  },
  {
    path: '/thankyou',
    name: 'ThankYou',
    component: ThankYou
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
