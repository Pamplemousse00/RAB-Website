<template>
<div>
  <div class="heading1">
        Canadian Arthritis Referral Tool (CART)
  <object data="./CART.pdf" type="application/pdf" style="height:80vh; width: 80%">
    <embed src="./CART.pdf" type="application/pdf" />
  </object>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  name: 'CART',
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
</style>