<template>
  <div class="header" >
         


      <div class="headerMenu" @click="closeMenu()">
        
        <div class="headerLink" style="font-size: 20px;">
          Wise Lotus
          2638 Dinville
        </div>
          <div class="headerLink">
            <router-link to="/house" class="headerLinkText">
              The House
            </router-link>
          </div>
          

          <div class="headerLink">
            <router-link to="/pool" class="headerLinkText">
            The Pool
            </router-link>
          </div>
          <router-link to="/resort" class="headerLink">
            The Resort
          </router-link>
          <a @click="gotoContact()" class="headerLink">
            Location
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
  top: 0;
  width: 100%;
  
}

.headerBanner{
  display: flex;
  cursor: pointer;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}
.headerAddress{
  margin-left: 100px;
  padding-top: 15px;
  font-size: 15px;
  font-weight: bold;
  color: #994593;
}
.headerMenu{
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
  background-color: #1878d9;
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
  font-family: 'Lato', sans-serif;
}
.headerLinkText{
  color: white;
}
.headerLinkText:hover{
  color: orange;
}
.headerLink:hover{
  color: white;
}

.headerLink:hover > .headerDropdown{
  display: block;
  visibility: visible;
  
}

.logoContainer{
  width: 100%;
  max-height: 100px;
  display: flex;
  flex-direction: row;
  min-width: 100px;
  font-size: 40px;
  background-color: #1878d9;
  color: white;padding: 10px;
}

@media only screen and (max-width: 770px){
  .header{
    height: 100px;
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
}
.headerImage{
  float: left;
}

.burgerContainer{
  cursor: pointer;
  padding-right: 30px;
  padding-top: 30px;
  width: 100%;
}

.burger {
  float: right;
  width: 60px;
  height: 60px;
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
