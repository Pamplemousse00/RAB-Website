<template>
  <div>
    <div class="columns" style="margin: 5px;">
      <div class="column">
        <div class="content" style="font-size: 25px; text-align: left">
          <h1 style="margin-left: 100px;">Office Referrals</h1>
          Attention Referring Doctors and Health Care Personnel, <br> <br>

          Please complete this referral in its entirety and attach any investigations that have been completed by the patient such as:
          <ul>
            <li>
              Xrays
            </li>
            <li>
              Ultrasounds
            </li>
            <li>
              CT Scans
            </li>
            <li>
              MRIs
            </li>
          </ul>
          that have been done for the affected areas within the last 2 years. 
          Please also include up-to-date blood work, especially when referring for inflammatory disease.<br> <br>

          A complete referral can help expedite the triage process, and assist with timely care of your patient.<br><br>

          Thank you, Rheumatology Associates Brampton<br>

        </div>
      </div>
        <div class="column">
            <div style="border: 2px solid black; border-radius: 10px;">
                <div class="pdfHeader">Office Referral Form</div>
                <object data="./STAR.pdf" type="application/pdf" style="height:85vh; width: 95%">
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
