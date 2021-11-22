<template>
  <div id="app">
    <Header :socialIconClassesList="socialIconClassesList"/>
    <br>
    <br>
    <br>
    <Footer :socialIconClassesList="socialIconClassesList"/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {     
      socialIconClassesList: [
        "fa-facebook",
        "fa-instagram",
        "fa-twitter",
        "fa-youtube-play"
      ],
    }
  }
}
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
