<template>
    <div class="container">
        <div class="row">
            <Settings class="column"/>
            <Preview class="column"/>
        </div>
    </div>
</template>

<script>
import Preview from "@/components/Preview";
import Settings from "@/components/Settings";
//Getting started with a card: 1. create from scratch. 2. import from x-wing data

export default {
  name: "Editor",
  components: {
    Preview,
    Settings
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
  }
 .row{
   height: 100%;
   display: flex;
 }
</style>