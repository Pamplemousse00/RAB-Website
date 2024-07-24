<template>
<div style="margin-left: 20px; margin-right: 20px;">
  <div class="staffHeading">
    Doctors
  </div>
  <div class="columns">
    <div class="column" v-for="person in doctors" :key="person.name" style="display: flex; justify-content: center;">
      <div class="staffCard" :style="'background-color: '+person.color">
        <div class="centered">
          <img :src="person.image" style="border-radius: 5px"/>
          <div class="staffCardText"> {{person.name}} <br> {{person.role}}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="staffHeading">
    Medical Office Administrators
  </div>
    <div class="columns">
    <div class="column" v-for="person in moa" :key="person.name" style="display: flex; justify-content: center;">
      <div class="staffCard" :style="'background-color: '+person.color">
        <div class="centered">
          <img :src="person.image" style="border-radius: 5px"/>
          <div class="staffCardText"> {{person.name}} <br> {{person.role}}</div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="staffHeading">
    Team Members
  </div>
    <div class="columns">
    <div class="column" v-for="person in scribes" :key="person.name" style="display: flex; justify-content: center;">
      <div class="staffCard" :style="'background-color: '+person.color">
        <div class="centered">
          <img :src="person.image" style="border-radius: 5px"/>
          <div class="staffCardText"> {{person.name}} <br> {{person.role}}<br>{{person.secondRole}}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="staffHeading">
    Allied Health Professionals
  </div>
    <div class="columns">
    <div class="column" v-for="person in ahp" :key="person.name" style="display: flex; justify-content: center;">
      <div class="staffCard" :style="'background-color: '+person.color">
        <div class="centered">
          <img :src="person.image" style="border-radius: 5px"/>
          <div class="staffCardText"> {{person.name}} <br> {{person.role}}<br>{{person.secondRole}}</div>
        </div>
      </div>
    </div>
    </div>
  <div class="staffHeading">
    Office Manager
  </div>
  <div class="columns" style="margin-bottom: 30px">
    <div class="column" v-for="person in manager" :key="person.name" style="display: flex; justify-content: center;">
      <div class="staffCard" :style="'background-color: '+person.color">
        <div class="centered">
          <img :src="person.image" style="border-radius: 5px"/>
          <div class="staffCardText"> {{person.name}} <br> {{person.role}}</div>
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
      doctors: [
        {
            name: "Dr. Vandana Ahluwalia",
            role: "Rheumatologist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/vandana.jpg'),
            color: "#ffccb8"
          },
          {
            name: "Dr. Sangeeta Bajaj",
            role: "Rheumatologist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/sangeeta.jpg'),
            color: "#ccffdb"
            
          },
          {
            name: "Dr. Sangheeta Thiviyarajah",
            role: "Rheumatologist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/silhouette.jpg'),
            color: "#bbbbbb"
          },
          {
            name: "Dr. Raman Joshi",
            role: "Rheumatologist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/raman.jpg'),
            color: "#cccdff"
          },
          {
            name: "Dr. Tripti Papneja",
            role: "Rheumatologist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/tripti.jpg'),
            color: "#f9ffcc"
          },
          
      ],
      moa: [
        {
          name: "Minnie",
          role: "Medical Office Administrator",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/minnie.jpg'),
          color: "#ffccb8"
        },
        
        {
          name: "Sandra",
          role: "Medical Office Administrator",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/sandra.jpg'),
           color: "#ccffdb"
          
        },
        {
          name: "Zalesha",
          role: "Medical Office Administrator",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/zalesha.jpg'),
          color: "#bbbbbb"
        },
        {
          name: "Debbie",
          role: "Medical Office Administrator",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/debbie.jpg'),
          color: "#cccdff"
        },
        {
          name: "Amanda",
          role: "Medical Office Administrator",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/amanda.jpg'),
          color: "#f9ffcc"
        },
        
      ],
      scribes: [
        {
            name: "Dilnoor Siddhu",
            role: "Medical Scribe for",
            secondRole: "Dr. Ahluwalia",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/dilnoor.jpg'),
            color: "#ffccb8"
          },
          {
            name: "Aneesh Patel",
            role: "Medical Scribe for",
            secondRole: "Dr. Joshi",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/aneesh.jpeg'),
            color: "#cccdff "
          }        
      ],
      ahp: [
        
        {
            name: "Nirmala Kodali",
            role: "Early Arthritis Clinic",
            secondRole: "ACPAC Therapist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/silhouette.jpg'),
            color: "#ffccfd",
          },
          {
            name: "Nina Khabra",
            role: "EAC Medical Office Administrator",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/nina.jpg'),
            color: "#ffccfd"
        },       
          
      ],
      manager: [
        {
            name: "Ruth Milton",
            role: "Office Manager",
            secondRole: "RAB",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/silhouette.jpg'),
            color: "#FFFFFF",
          },
      ]
    }
  },
  name: 'Links',
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
  font-size: 40px;
  text-align: center;
}

#card {
  margin-top: 20px;
  margin-left: 30px;
  width: 200px;
  height: 270px;
}

#card:hover {
  box-shadow: black;
}
</style>