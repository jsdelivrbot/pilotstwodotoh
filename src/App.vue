<template>
  <div id="app">
    <div class="logo">logo</div>
    <router-view class="content"/>
  </div>
</template>

<script>
require("milligram");
export default {
  name: "App"
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .logo {
    height: 150px;
  }
  .content {
    min-height: calc(100% - 150px);
  }
}
</style>
