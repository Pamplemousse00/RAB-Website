import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import FAQs from './components/FAQs.vue'
import Links from './components/Links.vue'
import EAC from './components/EAC.vue'
import Philanthropy from './components/Philanthropy.vue'
import Staff from './components/Staff.vue'
import Referrals from './components/Referrals.vue'
import Infographics from './components/Infographics.vue'
import IACareMap from './components/IACareMap.vue'

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
    {
      path: '/referrals',
      name: 'Referrals',
      component: Referrals
    },
    {
      path: '/infographics',
      name: 'Infographics',
      component: Infographics
    },
    {
      path: '/iacaremap',
      name: 'IA Care Map',
      component: IACareMap
    },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
