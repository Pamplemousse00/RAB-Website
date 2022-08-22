<template>
  <div class="columns">
      <div class="column">
        <div style="border: 1px solid black; border-radius: 5px; margin: 10px; padding: 10px;">
          <div style="font-weight: bold; margin-bottom: 10px; font-family: playfair-display-scbold; font-size: 25px;">West-facing backyard to enjoy the sun</div>
            <img :src="amenities1">
        </div>
      </div>
      <div class="column">
        <div style="border: 1px solid black; border-radius: 5px; margin: 10px; padding: 10px;">
          <div style="font-weight: bold; margin-bottom: 10px; font-family: playfair-display-scbold; font-size: 25px;">West-facing backyard to enjoy the sun</div>
            <img :src="amenities2">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            amenities1: require('@/assets/images/amenities/amenities1.jpg'),
            amenities2: require('@/assets/images/amenities/amenities1.jpg')
        }
    }
}
</script>

<style>

</style>