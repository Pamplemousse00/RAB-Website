<template>
<div>
  <div class="heading1">
    Early Arthritis Clinic (EAC)
  </div>
  <div class="columns">
    <div class="column">
      <div class="content is-medium" style="text-align: left; margin-left: 30px">
          <h1>Early Arthritis Centre will see patients with:</h1>

          <li>Suspected Inflammatory Arthritis (IA)</li>
          <li>This clinic provides adult-only rheumatology services and will not screen pediatric cases</li>

          <br>
          <p>The goal is to facilitate early assessment of IA and to enable rapid confirmation of diagnosis and initiation of 
          disease-modifying, anti-rheumatic drugs.</p>

          <p>Referrals for the EAC should be made on the EAC Referral Form (click <router-link to="/referrals" style="color:blue">here</router-link>).</p>
          <p>Other referral forms will not be accepted.</p>
                
          <p>Criteria for Suspected Diagnosis of Rheumatoid Arthritis (for at least 6 weeks):</p>
            <ol>
              <li>Morning stiffness greater than 30 minutes</li>
              <li>At least three swollen joints</li>
              <li>One swollen joint in the hand</li>
              <li>Multiple Large Joint swelling</li>
              <li>Symmetrical Arthritis</li>
              <li>Positive Rheumatoid Factor or CCP Ab (Cyclic Citrullinated Peptide Antibody)</li>
              <li>Rheumatoid nodules</li>
              <li>Erosion on X-rays</li>
              <li>Elevated ESR or CRP</li>
            </ol>
          <p>A patient is a candidate for referral to the EAC if they satisfy at least 4 of the 9 above criteria.</p>
            <div style="border: 1px solid black; border-radius: 5px; font-size: 20px; cursor:pointer; margin-top: 20px; max-width: 400px" @click="openInNewTab('www.williamoslerhs.ca/en/areas-of-care/rheumatology-early-arthritis-clinic.aspx')"><img src="../assets/wohslogo.jpg" style="margin-bottom: -20px"/> <div style="margin-bottom: 10px; text-align: center">Early Arthritis Clinic Info <br>CLICK HERE</div></div>
        </div>
  </div>
  <div class="column is-one-third">
      <div class="rows" style="float: right; margin-right: 20px; width: 100%">
        
        <div class="row">
          <div style="border: 1px solid black; border-radius: 5px;font-size: 23px; margin-bottom: 20px">
            <div style="font-size: 25px; padding-bottom: 10px;">
              Location / Contact Us:  </div>
              <b>RELOCATED FROM:</b> <br>
              
              WOHS BCH <br>
              
              <b>to:</b><br>
            195 County Court Blvd., Suite 100<br> <br>

        Phone: 905-494-6218<br> FAX: 905-799-8178<br>
          </div>
        </div>
        <div class="row">
            <div style="border: 2px solid black; border-radius: 10px;">
                <div class="pdfHeader">EAC Referral Form</div>
                <object data="./Canadian Arthritis Referral Tool.pdf" type="application/pdf" style="height:80vh; width: 95%">
                    <embed src="./Canadian Arthritis Referral Tool.pdf" type="application/pdf" />
                </object>
            </div>
        </div>
      </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      allFAQs: [
        {
          question: "I've had a cortizone injection.",
          answer: "Plan to rest for 2 days afterwards."
        },
        {
          question: "What to bring to appointment?",
          answer: "Bring medication pill bottles, health card and wear loose clothing."
        },
        {
          question: "Parking situation?",
          answer: "Paid parking is available."
        },
        {
          question: "How to get ahold of us?",
          answer: "Please leave a voicemail. 647-000-0000. We will check it. Leave a detailed message with your name, phone number, Date of Birth, and what you're calling about."
        },
        {
          question: "I'm having a reaction to my medication.",
          answer: "Paid parking is available."
        },
        {
          question: "I cannot make it to my appointment.",
          answer: "Call and leave a message at the office as early as possible. Many patients wait months to see us."
        }
      ]
    }
  },
  name: 'FAQs',
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