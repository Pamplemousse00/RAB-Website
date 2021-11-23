<template>
<div>
  <div style="font-size: 40px; margin-left: 100px; text-align: left; margin-bottom: 20px; margin-top: 200px;">
    Doctors and Allied Health Professionals
  </div>
  <div class="columns" style="margin-right: 30px;">
    <div class="column" v-for="person in doctors" :key="person.name">
      <b-collapse class="card" id="card" :style="'background-color: '+person.color">
          <div class="card-content">
            <div class="content">
              <img width="150" :src="person.image"/><div> {{person.name}} <br> {{person.role}}</div>
            </div>
          </div>
        </b-collapse>
    </div>
  </div>
  <div style="font-size: 40px; margin-left: 100px; text-align: left; margin-bottom: 20px;">
    Medical Office Administrators
  </div>
  <div class="columns" style="margin-right: 30px;">
    <div class="column" v-for="person in moa" :key="person.name">
      <b-collapse class="card" id="card" :style="'background-color: '+person.color">
          <div class="card-content">
            <div class="content">
              <img :src="person.image"/><div> {{person.name}} <br> {{person.role}}</div>
            </div>
          </div>
        </b-collapse>
    </div>
  </div>
  
  <div style="font-size: 40px; margin-left: 100px; text-align: left">
    Scribes
  </div>
  <div class="columns" style="margin-right: 30px; width: 780px;">
    <div class="column" v-for="person in scribes" :key="person.name">
      <b-collapse class="card" id="card" :style="'background-color: '+person.color">
          <div class="card-content">
            <div class="content">
              <img :src="person.image"/><div> {{person.name}} <br> {{person.role}}</div>
            </div>
          </div>
        </b-collapse>
    </div>
  </div>
  <div class="heading1">
    All Staff
  </div>
  <div style="display: flex; justify-content: center">
    <div style="width: 80%; height: 400px; background-color: #FFFF00"></div>
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
          {
            name: "Lisa",
            role: "EAC ACPAC therapist?",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/lisa.jpg'),
            color: "#ffccfd"
          },
          {
            name: "Mercedes",
            role: "Arthritis Society ACPAC therapist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/lisa.jpg'),
          },
      ],
      moa: [
        {
          name: "Minnie Punnia",
          role: "Medical office administrator",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/minnie.jpg'),
          color: "#ffccb8"
        },
        {
          name: "Sandra Dee",
          role: "MOA",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/sandra.jpg'),
           color: "#ccffdb"
          
        },
        {
          name: "Debbie",
          role: "MOA",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/debbie.jpg'),
          color: "#cccdff"
        },
        {
          name: "Amanda Fleury",
          role: "MOA",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/amanda.jpg'),
          color: "#f9ffcc"
        },
         {
          name: "Shawn McKinnon",
          role: "EAC Medical Office Administrator",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/lisa.jpg'),
          color: "#ffccfd"
        },
         {
          name: "Shawn McKinnon",
          role: "EAC Medical Office Administrator",
          description: "Lorem ipsum dolor di amet whatever.",
          image: require('@/assets/images/staff/lisa.jpg'),
        },
      ],
      scribes: [
        {
            name: "Dilnoor Siddhu",
            role: "Medical Scribe",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/dilnoor.jpg'),
            color: "#ffccb8"
          },
          {
            name: "Jaden Chera",
            role: "Medical Scribe",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/dilnoor.jpg'),
            color: "#ffccb8"
          },
          
      ],
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