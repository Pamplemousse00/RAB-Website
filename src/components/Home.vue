<template>
  <div>
    <b-button type="is-primary">HELLO</b-button>
    <Slideshow />
  </div>
</template>

<script>
import Slideshow from './slideshow.vue'
export default {
  name: 'Home',
  props: {
  },
  components: {
    Slideshow
  }
}
</script>