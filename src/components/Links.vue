<template>
<div>
  <div class="heading1">
    Links for patients
  </div>
  <div class="card" v-for="link in allLinks" :key="link" style="margin-bottom:5px">
    <header class="card-header">
      <p class="card-header-title" @click="openInNewTab(link.link)" style="cursor:pointer">
        {{link.name}}
      </p>
    </header>
  </div>
  <div class="heading1">
    For physicians
  </div>
  <div class="card" v-for="link in physicianLinks" :key="link" style="margin-bottom:5px">
    <header class="card-header">
      <p class="card-header-title" @click="openInNewTab(link.link)" style="cursor:pointer">
        {{link.name}}
      </p>
    </header>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      allLinks: [
        { name: "Rheum Info", link: "rheuminfo.com" },
        { name: "American Academy of Orthopaedic Surgeons", link: "www.aaos.org" },
        { name: "Arthritis Society", link: "arthritis.ca" },
        { name: "AREP Referral Form", link: "gccrm-arthritis.goldcareonline.net/arthritiscrmlive/ "},
        { name: "How to Find a Family Doctor", link: "www.ontario.ca/page/find-family-doctor-or-nurse-practitioner" },
        { name: "Region of Peel Health Services", link: "www.peelregion.ca/health/" },
        { name: "William Osler Health System", link: "www.williamoslerhs.ca" },
        
      ],
      physicianLinks: [
        { name: "Arthritis Society", link: "rheuminfo.com" },
        { name: "Arthritis Society", link: "arthritis.ca" },
        { name: "Arthritis Society", link: "ontariorheum.ca" },
        { name: "Arthritis Society", link: "rheum.ca" },
        { name: "Arthritis Society", link: "www.williamoslerhs.ca" },
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