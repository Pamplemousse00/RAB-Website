<template>
  <div>
    <head>
      <title>Rheumatology Associates Brampton</title>
    </head>

    <div id="app">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">
      <Header />
      <router-view style="margin-top: 160px"/>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import './style.css';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>

<style lang="scss">

@import "~bulma/sass/utilities/functions";

// Set your colors
$primary: #209cee;
$primary-light: findLightColor($primary);
$primary-dark: findDarkColor($primary);
$primary-invert: findColorInvert($primary);

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>






