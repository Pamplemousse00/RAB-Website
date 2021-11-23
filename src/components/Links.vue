<template>
<div>
  <div class="heading1">
    Links for Physicians
  </div>
  <div class="columns" >
    <div class="column" v-for="link in physicianLinks1" :key="link.link" style="margin-bottom:5px; margin: 10px; max-width: 200px; display: inline-flex; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border: 1px solid #AAAAAA;">
      <p class="card-header-title" @click="openInNewTab(link.link)" style="cursor:pointer">
        {{link.name}}
      </p>
    </div>
  </div>
  <div class="columns">
    <div class="column" v-for="link in physicianLinks2" :key="link.link" style="margin-bottom:5px; margin: 10px; max-width: 200px; display: inline-flex; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); border: 1px solid #AAAAAA;">
      <p class="card-header-title" @click="openInNewTab(link.link)" style="cursor:pointer">
        {{link.name}}
      </p>
    </div>
  </div>
  <div style="margin-top: 10px; color: grey">These links are provided for information only blah blah.</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      physicianLinks1: [
        { name: "Rheum Info", link: "rheuminfo.com" },
        { name: "American Academy of Orthopaedic Surgeons", link: "www.aaos.org" },
        { name: "AREP Referral Form", link: "gccrm-arthritis.goldcareonline.net/arthritiscrmlive/ "},
        { name: "Arthritis Society", link: "arthritis.ca" },
      ],
      physicianLinks2: [
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