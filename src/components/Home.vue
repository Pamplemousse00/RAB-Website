<template>
  <div class="rows">
    <div class="row" style="">
      <div class="welcomeTitle">Welcome to Rheumatology Associates Brampton</div>
      <div class="columns">
        <div class="column" style="display: inline-flex">
          <div class="columns">
            <div class="column">
              <div class="welcomeBody">
                <br>
                We are a group of rheumatologists who have been providing care to patients with arthritis and rheumatic diseases in Brampton and surrounding areas for over 25 years. <br>
                <br>Our rheumatologists are on staff at William Osler Health System - Brampton Civic Hospital.
                We are a referral practice only, and you must be referred by your primary care practitioner.
              </div>
            </div>
            <div class="column" style="margin-top: 30px;">
              <b-carousel :indicator-inside="false">
                <b-carousel-item v-for="i in 4" :key="i">
                  <b-image class="image slideshow" :src="getImageSrc(i)"></b-image>
                </b-carousel-item>
            </b-carousel>
            </div>
          </div>         
        </div>
      </div>
    </div>
    <div class="row" style="">
      <div class="columns" style="margin-top: 50px">
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
    <div class="row" style="height: auto; background-color: white; margin-top: 20px;" id="contact">
      <hr />
      <div style="font-size: 40px; color: black">Contact Us</div>
      <div class="columns">
        <div class="column">
          <img class="googleMap" @click="openInNewTab('https://www.google.com/maps/place/195+County+Ct+Blvd,+Brampton,+ON+L6W+4P7/@43.6617349,-79.7230884,17z')" :src="getGoogleMapSrc()" />
        </div>
        <div class="column">
          <div class="address">
            <div class="columns">
              <div class="column">
              We are located at: <br>
              <b>195 County Court Blvd., <br>Suite 100<br>Brampton, L6W 4P7<br>
              Main Office #: 905-799-1850</b>
            </div>        
            </div>
          </div>
          <b-table :data="contacts" :columns="columns" :hoverable="true" @click="copyNumber" style="text-align: left; font-size: 25px"></b-table>
        </div>
      </div>
    </div> 
  </div>
</template>




<script>
export default {
  name: 'Home',
  props: {
  },
  components: {
  },
  data(){
    return {
      isMobile: true,
      contacts: [
        {
          name: "Dr. Vandana Ahluwalia",
          extension: "EXT-1",
          fax: "905-799-8040"
        },
        {
          name: "Dr. Sangeeta Bajaj",
          extension: "EXT-2",
          fax: "905-799-2055"
        },
        {
          name: "Dr. Raman Joshi",
          extension: "EXT-3",
          fax: "905-799-3129"
        },
        {
          name: "Dr. Tripti Papneja",
          extension: "EXT-4",
          fax: "905-799-3819"
        },
        {
          name: "Dr. Sangeetha Thiviyarajah",
          extension: "EXT-5",
          fax: "905-799-9463" 
        },
        {
          name: "Early Arthritis Clinic",
          extension: "EXT-6",
          fax: "905-799-8178"
        }
       ],
       columns: [
        {
            field: "name",
            label: "Name"
        },
        {
            field: 'extension',
            label: 'Extension',
        },
        {
          field: "fax",
          label: "Fax"
        }
      ]
    }
  },
  mounted() {
    this.isMobile = visualViewport.width < 770 ? true : false
    var section = this.$router.currentRoute.hash.replace("#", "")
    if (section)
      this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
  },
  methods: {
    getImageSrc(i) {
      return require('@/assets/images/' + i + '.jpg');
    },
    getGoogleMapSrc(){
      return require('@/assets/images/googleMap.jpg');
    },
    gotoContact() {
      this.$router.push('/')
       this.$router.push('/#contact')
    },
    openInNewTab(link) {
      window.open(link, '_blank');
    },
    copyNumber(row){
      navigator.clipboard.writeText(row.fax);
      this.$buefy.toast.open({
        message: `${row.name}'s fax number copied to clipboard!`,
        position: 'is-bottom',
        type: 'is-success'
      })
    }
  }
}
</script>

<style scoped>
.movingBanner{
  background-color: #f0c2ed;
  height: auto;
  margin-top: -15px;
}
.welcomeBody{
  color: black;
  font-size: 25px;
  text-align: center;
  max-width: 1000px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
}
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>