<template>
  <div class="rows">
    <div class="row">
      <div class="columns" style="margin-top: 50px">
        <div class="column">
          <Slideshow />
        </div>
        <div class="column" style="display: inline-flex">
          <div class="infoContainer" style="background-color: #bbab9e"><div style="font-size: 25px; color:black; margin-top: 10px">Our Doctors</div></div>
          <div class="infoContainer" style="background-color: #caa064"></div>
          <div class="infoContainer" style="background-color: #994593"></div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 80px; height: 500px; background-color: #caa064">
      <h2>Contact Us</h2>
      <div class="columns">
        <div class="column">
          <div style="background-color: yellow; height: 400px; width: 400px; margin-left: 100px"></div>
        </div>
        <div class="column">
          <div style="font-size: 40px; color: white; margin-right: 100px; margin-top: 100px;float: left">40 finchgate boulevard <br> phone number etc.</div>
        </div>
      </div>
    </div>
    <div class="row" style="height: 110px; background-color: #994593; color: white; font-size: 35px">
      Rheumatoloogy Associated RheumBrampton suite 32423 askjdfhwaejfhwkljef
    </div>
    
  </div>
</template>

<script>
import Slideshow from './slideshow.vue'
export default {
  name: 'Home',
  props: {
  },
  components: {
    Slideshow,
  },
  mounted() {
  },
  methods: {
    getImageSrc() {
      return require('@/assets/images/map.jpg');
    }
  }
}
</script>


<style scoped>
h1 {
  text-align: left;
  font-size: 20px;
}
h2 {
  font-size: 30px;
  color: white;
  font-weight: 600;
}
#map {
  height: 400px;
  /* The height is 400 pixels */
  width: 100%;
  /* The width is the width of the web page */
}
.infoContainer{
  margin-top: 30px;
  margin-right: 20px;
  height: 300px;
  width: 200px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
</style>