import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import FAQs from './components/FAQs.vue'
import Links from './components/Links.vue'
import EAC from './components/EAC.vue'
import Philanthropy from './components/Philanthropy.vue'
import Staff from './components/Staff.vue'

Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: FAQs
    },
    {
      path: '/links',
      name: 'Links',
      component: Links
    },
    {
      path: '/eac',
      name: 'EAC',
      component: EAC
    },
    {
      path: '/philanthropy',
      name: 'Philanthropy',
      component: Philanthropy
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    },
  ]
})
