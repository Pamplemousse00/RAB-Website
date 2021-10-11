<template>
<div>
  <div class="heading1">
    WOHS Holi gala
  </div>
  <div class="heading1">
    Aim for Seva
  </div>
  <div class="heading1">
    Arthritis Society
  </div>
  <div class="heading1">
    Our Place Peel
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