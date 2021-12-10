<template>
<div style="font-size: 25px;">
  <div class="heading1">
    Frequently Asked Questions
  </div>
    <b-collapse class="card" animation="slide" v-for="question in allFAQs" :key="question.question" :open="!isMobile">
            <template #trigger="props">
                <div
                    class="card-header"
                    role="button">
                    <p class="card-header-title">
                        {{question.question}}
                    </p>
                    <a class="card-header-icon">
                        <b-icon
                            :icon="props.open ? 'menu-down' : 'menu-up'">
                        </b-icon>
                    </a>
                </div>
            </template>

            <div class="card-content">
                <div class="content" style="text-align: left;" v-html="question.answer">
                </div>
            </div>
        </b-collapse>
</div>
</template>

<script>
export default {
  data() {
    return {
      allFAQs: [
        {
          question: "What do I bring to my appointment?",
          answer: "Bring health card, medication pill bottles or an up-to-date medication list (your family doctor or pharmacist can help you with this), and wear loose clothing."
        },
        {
          question: "I cannot make it to my appointment.",
          answer: "Please call the office right away to inform us that you are canceling the appointment. You can leave a voicemail with your full name, date of birth and appointment date & time.  Please reschedule your appointment to ensure follow up for your test results and medical conditions. "
        },
        {
          question: "I cannot speak English well. Do I need to bring an interpreter?",
          answer: "Not all office staff is fluent in other languages. The doctors can speak Hindi and Punjabi. Please bring an interpreter for registration."
        },
         
        {
          question: "Is parking available?",
          answer: `Yes, you need to pay for parking before your appointment. We recommend:<br>
          New patients: 2 hours <br>
          Follow-up appointment: 1 hour <br>
          If you have any issues, contact ParkSmart at '1-800-561-1972'`
        },
        {
          question: "How to contact us?",
          answer: `
          If it is an emergency,  call 911 or proceed to the nearest Emergency Department to you.
          If not, you can call the office line: <br>
Dr. Vandana Ahluwalia: 905-799-1850 ext 221 <br>
Dr. Sangeeta Bajaj: 905-799-1850 ext 231 <br>
Dr. Raman Joshi: 251 <br>
Dr. Tripti Papneja: 261 <br>
Lisa Denning EAC: 240 <br>
Leave a detailed message with your name, phone number, Date of Birth, and what you're calling about.
`
        },
        
        {
          question: "I've had a cortisone(steroid) injection. What do I need to know?",
          answer: "If you have had a cortisone(steroid) injection, it is recommended that you rest that joint or tendon for the next 24-48 hours. For mild discomfort, you can apply ice as needed. If you have more pain, you can take pain relievers as recommended by your doctor. <br> Infections after a cortisone injection are <b>very rare</b>. Symptoms could include worsening pain, swelling, or fever that lasts more than 48 hours. If you think you have an infection, proceed to the nearest Emergency Department."
        },
        
        
       
        {
          question: "I'm having a reaction to my medication.",
          answer: `If you are taking prednisone, or steroid medication, do not suddenly stop taking it. Please call your Rheumatologist for advice.<br>
          For other medications that we have prescribed, it is important that you contact our office and let us know.  Stop taking your medication until you hear back. <br>
If you are having a medical emergency, call 911 or proceed to the nearest Emergency Department`
        },
        
        {
          question: "I have been referred for physiotherapy and I don't have private insurance coverage. Am I eligible for OHIP-covered physiotherapy? ",
          answer: `Please click <a href='https://www.ontario.ca/page/physiotherapy-clinics-government-funded'>HERE</a> to see if you are eligible.
          If you are eligible, click <a href='https://www.health.gov.on.ca/en/public/programs/physio/pub_clinics.aspx'>HERE</a> to see clinics that may be near you.
          `
        },
        {
          question: "COVID-19 Vaccination Booster.",
          answer: "A doctors note is <b>not</b> required. If you are on any of the medications listed <a href='https://health.gov.on.ca/en/pro/programs/publichealth/coronavirus/docs/vaccine/COVID-19_vaccine_third_dose_recommendations.pdf'>HERE</a>, bring them to the immunization centre to receive your third dose."
        },
      ],
      isMobile: false,
    }
  },
  name: 'FAQs',
  props: {
  },
  components: {
  },
  mounted() {
    this.isMobile = visualViewport.width < 770 ? true : false
    console.log(visualViewport.width)
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