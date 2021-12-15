<template>
  <div>
    <div class="columns" style="margin: 5px;">
      <div class="column">
        <div class="content">
          <h1 style="margin-left: 100px;">Office Referrals</h1>
          <p>For Referrals to the office, please use this form.</p>
          blah blah office information<br>

          form Info<br>
          make sure you do this and this whatever
        </div>
      </div>
        <div class="column">
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
