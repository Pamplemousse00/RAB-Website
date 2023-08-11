<template>
  <div class="rows">
    <div class="row movingBanner">
      <div style="font-size: 25px; text-align: center; padding-top: 10px; color: black; background-color: #ffcc6e; cursor: pointer;" @click="gotoContact()">
        We have moved and the new office is open for <b>in-person appointments.</b><br>
        See the new address below, under "Contact Us".
      </div>
    </div>
    <div class="row">
      <div class="columns" style="margin-top: 50px">
        <div class="column">
          <Slideshow />
        </div>
        <div class="column" style="display: inline-flex">
          <div class="columns">
            <div class="column">
              <div class="infoContainer" style="background-color: #afceed; ">
                <div class="infoContainerTitle black">What is a Rheumatologist?</div>
                <div class="infoContainerInfo black">
                  A Rheumatologist is a doctor that specializes in the diagnosis and treatment of autoimmune and arthritic conditions.  There are over 100 different types of arthritis.
                </div>
              </div>
            </div>
            <div class="column">
               <div class="infoContainer" style="background-color: #f7d7f5" @click="$router.push('/eac')">
                <div class="infoContainerTitle black">What is an ACPAC Therapist?</div>
                <div class="infoContainerInfo black">An ACPAC therapist is a physiotherapist or occupational therapist with advanced training in arthritis care. They work with the Rheumatologist to deliver optimal care.</div>
               </div>
            </div>
          </div>         
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 80px; height: auto; background-color: #f0c2ed" id="contact">
      <div style="font-size: 40px; color: black">About Us</div>
      <div style="color: black; font-size: 25px; text-align: center; max-width: 1000px; width: 90%; margin-left: auto; margin-right: auto; margin-top: 20px; padding-bottom: 30px;">
      Welcome to Rheumatology Associates Brampton.<br><br>
      We are a group of rheumatologists providing care to patients with arthritis and rheumatic diseases in Brampton and surrounding areas for the past 25 years. <br>
      <br>Our rheumatologists are on staff at William Osler Health System - Brampton Civic Hospital.
      We are a referral practice only, and you must be referred by your primary care practitioner.
      </div>
    </div>
    <div class="row" style="height: auto; background-color: white" id="contact">
      <div style="font-size: 40px; color: black">Contact Us</div>
      <div class="columns">
        <div class="column">
          <img class="googleMap" @click="openInNewTab('https://www.google.com/maps/place/195+County+Ct+Blvd,+Brampton,+ON+L6W+4P7/@43.6617349,-79.7230884,17z')" :src="getGoogleMapSrc()" />
        </div>
        <div class="column">
          <div class="address">
            <div class="columns">
              <div class="column">
              We have Moved. <br>
              New Address is: <br>
              <b>Suite 100<br>195 County Court Blvd., <br>Brampton, L6W 4P7<br>
              Main Office #: 905-799-1850</b>
            </div>        
            </div>
          </div>
          <div class="phoneNumbers" >
            <table border=1 frame=void rules=rows  bordercolor="#ffffff">
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Extension
                </th>
                <th style="text-align: center">
                  Fax
                </th>
              </tr>
              <tr>
                <td>Dr. Vandana Ahluwalia</td>
                <td>EXT-1</td>
                <td>905-799-8040</td>
              </tr>
              <tr>
                <td>Dr. Sangeeta Bajaj</td>
                <td>EXT-2</td>
                <td>905-799-2055</td>
              </tr>
              <tr>
                <td>Dr. Arpita Gantayet</td>
                <td>EXT-5</td>
                <td>905-799-9463</td>
              </tr>
              <tr>
                <td>Dr. Raman Joshi</td>
                <td>EXT-3</td>
                <td>905-799-3129</td>
              </tr>
              <tr>
                <td>Dr. Tripti Papneja</td>
                <td>EXT-4</td>
                <td>905-799-3819</td>
              </tr>
              <tr>
                <td>Early Arthritis Clinic</td>
                <td>EXT-6</td>
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
      return require('@/assets/images/googleMap.jpg');
    },
    gotoContact() {
      this.$router.push('/')
       this.$router.push('/#contact')
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
.movingBanner{
  background-color: #ffcc6e;
  height: 100px;
  margin-top: -15px;
}
</style>