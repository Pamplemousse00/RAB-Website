<template>
<div>
        <div class="content" style="font-size: 25px;">
          <h1 style="text-align: center">Philanthropy</h1>

          Rheumatology Associates Brampton have a keen interest in supporting charities.<br>We volunteer for and financially support hospitals and various organizations such as those listed below:<br><br>
    

        </div>
        <div class="columns charityContainer">
          <div class="charityBox" style="display: inline;">
          <img :src="holiPath" style="width: 100%;">
            <div class="charityText">
              WOHS Holi Gala
            </div>
          </div>
          <div class="charityBox">
          <img :src="aimPath" style="width: 100%;">
          </div>
          <div class="charityBox">
            <img :src="arthritisPath" style="width: 100%;">
          </div>
          <div class="charityBox" style="display: inline;">
            <img :src="peelPath" style="width: 100%;height: 80%;">
            <div class="charityText">
              Our Place Peel
            </div>
          </div>
        </div>
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

.charityContainer{
  margin: 20px;
}
.charityBox{
width: 100%;
height: 300px;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
transition: all .2s ease;
margin-bottom: 100px;
}
.charityBox:hover{
  transform: scale(1.1);
}
.charityText{
  text-align: center;
  margin-left: 20px;
  position: absolute;
  color: black;
  font-size: 40px;
}
</style>