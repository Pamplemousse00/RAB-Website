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
               <div class="infoContainer" style="background-color: #994593">
                <div class="infoContainerTitle white">What is an ACPAC Therapist?</div>
                <div class="infoContainerInfo white">An ACPAC therapist is a physiotherapist or occupational therapist with advanced training in arthritis care.</div>
               </div>
            </div>
          </div>         
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 80px; height: 500px; background-color: #caa064">
      <h2>Contact Us</h2>
      <div class="columns">
        <div class="column">
          <div style="background-color: yellow; height: 400px; width: 600px; margin-left: 100px"></div>
        </div>
        <div class="column">
          <div style="font-size: 40px; color: white; margin-right: 100px; margin-top: 100px;float: left">40 finchgate boulevard suite 314 L6T3J1 <br> phone number etc.</div>
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
  mounted() {
  },
  methods: {
    getImageSrc() {
      return require('@/assets/images/map.jpg');
    }
  }
}
</script>