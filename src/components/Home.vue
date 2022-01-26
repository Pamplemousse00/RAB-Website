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
                  A Rheumatologist is a doctor that specializes in the diagnosis and treatment of autoimmune and arthritic conditions.  There are over 100 different types of arthritis.
                </div>
              </div>
            </div>
            <div class="column">
               <div class="infoContainer" style="background-color: #994593" @click="$router.push('/eac')">
                <div class="infoContainerTitle white">What is an ACPAC Therapist?</div>
                <div class="infoContainerInfo white">An ACPAC therapist is a physiotherapist or occupational therapist with advanced training in arthritis care. They work with the Rheumatologist to deliver optimal care.</div>
               </div>
            </div>
          </div>         
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 80px; height: auto; background-color: #caa064">
      <a name="contact"></a>
      <div style="font-size: 40px; color: white">Contact Us</div>
      <div class="columns">
        <div class="column">
          <img class="googleMap" @click="openInNewTab('https://www.google.ca/maps/place/40+Finchgate+Blvd,+Brampton,+ON+L6T+3H9/@43.7280689,-79.714262,17z')" :src="getGoogleMapSrc()" />
        </div>
        <div class="column">
          <div class="address">
            <div>
              Suite 314<br>40 Finchgate Blvd.  L6T3J1 <br> 905-799-1850
            </div>
          </div>
          <div class="phoneNumbers" >Dr. V. Ahluwalia: EXT-221<br>Dr. S. Bajaj: EXT-231<br>Dr. R. Joshi: EXT-251<br> Dr. T. Papneja: EXT-261<br> Early Arthritis Clinic: EXT-240</div>
        </div>
      </div>
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
    getGoogleMapSrc(){
      return require('@/assets/images/googleMap.png');
    },
    openInNewTab(link) {
      window.open(link, '_blank');
    }
  }
}
</script>