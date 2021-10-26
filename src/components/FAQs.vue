<template>
<div>
  <div class="heading1">
    Frequently Asked Questions
  </div>
    <b-collapse class="card" animation="slide" v-for="question in allFAQs" :key="question.question">
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
                <div class="content" style="text-align: left;">
                    {{question.answer}}
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
          question: "I cannot speak English well. What should I do?",
          answer: "Not all office staff is fluent in other languages. The doctors can speak Hindi and Punjabi. Please bring an interpreter for registration."
        },
         
        {
          question: "Is parking available?",
          answer: `Yes, you need to pay for parking before your appointment. We recommend:
          New patients: 2 hours
          Follow-up appointment: 1 hour
          If you have any issues, contact ParkSmart at '1-800-561-1972'`
        },
        {
          question: "How to get a hold of us?",
          answer: `
          If it is an emergency,  call 911 or proceed to the nearest Emergency Department to you.
          If not, you can call the office line : 
Dr. Vandana Ahluwalia: 905-799-1850 ext 221
Dr. Sangeeta Bajaj: 905-799-1850 ext 231
Dr. Raman Joshi: 251
Dr. Tripti Papneja: 261
Lisa Denning EAC: 240
Leave a detailed message with your name, phone number, Date of Birth, and what you're calling about.
`
        },
        {
          question: "I cannot make it to my appointment.",
          answer: "Please call the office right away to inform us that you are canceling the appointment. You can leave a voicemail with your full name, date of birth and appointment date & time.  Please reschedule your appointment to ensure follow up for your test results and medical conditions. "
        },
        {
          question: "I've had a cortisone(steroid) injection.",
          answer: "If you have had a cortisone(steroid) injection, it is recommended that you rest that joint or tendon for the next 24-48 hours.  For mild discomfort, you can apply ice as needed. Watch for signs of infection such as redness, increased pain , or swelling that lasts more than 48 hours. If you think you have an infection, proceed to the nearest Emergency Department to you."
        },
        
        
       
        {
          question: "I'm having a reaction to my medication.",
          answer: `If you are taking prednisone, or steroid medication, call the office for advice.
          For other medications, 
          We need to know if you're having a problem after taking a medication we prescribed.  It is important that you contact our office and let us know.  Stop taking your medication until you hear back.  

Many times the problem might not be the medication, and it can be restarted.
If you are having a medical emergency, call 911 or proceed to the nearest Emergency Department to you.`
        },
        
        {
          question: "I have been referred for physiotherapy and I don't have private insurance coverage. Am I eligible for OHIP-covered physiotherapy? ",
          answer: `Make this "please click here" Please visit this link: https://www.ontario.ca/page/physiotherapy-clinics-government-funded to see if you are eligible.
          If you are eligible, visit this link to see clinics that may be near you.
          https://www.health.gov.on.ca/en/public/programs/physio/pub_clinics.aspx`
        },
        {
          question: "COVID-19 Vaccination Booster.",
          answer: "A doctors note is NOT required. If you are on any of the medications listed in this link (https://health.gov.on.ca/en/pro/programs/publichealth/coronavirus/docs/vaccine/COVID-19_vaccine_third_dose_recommendations.pdf), bring them to the immunization centre to receive your third dose."
        },
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