<template>
  <div class="rows">
    <div class="row">
      <div class="columns" style="margin-top: 50px">
        <div class="column">
          <div style="font-size: 30px; margin-bottom: 30px">
            Insert some text
          </div>
          <Slideshow />
        </div>
        <div class="column">
          <b-notification type="is-success" aria-close-label="Close notification">
            <h1>Location</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-notification>
        <b-notification type="is-success" aria-close-label="Close notification">
            <h1>What to bring?</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-notification>
        <b-notification type="is-success" aria-close-label="Close notification">
            <h1>Types of Appiontments</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
        </b-notification>
        </div>
      </div>
    </div>
    <div class="rows" style="margin-top: 40px; height: 500px; background-color: #209cee">
      <h2>Contact Us</h2>
      <Map/>
    </div>
    
  </div>
</template>

<script>
import Slideshow from './slideshow.vue'
import Map from './map.vue'
export default {
  name: 'Home',
  props: {
  },
  components: {
    Slideshow,
    Map,
  },
  mounted() {
  },
  methods: {
    getImageSrc() {
      return require('@/assets/images/map.jpg');
    }
  }
}
</script>


<style scoped>
h1 {
  text-align: left;
  font-size: 20px;
}
h2 {
  font-size: 30px;
  color: white;
  font-weight: 600;
}
#map {
  height: 400px;
  /* The height is 400 pixels */
  width: 100%;
  /* The width is the width of the web page */
}
</style>