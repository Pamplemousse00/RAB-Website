<template>
<div>
  <div class="heading1">
    Links for Physicians
  </div>
  <div class="columns" >
    <div class="column">
      <div class="box" @click="openInNewTab('rheuminfo.com')">
      <img :src="require('@/assets/images/links/rheuminfo.png')" style="display:inline-block; width: 90%; margin-left: -20px; margin-top: 40px">

      </div>
    </div>
    <div class="column">
      <div class="box" @click="openInNewTab('www.aaos.org')">
        <div class="columns">
          <div class="column is-one-third">
            <div class="boxItem">
            <img :src="require('@/assets/images/links/aaos.png')" style="display:inline-block; width: 90%">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="box" @click="openInNewTab('https://arthritis.ca/support-education/support-in-your-community/arthritis-rehabilitation-and-education-program-(ar')">
        <div class="columns">
          <div class="column">
            <div class="boxItem">
            <img :src="require('@/assets/images/links/arthritissociety.png')" style="display:inline-block; width: 300px;">
              AREP Referral Form
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="box" @click="openInNewTab('arthritis.ca')">
        <div class="columns">
          <div class="column">
            <div class="boxItem">
            <img :src="require('@/assets/images/links/arthritissociety.png')" style="display:inline-block; width: 300px;">
              General Information
            </div>
          </div>
        </div>
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
.heading1{
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}
.box{
  margin-bottom:5px;
  margin: 10px;
  display: inline-flex;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid #AAAAAA;
  cursor:pointer;
  height: 200px;
  width: 300px;
  font-size: 20px;
  position: relative;
  text-align: center;
  display: inline-block;
}
.boxItem {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>