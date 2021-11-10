<template>
<div>
  <div class="heading1">
    Links for patients
  </div>
  <div class="columns">
    <div class="column" v-for="link in allLinks" :key="link" style="margin-bottom:5px; margin: 10px; width: 200px; display: inline-flex; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border: 1px solid #AAAAAA;">
      <p class="card-header-title" @click="openInNewTab(link.link)" style="cursor:pointer; text-align: center">
        {{link.name}}
      </p>
    </div>
  </div>
  <div class="heading1">
    For physicians
  </div>
  <div class="columns">
    <div class="column" v-for="link in physicianLinks" :key="link" style="margin-bottom:5px; margin: 10px; width: 200px; display: inline-flex; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border: 1px solid #AAAAAA;">
      <p class="card-header-title" @click="openInNewTab(link.link)" style="cursor:pointer">
        {{link.name}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      allLinks: [
        { name: "Rheum Info", link: "rheuminfo.com" },
        { name: "Exercises", link: "www.orthoinfo.org" },
        { name: "Arthritis Society", link: "arthritis.ca" },
        
        { name: "How to Find a Family Doctor", link: "www.ontario.ca/page/find-family-doctor-or-nurse-practitioner" },
        { name: "Region of Peel Health Services", link: "www.peelregion.ca/health/" },
        { name: "William Osler Health System", link: "www.williamoslerhs.ca" },
        
      ],
      physicianLinks: [
        { name: "Rheum Info", link: "rheuminfo.com" },
        { name: "American Academy of Orthopaedic Surgeons", link: "www.aaos.org" },
        { name: "AREP Referral Form", link: "gccrm-arthritis.goldcareonline.net/arthritiscrmlive/ "},
        { name: "Arthritis Society", link: "arthritis.ca" },
        { name: "Ontario Rheumatology Association", link: "ontariorheum.ca" },
        { name: "Canadian Rheumatology Association", link: "rheum.ca" },
        { name: "William Osler Health System", link: "www.williamoslerhs.ca" },
      ]
    }
  },
  name: 'Links',
  props: {
  },
  components: {
  },
  mounted() {
  },
  methods: {
    openInNewTab(link) {
      window.open("http://" + link, '_blank');
    }
  }
}
</script>

<style scoped>
.heading1{
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>