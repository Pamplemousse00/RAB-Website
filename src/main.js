import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueMeta from 'vue-meta';

Vue.use(VueMeta);
Vue.use(Buefy)
import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
  id: 'G-XV72TC1EB9'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

document.addEventListener('DOMContentLoaded', () => {
  document.title = "bramptonrheum"

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
