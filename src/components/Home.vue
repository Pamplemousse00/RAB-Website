<template>
  <div class="rows">
    <div class="row">
      <Slideshow />
    </div>
    <div class="row" style="margin-top: 80px; height: auto; background-color: #994593" id="contact">
      <div style="font-size: 40px; color: white">About Us</div>
      <div style="color: white; font-size: 25px; text-align: center; max-width: 1000px; width: 90%; margin-left: auto; margin-right: auto; margin-top: 20px; padding-bottom: 30px;">
      Welcome to Rheumatology Associates Brampton.<br><br>
      We are a group of rheumatologists providing care to patients with arthritis and rheumatic diseases in brampton and surrounding areas for the past 25 years. <br>
      <br>Our rheumatologists are on staff at William Osler Health System - Brampton Civic Hospital.
      We are a referral practice only, and you must be referred by your primary care practicioner.
      </div>
    </div>
    <div class="row" style="height: auto; background-color: #caa064" id="contact">
      <div style="font-size: 40px; color: white">Contact Us</div>
      <div class="columns">
        <div class="column">
          <img class="googleMap" @click="openInNewTab('https://www.google.ca/maps/place/40+Finchgate+Blvd,+Brampton,+ON+L6T+3H9/@43.7280689,-79.714262,17z')" :src="getGoogleMapSrc()" />
        </div>
        <div class="column">
          <div class="address">
            <div>
              Suite 314<br>40 Finchgate Blvd. <br> 905-799-1850
            </div>
          </div>
          <div class="phoneNumbers" >
            <table>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Extension
                </th>
                <th>
                  Fax
                </th>
              </tr>
              <tr>
                <td>Dr. Vandana Ahluwalia</td>
                <td>EXT-221</td>
                <td>905-799-8040</td>
              </tr>
              <tr>
                <td>Dr. Sangeeta Bajaj</td>
                <td>EXT-231</td>
                <td>905-799-2055</td>
              </tr>
              <tr>
                <td>Dr. Raman Joshi</td>
                <td>EXT-251</td>
                <td>905-799-3129</td>
              </tr>
              <tr>
                <td>Dr. Tripti Papneja</td>
                <td>EXT-261</td>
                <td>905-799-3819</td>
              </tr>
              <tr>
                <td>Early Arthritis Clinic</td>
                <td>EXT-240</td>
                <td>905-799-8178</td>
              </tr>
              
            </table>
          </div>
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
  mounted() {
    //var section=this.$router.currentRoute.value.replace("#", "");
    var section = this.$router.currentRoute.hash.replace("#", "")
    if (section)
      this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
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

<style scoped>
th{
  text-align: center;
  padding-right: 10px;
}
td {
  padding-right: 10px;
}
</style>