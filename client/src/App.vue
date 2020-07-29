<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <notifications position="bottom right" />
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "./components/header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
