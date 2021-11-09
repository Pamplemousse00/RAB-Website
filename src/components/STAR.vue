<template>
<div>
  <div class="heading1">
    Streamlined Tool for Arthritis Referral
  </div>
  <object data="./STAR.pdf" type="application/pdf" style="height:80vh; width: 80%">
    <embed src="./STAR.pdf" type="application/pdf" />
  </object>
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
</style>