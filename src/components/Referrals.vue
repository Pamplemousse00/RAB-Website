<template>
  <div>
    <div class="columns" style="margin: 5px;">
      <div class="column">
        <div class="content" style="font-size: 25px; text-align: left">
          <h1 style="margin-left: 100px;">Office Referrals</h1>
          Attention Referring Doctors and Health Care Personnel, <br> <br>

          Please complete this referral and attach any investigations that have been completed such as:
          <ul>
            <li>
              Labs
            </li>
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

          A complete referral can help expedite the triage process, and assist with timely care of your patient.<br><br>
          
          Rheumatology Associates Brampton<br>

        </div>
      </div>
        <div class="column">
            <div class="shadowBox">
              <div class="pdfHeader">Office Referral Form <a href="./STAR.pdf" target="_blank"><b-button type="is-info" icon-left="download" style="margin-left: 20px;">Download</b-button></a></div>
                <object data="./STAR.pdf" type="application/pdf" style="height: 85vh; width: 95%">
                  <p></p>
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
