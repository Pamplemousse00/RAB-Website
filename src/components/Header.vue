<template>
  <div class="header">
      
      <div @click="$router.push('/')" class="headerImage">
        <img :src="logoSource" style="height: 70px; display: inline; margin: 10px;">
        <img :src="titleSource" style="max-width: 200px; display: inline; margin: 10px;">
      </div>

      <div class="burgerContainer" @click="openMenu()">
        <div class="burger">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
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
      headerMenuDOMElement: undefined
    }
  },
  mounted() {
    this.headerMenuDOMElement = document.getElementsByClassName('headerMenu')[0]
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
    openMenu(){
      if(this.headerMenuDOMElement.style.display == 'block') {
        this.headerMenuDOMElement.style.display = 'none'
      } else {
        this.headerMenuDOMElement.style.display = 'block'
      }
    }
  }
}
</script>

<style lang="scss">
.header{

  height: 180px;
  position: fixed;
  top: 0;
  width: 100%;
}

.headerImage{
  background-color: white;
  display: block;
  cursor: pointer;
}
.headerMenu{
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  background-color: #994593;
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
  z-index: 10;
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
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  cursor: pointer;
}
.headerLink:hover{
  background-color: #555555;
  color: white;
}

.headerLink:hover > .headerDropdown{
  display: block;
  visibility: visible;
  
}



@media only screen and (max-width: 770px){
.headerMenu{
  flex-direction: column;
  overflow: scroll;
  display: none;
  max-height: 80vh;
}
.headerDropdown{
  width: 100%;
  max-width: none;
  position: relative;
  display: block;
}
.headerImage{
  float: left;
}

.burgerContainer{
  float: right;
  cursor: pointer;
  padding-right: 30px;
  padding-top: 30px;
}

.burger {
  width: 60px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.bar1, .bar2, .bar3 {
  width: 100%;
  height: 6px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.3s ease;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
}

</style>
