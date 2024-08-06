<template>
<div>
  <div class="heading1">
    Links for Physicians
  </div>
  <div class="columns" style="padding: 30px; justify-content: center;">
    <div class="column box" @click="openInNewTab('rheuminfo.com')" >
      <img :src="require('@/assets/images/links/rheuminfo.png')">
    </div>
    <div class="column box" @click="openInNewTab('www.aaos.org')">
      
      <img :src="require('@/assets/images/links/aaos.png')">
    </div>
    <div class="column box" @click='openInNewTab("arthritis.ca/support-education/support-in-your-community/arthritis-rehabilitation-and-education-program-(ar")'>
      <div class="boxTitle">AREP Referral Form
        <img :src="require('@/assets/images/links/arthritissociety.png')">
      </div>
    </div>
    <div class="column box" @click="openInNewTab('arthritis.ca')"> 
      <div class="boxTitle">General information
      <img :src="require('@/assets/images/links/arthritissociety.png')">
    </div>
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
.box {
border: 1px solid rgb(232, 232, 232);
margin: 10px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all .2s ease;
}
.box:hover{
  transform: scale(1.1);
}
.boxTitle{
  font-size: 25px;
}
</style>