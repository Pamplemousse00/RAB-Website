<template>
  <div>
    <div class="columns">
      <div class="column">
        <div style="border: 1px solid black; border-radius: 5px; margin: 10px; padding: 10px;">
          <div style="font-weight: bold; margin-bottom: 10px; font-family: playfair-display-scbold; font-size: 25px;">West-facing backyard to enjoy the sun</div>
        <img :src="pool1">
        
        </div>
        <img :src="pool2">
        Enjoy outdoor eating in a screened in lanai
      </div>
      <div class="column">
        <img :src="pool3">
        Heated spa in a scrrened in lanai
        <img :src="pool4">
        Fully lit for a late night swim!

      </div>
    </div>
    
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      pool1: require('@/assets/images/pool/pool1.jpeg'),
      pool2: require('@/assets/images/pool/pool2.jpeg'),
      pool3: require('@/assets/images/pool/pool3.jpeg'),
      pool4: require('@/assets/images/pool/pool4.jpeg')

    }
  },
  name: 'Referrals',
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

</style>
