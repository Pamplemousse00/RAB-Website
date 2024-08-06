<template>
  <div>
  <div class="heading1">
    Links for Physicians
  </div>
  Rheumatology Associates Brampton has a keen interest in supporting charities.<br>We volunteer for and financially support hospitals and various organizations such as those listed below:<br><br>
    
  <div class="columns" style="padding: 30px; justify-content: center;">
    <div class="column box" @click="openInNewTab('oslerfoundation.org/')" >
      <div class="boxTitle">WOHS Holi Gala
        <img :src="holiPath" style="max-height: 100px;">
      </div>
      
    </div>
    <div class="column box" @click="openInNewTab('www.aimforseva.ca')">
      <img :src="aimPath">
    </div>
    <div class="column box" @click='openInNewTab("www.arthritis.ca")'>
      <img :src="arthritisPath">
    </div>
    <div class="column box" @click="openInNewTab('www.ourplacepeel.org')"> 
      <div class="boxTitle">
        <div style="height: 60%">Our Place Peel</div>
        <img :src="peelPath" style="max-height:100px; max-width: 100px;">
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
      holiPath: require('@/assets/images/Philanthropy/holigala.png'),
      aimPath: require('@/assets/images/Philanthropy/aimforseva.png'),
      arthritisPath: require('@/assets/images/Philanthropy/arthritissociety.png'),
      peelPath: require('@/assets/images/Philanthropy/ourplacepeel.jpg'),
    }
  },
  name: 'FAQs',
  props: {
  },
  components: {
  },
  mounted() {
  },
  methods: {
    openInNewTab(link){
      window.open('https://' + link, '_blank');
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
flex-direction: row;
align-items: center;
cursor: pointer;
transition: all .2s ease;
}
.box:hover{
  transform: scale(1.1);
}
.boxTitle{
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
img {
  max-height: 190px;
}
</style>