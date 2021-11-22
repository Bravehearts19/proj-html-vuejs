<template>
  <div id="app">
    <Header />
    <Footer />
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
  }
}
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
