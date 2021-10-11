<template>
<div>
  <div class="heading1">
    Staff
  </div>
  <div style="display: flex; justify-content: center">
    <div style="width: 80%; height: 400px; background-color: #FFFF00"></div>
  </div>
  <div class="columns" style="margin-right: 30px">
    <div class="column" v-for="person in staff" :key="person.name">
      <div class="rows">
        <div class="row">
          <b-collapse class="card" id="card">
              <div class="card-content">
                <div class="content">
                  <img :src="person.image" height="100" width="100"/><div> {{person.name}} <br> {{person.role}} <br> {{person.description}}</div>
                </div>
              </div>
            </b-collapse>
        </div>
        <div class="row" v-for="child in person.children" :key="child.name">
          <b-collapse class="card" id="card">
            <div class="card-content">
              <div class="content">
                <img :src="child.image" height="100" width="100"/><div> {{child.name}} <br> {{child.role}} <br> {{child.description}}</div>
              </div>
            </div>
          </b-collapse>
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
      staff: [
          {
            name: "Dr. Vandana Ahluwalia",
            role: "Rheumatologist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/vandana.jpg'),
            children: [
              {
                name: "Minnie Punnia",
                role: "Medical office administrator",
                description: "Lorem ipsum dolor di amet whatever.",
                image: require('@/assets/images/staff/minnie.jpg'),
              },
              {
                name: "Dilnoor Siddhu",
                role: "Medical Scribe",
                description: "Lorem ipsum dolor di amet whatever.",
                image: require('@/assets/images/staff/vandana.jpg'),
              }
            ]
          },
          {
            name: "Dr. Tripti Papneja",
            role: "Rheumatologist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/tripti.jpg'),
            children: [
              {
                name: "Amanda",
                role: "MOA",
                description: "Lorem ipsum dolor di amet whatever.",
                image: require('@/assets/images/staff/amanda.jpg'),
              }
            ]
          },
          {
            name: "Dr. Raman Joshi",
            role: "Rheumatologist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/raman.jpg'),
            children: [
              {
                name: "Sandra",
                role: "MOA",
                description: "Lorem ipsum dolor di amet whatever.",
                image: require('@/assets/images/staff/sandra.jpg'),
              }
            ]
          },
          {
            name: "Dr. Sangeeta Bajaj",
            role: "Rheumatologist",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/sangeeta.jpg'),
            children: []
          },
          {
            name: "Lisa",
            role: "acpac therapist?",
            description: "Lorem ipsum dolor di amet whatever.",
            image: require('@/assets/images/staff/lisa.jpg'),
            children: []
          }
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
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
}

#card {
  margin-top: 20px;
  margin-left: 30px;
}

#card:hover {
  box-shadow: black;
}
</style>