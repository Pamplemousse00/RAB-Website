<template>
  <div class="header">
      <div class="headerLogo">
        <div class="logo" @click="$router.push('/')">
          <img :src="logoSource" style="height: 80px; display: inline; margin: 10px;">
          <img :src="titleSource" style="max-width: 300px; display: inline; margin: 10px;">
      </div>
      <div class="headerBurger" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="headerMenu">
          <router-link to="/staff" class="headerLink">
            About Us
            <div class="headerDropdown">
            <router-link to="/staff" class="subItem">
              Staff
            </router-link>
            <router-link to="/Philanthropy" class="subItem">
              Philanthropy
            </router-link>
          </div>
          </router-link>

        <router-link to="/referrals" class="headerLink">
          For Physicians
          <div class="headerDropdown">
            <router-link to="/referrals" class="subItem withHover">
              Referrals
              <div class="subList">
              <router-link to="/referrals" class="subItem">
                  Office
                </router-link>
                <router-link to="/eac" class="subItem">
                  Early Arthritis Clinic
                </router-link>
                <a href="https://www.williamoslerhs.ca/en/areas-of-care/hip-and-knee-joint-osteoarthritis-rapid-access-clinic.aspx" target="_blank" class="subItem">
                  Rapid Access Clinic (hip & knee replacement)
                </a>
                <a href="https://www.lowbackrac.ca/rac-lbp-registration.html" target="_blank" class="subItem">
                  Rapid Access Clinic (Low Back Pain)
                </a>
            </div>
            </router-link>

            
            

          <router-link to="/infographics" class="subItem">
            Gout & IA Clinical Pearls
          </router-link>
          <router-link to="/iacaremap" class="subItem">
            Inflammatory Arthritis Care Map
          </router-link>
          <router-link to="/links" class="subItem">
            Helpful Links...
          </router-link>
        </div>
        </router-link>

        

        <router-link to="/" class="headerLink">
          For Patients
          <div class="headerDropdown">
            <a class="subItem" href="https://arthritis.ca/support-education/online-learning/eating-well">
              Diet
            </a>
            <a class="subItem" href="https://orthoinfo.org/">
              Exercises
            </a>
            <a class="subItem" href="https://arthritis.ca/treatment/medication/medication-reference-guide">
              Medications
            </a>
            <hr class="dropdown-divider">
            <a class="subItem" href="arthritis.ca">
              Arthritis Society
            </a>
            <a class="subItem" href="arthritis.ca">
              Rheum Info
            </a>
            <a class="subItem" href="www.ontario.ca/page/find-family-doctor-or-nurse-practitioner">
              How to Find a Family Doctor
            </a>
            <a class="subItem" href="https://www.peelregion.ca/health/">
              Region of Peel Health Services
            </a>
            <a class="subItem" href="www.williamoslerhs.ca">
              William Osler Health System
            </a>
            
          </div>
        </router-link>
        <router-link to="/faqs" class="headerLink">
          FAQ
        </router-link>
      </div>
    </div>
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
      console.log("EFEWFEWF")
      // if user clicks on mobile menu, hide the menu
        this.showNav = false
        document.getElementById('navMenu').classList.remove('is-active')
        console.log(document.getElementById('navMenu').classList)
    },
    resize() {
      
    }
  }
}
</script>

<style lang="scss">
.headerMenu{
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  background-color: #994593;
  height: 65px;
}
.headerDropdown{
  display: none;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  max-width: 400px;
  text-align: left;
  min-width: 400px;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.15);
}

.subItem{
  color: black;
  font-size: 25px;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: bold;
}

.subSubItem{
  color: black;
}

.subList{
  display: none;
  background-color: white;
  font-size: 35px;
  position: absolute;
  margin-left: 90%;
  border-radius: 5px;
   /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.15);
  margin-top: -50px;
  min-width: 300px;
}

.withHover:hover ~ .subList{
  display: block;
}

.subItem:hover > .subList{
  display: block;
}

.subItem:hover{
  background-color: #DDDDDD;
  border-radius: 5px;
}

.headerLink{
  font-size: 35px;
  color: white;
  height: 100%;
  padding-top: 5px;
  width: 100%;
}
.headerLink:hover{
  background-color: #555555;
  color: white;
}

.headerLink:hover > .headerDropdown{
  display: block;
  visibility: visible;
  
}

</style>
