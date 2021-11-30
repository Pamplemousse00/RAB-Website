<template>
  <div>
    <div class="heading1">Referral Forms</div>
    <div class="columns" style="margin: 5px;">
        <div class="column">
          <div style="text-align: left; border: 1px solid black; padding-left: 20px; margin-bottom: 10px; border-radius: 5px; font-size: 20px;">Use this form for referral to the Early Arthritis Clinic. For criteria, click <a>here.</a></div>
            <div style="border: 2px solid black; border-radius: 10px;">
                <div class="pdfHeader">Early Arthritis Clinic (EAC) Referral Form</div>
                <object data="./CART.pdf" type="application/pdf" style="height:80vh; width: 95%">
                    <embed src="./CART.pdf" type="application/pdf" />
                </object>
            </div>
        </div>
        <div class="column">
          <div style="text-align: left; border: 1px solid black; padding-left: 20px; margin-bottom: 10px; border-radius: 5px; font-size: 20px;">Use this form for all other referrals to the office.</div>
            <div style="border: 2px solid black; border-radius: 10px;">
                <div class="pdfHeader">Office Referral Form</div>
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
