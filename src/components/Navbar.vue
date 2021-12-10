<template>
  <nav class="navbar is-dark is-fixed-top" style="background-color: #994593">
      <div class="navbar-brand">
        <div class="logo" @click="$router.push('/')">
          <img :src="logoSource" style="height: 80px; display: inline; margin: 10px;">
          <img :src="titleSource" style="height: 80px; display: inline; margin: 10px;">
      </div>
      <div class="navbar-burger burger" data-target="navMenu">
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

                <div class="nested navbar-item dropdown" style="padding: 0px;">
                  <div class="dropdown-trigger" style="width: 100%">
                    <router-link to="/referrals" class="navbar-item">
                      Referrals
                    </router-link>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <router-link to="/referrals" class="navbar-item">
                        Office
                      </router-link>
                      <router-link to="/eac" class="navbar-item">
                        Early Arthritis Clinic
                      </router-link>
                      <a href="https://www.williamoslerhs.ca/en/areas-of-care/hip-and-knee-joint-osteoarthritis-rapid-access-clinic.aspx" target="_blank" class="navbar-item">
                        Rapid Access Clinic (hip & knee replacement)
                      </a>
                      <a href="https://www.lowbackrac.ca/rac-lbp-registration.html" target="_blank" class="navbar-item">
                        Rapid Access Clinic (Low Back Pain)
                      </a>
                    </div>
                  </div>
                </div>

            <router-link to="/infographics" class="navbar-item">
              Gout & IA Clinical Pearls
            </router-link>
            <router-link to="/iacaremap" class="navbar-item">
              Inflammatory Arthritis Care Map
            </router-link>
            <router-link to="/links" class="navbar-item">
              Helpful Links...
            </router-link>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="818" class="navbar-link">
            For Patients
          </router-link>
          <div class="navbar-dropdown is-boxed is-dark">
            <a class="navbar-item" href="https://arthritis.ca/support-education/online-learning/eating-well">
              Diet
            </a>
            <a class="navbar-item" href="https://orthoinfo.org/">
              Exercises
            </a>
            <a class="navbar-item" href="https://arthritis.ca/treatment/medication/medication-reference-guide">
              Medications
            </a>
            <hr class="dropdown-divider">
            <a class="navbar-item" href="arthritis.ca">
              Arthritis Society
            </a>
            <a class="navbar-item" href="arthritis.ca">
              Rheum Info
            </a>
            <a class="navbar-item" href="www.ontario.ca/page/find-family-doctor-or-nurse-practitioner">
              How to Find a Family Doctor
            </a>
            <a class="navbar-item" href="https://www.peelregion.ca/health/">
              Region of Peel Health Services
            </a>
            <a class="navbar-item" href="www.williamoslerhs.ca">
              William Osler Health System
            </a>
            
          </div>
        </div>
          <router-link to="/faqs" class="navbar-item">
            FAQ
          </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <b-input placeholder="Search..." icon="magnify">
          </b-input>
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
      logoSource: require('@/assets/images/logo.png'),
      titleSource: require('@/assets/images/title.png'),
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

<style lang="scss">
nav.navbar {
  margin-bottom: 1rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item, .navbar-link {
  font-size: 22px;
  font-weight: 700;
  min-height: 60px;
}

.nested.dropdown {
  &:hover > .dropdown-menu {
    display: block;
  }
  .dropdown-menu {
    top: -15px;
    margin-left: 100%;
  }
  .dropdown-item{
    font-size: 22px;
    font-weight: 700px;
  }
}
@media only screen and (max-width: 770px) {
  .nested.dropdown {
    visibility: visible;
    .dropdown-menu {
      display: block;
    }
    .dropdown-menu {
      top: -15px;
      margin-left: 100%;
      visibility: visible;
    }
    .dropdown-item{
      font-size: 22px;
      font-weight: 700px;
    }
  }
}

</style>
