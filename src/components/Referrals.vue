<template>
  <div>
    <div class="columns" style="margin: 5px;">
      <div class="column">
        <div class="content" style="font-size: 25px;">
          <h1 style="margin-left: 100px;">Office Referrals</h1>
          Attention Referring Doctors and Health Care Personnel, <br> <br>

          Please complete this referral in its entirety and attach any investigations that have been completed by the patient:
          Xrays, Ultrasounds, MRI's, CT Scans that have been done for the affected areas within the last 2 years. 
          Please also include up to date blood work, especially for concerns of inflammation.<br> <br>

          Attaching the above helps with properly triaging referrals and will aid in the patient getting an appointment, it will also help with patients appointments once seen.<br><br>

          Thank you, Rheumatology Associates Brampton<br>

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
