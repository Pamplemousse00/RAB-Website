<template>
<div>
  <div class="heading1">
    Early Arthritis Clinic (EAC)
  </div>
  <div class="columns">
    <div class="column">
  <pre style="text-align: left; margin-left: 10%; font-family: calibri; font-size: 18px; background-color: #FFFFFF">
    <div style="font-size: 25px;">Early Arthritis Centre will see patients with:</div>
•	Suspected Inflammatory Arthritis (IA)
•	This clinic provides adult-only rheumatology services and will not screen pediatric cases


The goal is to facilitate early assessment of IA and to enable rapid confirmation of diagnosis and initiation of 
disease-modifying, anti-rheumatic drugs.

Referrals for the EAC should be made on the EAC Referral Form (click <a>here</a>).
Other referral forms will not be accepted.
       
Criteria for Suspected Diagnosis of Rheumatoid Arthritis (for at least 6 weeks):

    1.	Morning stiffness greater than 30 minutes
    2.	At least three swollen joints                                        
    3.	One swollen joint in the hand                                      
    4.	Multiple Large Joint swelling
    5.	Symmetrical Arthritis
    6.	Positive Rheumatoid Factor or CCP Ab (Cyclic Citrullinated Peptide Antibody)
    7.	Rheumatoid nodules
    8.	Erosion on X-rays
    9.	Elevated ESR or CRP
A patient is a candidate for referral to the EAC if they satisfy at least 4 of the 9 above criteria.
  </pre>
    
  <div class="heading1">
    Criteria
  </div>
  <div class="heading1">
    Process
  </div>
  <div class="heading1">
    About / Location
  </div>
  </div>
  <div class="column">
      <div class="rows" style="float: right; margin-right: 20px">
        <div class="row">
          <div style="width: 400px; height: 200px; border: 1px solid black; border-radius: 5px; font-size: 20px; cursor:pointer; margin-bottom: 20px;" @click="openInNewTab('www.williamoslerhs.ca/en/areas-of-care/rheumatology-early-arthritis-clinic.aspx')"><img src="../assets/wohslogo.jpg"/> <div style="margin-top: -20px">Early Arthritis Clinic Info <br>CLICK HERE</div></div>
        </div>
        <div class="row">
          <div style="width: 400px; border: 1px solid black; border-radius: 5px;font-size: 23px;">
            <div style="font-size: 25px">
              Location / Contact Us:  </div>
              RELOCATED TO: <br>
            40 Finchgate Blvd. Suite 314 <br>

        Phone: 905-799-1850 EXT. ?<br> FAX: ?<br>
        For EAC Referral Form click <a>here</a>.
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