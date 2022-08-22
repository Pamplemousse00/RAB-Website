<template>
<div>
  <div class="columns">
    <div class="column">
  Resort Amenities
  <div @click="$router.push('/amenities')">
    <img :src="amenities">
    <div>
      See More Pictures
    </div>
  </div>
    </div>
  <div class="column">
  water park
  <img :src="park">
  </div>
  <div class="column">
  recreaation
  <img :src="recreation">
  </div>
  </div>

      <div style="border: 1px solid black; border-radius: 5px; margin: 10px; padding: 10px;">
          <div style="font-weight: bold; margin-bottom: 10px; font-family: playfair-display-scbold; font-size: 25px;">Windsor Hills Resort is Orlando's most popular rental resort inside a gated community, with many amenities.</div>
        <img :src="pool1">
      </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      amenities: require('@/assets/images/amenities/amenities1.jpg'),
       park: require('@/assets/images/park/park1.jpg'),
        recreation: require('@/assets/images/recreation/recreation1.jpg')
    }
  },
  name: 'FAQs',
  props: {
  },
  components: {
  },
  mounted() {
    this.isMobile = visualViewport.width < 770 ? true : false
    console.log(visualViewport.width)
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
.card-header-title{
  text-align: left;
}
@media only screen and (max-width: 770px){
.card-header-title{
  text-align: left !important;
}
}

</style>