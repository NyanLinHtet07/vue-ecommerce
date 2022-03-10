<template>
  <Nav></Nav>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Nav from './views/main/Nav.vue'
import Footer from './views/main/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
