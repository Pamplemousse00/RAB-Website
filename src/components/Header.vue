<template>
  <div class="header">
      
      <div class="headerBanner">
        <div class="logoContainer" @click="goHome()">
            <img :src="logoSource" style="width: 25%;">
            <img :src="titleSource" style="width: 75%;">
            
        </div>
        <div class="headerAddress">Suite 100 - 195 County Court Blvd.<br>Brampton, ON, L6W 4P7</div>

        <div class="burgerContainer" @click="toggleMenu()">
          <div class="burger">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
      </div>

      


      <div class="headerMenu" @click="closeMenu()">
        

          <div class="headerLink">
            <router-link to="/staff" class="headerLinkText">
              About Us
            </router-link>
            <div class="headerDropdown">
              <router-link to="/staff" class="subItem">
                Staff
              </router-link>
              <router-link to="/Philanthropy" class="subItem">
                Philanthropy
              </router-link>
            </div>
          </div>
          

          <div class="headerLink">
            <router-link to="/referrals" class="headerLinkText">
            For Physicians
            </router-link>
            <div class="headerDropdown">
              <div class="subItem withHover">
                <router-link to="/referrals" style="color: black">
                  Referrals
                </router-link>
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
              </div>

              
              

            <router-link to="/infographics" class="subItem">
              Gout & Temporal Arteritis Infographics
            </router-link>
            <router-link to="/iacaremap" class="subItem">
              Inflammatory Arthritis Care Map
            </router-link>
            <router-link to="/links" class="subItem">
              Helpful Links...
            </router-link>
          </div>
          </div>

          
          <div class="headerLink">
          <router-link to="/" class="headerLinkText">
            For Patients
          </router-link>
            <div class="headerDropdown">
              <a class="subItem" href="https://arthritis.ca/support-education/online-learning/eating-well" target="_blank">
                Diet
              </a>
              <a class="subItem" href="https://orthoinfo.org/"  target="_blank">
                Exercises
              </a>
              <a class="subItem" href="https://arthritis.ca/treatment/medication/medication-reference-guide"  target="_blank">
                Medications
              </a>
              <hr class="dropdown-divider">
              <a class="subItem" href="https://arthritis.ca" target="_blank">
                Arthritis Society
              </a>
              <a class="subItem" href="https://rheuminfo.com/" target="_blank">
                Rheum Info
              </a>
              <a class="subItem" href="https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner" target="_blank">
                How to Find a Family Doctor
              </a>
              <a class="subItem" href="https://www.peelregion.ca/health/" target="_blank">
                Region of Peel Health Services
              </a>
              <a class="subItem" href="https://www.williamoslerhs.ca" target="_blank">
                William Osler Health System
              </a>
              
            </div>
          
          </div>
          <router-link to="/faqs" class="headerLink">
            FAQs
          </router-link>
          <a @click="gotoContact()" class="headerLink">
            Contact Us
          </a>
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
    gotoContact() {
      this.$router.push('/')
       this.$router.push('/#contact')
    },
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
    toggleMenu(){
      console.log("toggle menu")
      if(this.headerMenuDOMElement.style.display == 'flex') {
        this.headerMenuDOMElement.style.display = 'none'
      } else {
        this.headerMenuDOMElement.style.display = 'flex'
      }
    },
    closeMenu(){
      if(visualViewport.width < 770){
        this.headerMenuDOMElement.style.display = 'none'
        console.log("close menu")
      } else {
        this.headerMenuDOMElement.style.display = 'flex'
      }
    },
    goHome(){
      this.$router.push('/')
    }
  }
}

</script>

<style lang="scss">
.header{
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.headerBanner{
  background-color: white;
  display: flex;
  cursor: pointer;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}

.logoContainer{
  width: 100%;
  max-height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  min-width: 100px;
}
.headerAddress{
  font-size: 15px;
  font-weight: bold;
  color: #994593;
}
.headerMenu{
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: white;
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
  border: 1px solid #F2E3F1;
}
.headerLink{
  font-size: 35px;
  color: black;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
}
.headerLinkText{
  color: black;
}
.headerLink:hover{
  background-color: #F2E3F1;
}

.headerLink:hover > .headerDropdown{
  display: block;
  visibility: visible;
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
   /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.15);
  margin-top: -50px;
  min-width: 300px;
  border-radius: 5px;
}

.withHover:hover ~ .subList{
  display: block;
}

.subItem:hover > .subList{
  display: block;
}

.subItem:hover{
  background-color: #F2E3F1;
  border-radius: 5px;
}




@media only screen and (min-width: 770px) and (max-width: 1200px) {
.headerLink{
  font-size: 23px;
  color: #000000;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  cursor: pointer;
}
}

@media only screen and (max-width: 770px){
  .logoContainer{
    margin: 0px;
  }
  .headerBanner{
    align-items: center;
  }
  .subList{
    visibility: visible;
    display: block;
    position: relative;
    margin-left: 0px;
    margin-top: 20px;
  }
.headerMenu{
  flex-direction: column;
  overflow: scroll;
  display: none;
  max-height: 100vh;
  padding-bottom: 100px;
}
.headerAddress{
  display: none;
}
.headerDropdown{
  max-width: 100%;
  position: relative;
  display: block;
  margin-left: 5px;
  margin-right: 5px;
  min-width: 0px;
}
.headerImage{
  float: left;
}
.headerLink{
  border-bottom: 1px solid black;
}


.burgerContainer{
  cursor: pointer;
  padding-right: 20px;
  width: 100%;
  flex-basis: 33.33%;
}

.burger {
  float: right;
  width: 50px;
  height: 50px;
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
