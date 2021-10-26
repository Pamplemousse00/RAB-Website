<template>
  <nav class="navbar is-dark is-fixed-top" style="background-color: #994593">
    <div class="container">
      <img :src="logoSource" width="120" height="100" style="margin-top: 0px; margin-right: -10px;">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item" style="background-color:white;">
        <div style="font-size: 30px; color: black">
        RheumBrampton
        </div>
      </router-link>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenu" class="navbar-menu" v-bind:class="{ 'is-active': showNav }">
      <div class="navbar-start" v-on:click="condToggle">
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="About" class="navbar-link">
            About Us
          </router-link>
          <div class="navbar-dropdown is-boxed is-dark">
            <router-link to="/staff" class="navbar-item">
              Staff
            </router-link>
            <router-link to="/Philanthropy" class="navbar-item">
              Philanthropy
            </router-link>
            
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="818" class="navbar-link">
            For Physicians
          </router-link>
          <div class="navbar-dropdown is-boxed is-dark">
            <router-link to="/referrals" class="navbar-item">
              Referrals
            </router-link>
            <router-link to="/eac" class="navbar-item">
              Early Arthritis Clinic
            </router-link>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="818" class="navbar-link">
            For Patients
          </router-link>
          <div class="navbar-dropdown is-boxed is-dark">
            <router-link to="818" class="navbar-item">
              News
            </router-link>
            <a class="navbar-item">
              Education
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="/links" class="navbar-link">
            Links
          </router-link>
          <div class="navbar-dropdown is-boxed is-dark">
            <router-link to="818" class="navbar-item">
              News
            </router-link>
            <a class="navbar-item">
              Education
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="/faqs" class="navbar-link">
            FAQ
          </router-link>
          <div class="navbar-dropdown is-boxed is-dark">
            <router-link to="818" class="navbar-item">
              News
            </router-link>
            <a class="navbar-item">
              Education
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <b-input placeholder="Search..." icon="magnify">
          </b-input>
        </div>
      </div>
    </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      showNav: false,
      name: '',
      logoSource: require('@/assets/images/tempLogo.jpg'),
    }
  },
  methods: {
    toggle () {
      // toggle between displaying and hiding mobile menu
      this.showNav = !this.showNav
    },
    condToggle () {
      // if user clicks on mobile menu, hide the menu
      if (this.showNav) {
        this.toggle()
      }
    }
  }
}
</script>

<style>
nav.navbar {
  margin-bottom: 1rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item, .navbar-link {
  font-size: 22px;
  font-weight: 700;
}
</style>
