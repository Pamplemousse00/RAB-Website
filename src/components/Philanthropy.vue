<template>
<div>
        <div class="content" style="font-size: 25px;">
          <h1 style="margin-left: 100px; text-align: center">Philanthropy</h1>

          Brampton Rheumatology Assoiates have a keen interest in supporting charities.<br>We volunteer for and financially support hospitals and various organizations such as those listed below:<br><br>
    

        </div>
        <div class="charityContainer">
          <div class="charityBox">
            <div class="charityText">
              WOHS Holi gala
            </div>
          </div>
          <div class="charityBox">
            Aim for Seva
          </div>
          <div class="charityBox">
            Arthritis Society
          </div>
          <div class="charityBox">
            Our Place Peel
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

.charityContainer{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.charityBox{
width: 100%;
height: 300px;
background-color: green;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 40px;
}
</style>