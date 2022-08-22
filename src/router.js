import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Resort from './components/Resort.vue'
import EAC from './components/EAC.vue'
import Referrals from './components/Referrals.vue'
import Infographics from './components/Infographics.vue'
import IACareMap from './components/IACareMap.vue'
import Amenities from './components/Amenities.vue'

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
      path: '/resort',
      name: 'Resort',
      component: Resort
    },
    {
      path: '/eac',
      name: 'EAC',
      component: EAC
    },
    {
      path: '/referrals',
      name: 'Referrals',
      component: Referrals
    },
    {
      path: '/amenities',
      name: "Amenities",
      component: Amenities
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
