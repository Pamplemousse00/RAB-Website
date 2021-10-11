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
          question: "I've had a cortisone injection.",
          answer: "If you have had a cortisone injection, it is recommended that you rest that joint or tendon for the next 24-48 hours.  For mild discomfort, you can apply ice as needed. Watch for signs of infection such as redness, increased pain , or swelling that lasts more than 48 hours."
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
          answer: `Call the office line : 
Dr. Ahluwalia: 905-799-1850
Dr Bajaj: 905-799-1850 ext 231
Dr. Joshi: 
Dr. Papneja:
If it is an emergency,  call 911 or proceed to the nearest Emergency Department to you.
`
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