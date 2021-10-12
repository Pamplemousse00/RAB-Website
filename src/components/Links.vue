<template>
<div>
  <div class="heading1">
    Links for patients
  </div>
  <div class="card" v-for="link in allLinks" :key="link" style="margin-bottom:5px">
    <header class="card-header">
      <p class="card-header-title" @click="openInNewTab(link)" style="cursor:pointer">
        {{link}}
      </p>
    </header>
  </div>
  <div class="heading1">
    For physicians
  </div>
  <div class="card" v-for="link in physicianLinks" :key="link" style="margin-bottom:5px">
    <header class="card-header">
      <p class="card-header-title" @click="openInNewTab(link)" style="cursor:pointer">
        {{link}}
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
        "arthritis.ca",
        "rheuminfo.com",
        "www.peelregion.ca/health/",
        "www.williamoslerhs.ca",
        "www.aaos.org",
        "www.ontario.ca/page/find-family-doctor-or-nurse-practitioner"
      ],
      physicianLinks: [
        "arthritis.ca",
        "ontariorheum.ca",
        "rheum.ca",
        "rheuminfo.com",
        "www.williamoslerhs.ca"
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