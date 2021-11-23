<template>
  <div id="app">
    <Header :socialIconClassesList="socialIconClassesList"/>
    <TodaysPick />
    <Recipes />
    <CulinaryCollection />
    <FarmToTable />
    <Subscribe />
    <Footer :socialIconClassesList="socialIconClassesList"/>
  </div>
</template>

<script>
import CulinaryCollection from './components/CulinaryCollection.vue'
import FarmToTable from './components/FarmToTable.vue'
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
    CulinaryCollection,
    FarmToTable,
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
