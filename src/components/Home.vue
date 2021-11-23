<template>
  <div class="rows">
    <div class="row">
      <div class="columns" style="margin-top: 50px">
        <div class="column">
          <Slideshow />
        </div>
        <div class="column" style="display: inline-flex">
          <div class="columns">
            <div class="column">
              <div class="infoContainer" style="background-color: #caa064">
                <div class="infoContainerTitle black">What is a Rheumatologist?</div>
                <div class="infoContainerInfo black">
                  A Rheumatologist is a doctor that specializes in the diagnosis and treatment of arthritis and other diseases of the joints, muscles and bones.  There are over 100 types of arthritis!
                </div>
              </div>
            </div>
            <div class="column">
               <div class="infoContainer" style="background-color: #994593" @click="$router.push('/eac')">
                <div class="infoContainerTitle white">What is an ACPAC Therapist?</div>
                <div class="infoContainerInfo white">An ACPAC therapist is a physiotherapist or occupational therapist with advanced training in arthritis care.</div>
               </div>
            </div>
          </div>         
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 80px; height: 500px; background-color: #caa064">
      <div style="font-size: 40px; color: white">Contact Us</div>
      <div class="columns">
        <div class="column">
          <img src="https://maps.googleapis.com/maps/api/staticmap?markers=40 finchgate blvd. Brampton&zoom=14&size=600x400&key=AIzaSyCHuAPjPIDJWD3PqjjWWpNiRdEQlifTEMc
" style="margin-left: 100px" />
        </div>
        <div class="column">
          <div style="font-size: 40px; color: white; margin-right: 100px; margin-top: 20px; display: block;">Suite 314-40 Finchgate Blvd.  L6T3J1 <br> 905-799-1850</div>
          <div style="font-size: 25px; color: white; text-align: left; display: block; display: block;">Dr. V. Ahluwalia: EXT-221<br>Dr. S. Bajaj: EXT-231<br>Dr. R. Joshi: EXT-251<br> Dr. T. Papneja: EXT-261<br> Early Arthritis Clinic: EXT-240</div>
        </div>
      </div>
    </div>
    <div class="row" style="height: 110px; background-color: #994593; color: white; font-size: 35px">
      Rheumatology Associates Brampton 2021
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
  methods: {
    getImageSrc() {
      return require('@/assets/images/map.jpg');
    },
    
  }
}
</script>