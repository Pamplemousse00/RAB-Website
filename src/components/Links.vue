<template>
<div>
  <div class="heading1">
    Links for Physicians
  </div>
  <div class="columns" style="padding-top: 20px;">
    <div class="column" @click="openInNewTab('rheuminfo.com')" style="border: 1px solid black">
      <img :src="require('@/assets/images/links/rheuminfo.png')" style="margin-left: 0px">
    </div>
    <div class="column" @click="openInNewTab('www.aaos.org')">
      
      <img :src="require('@/assets/images/links/aaos.png')" style="display:inline-block; width: 90%">
    </div>
    <div class="column" @click='openInNewTab("arthritis.ca/support-education/support-in-your-community/arthritis-rehabilitation-and-education-program-(ar")'>
      <img :src="require('@/assets/images/links/arthritissociety.png')" style="display:inline-block; width: 300px;">
        AREP Referral Form
    </div>
    <div class="column" @click="openInNewTab('arthritis.ca')"> 
            <img :src="require('@/assets/images/links/arthritissociety.png')" style="display:inline-block; width: 300px;">
              General Information
    </div>
  </div>
  <div style="margin-top: 10px; color: grey">These links are provided for information only.</div>
</div>
</template>

<script>
export default {
  data() {
    return {
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
.box{
  margin-bottom:5px;
  margin: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid #AAAAAA;
  cursor:pointer;
  height: 200px;
  width: 300px;
  font-size: 20px;
  position: relative;
  text-align: center;
}
.boxItem {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>