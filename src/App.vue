<template>
  <div id="app">
    <Header :socialIconClassesList="socialIconClassesList"/>
    <TodaysPick />
    <Recipes />
    <Subscribe />
    <Footer :socialIconClassesList="socialIconClassesList"/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Recipes from './components/Recipes.vue'
import Subscribe from './components/Subscribe.vue'
import TodaysPick from './components/TodaysPick.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Subscribe,
    TodaysPick,
    Recipes,
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
