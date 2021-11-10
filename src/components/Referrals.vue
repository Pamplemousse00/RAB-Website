<template>
  <div>
    <div class="heading1">Referral Forms</div>
    <div class="columns" style="margin: 5px;">
        <div class="column">
            <div style="border: 2px solid black; border-radius: 10px;">
                <div class="pdfHeader">Canadian Arthritis Referral Tool (CART)</div>
                <object data="./CART.pdf" type="application/pdf" style="height:80vh; width: 95%">
                    <embed src="./CART.pdf" type="application/pdf" />
                </object>
            </div>
        </div>
        <div class="column">
            <div style="border: 2px solid black; border-radius: 10px;">
                <div class="pdfHeader">Streamlined Tool for Arthritis Referral (STAR)</div>
                <object data="./STAR.pdf" type="application/pdf" style="height:80vh; width: 95%">
                    <embed src="./STAR.pdf" type="application/pdf" />
                </object>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
