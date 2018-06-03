<template>
    <div class="container">
        <div class="row">
            <input placeholder="Name your Ship" v-model="name" class="column column-100" type="text">
        </div>
        <div class="row split">
            <input placeholder="Hull" class="column column-50" v-model="hull" type="Number" min="1">
            <input placeholder="Shields" class="column column-50" v-model="shields" type="Number" min="0">
        </div>
        <div class="row">
            <textarea placeholder="Special Ship rules" class="column column-100" v-model="ability" name="shipability" id="" rows="10"></textarea>
        </div>
    </div>
</template>

<script>
function updateShip(oldVal, newVal) {
  this.$store.dispatch("updateShip", {
    name: this.name,
    hull: this.hull,
    shields: this.shields,
    ability: this.ability
  });
}

export default {
  name: "Ship",
  data() {
    return {
      ability: "",
      name: "",
      hull: 1,
      shields: 0
    };
  },
  watch: {
    name: updateShip,
    hull: updateShip,
    shields: updateShip,
    ability: updateShip
  }
};
</script>

<style lang="scss" scoped>
textarea[name="shipability"] {
  resize: none;
  width: 100%;
  padding: 0.5rem;
}

.container {
  .row {
    margin-top: 1rem;

    &.split {
      display: flex;
    }
  }
}
</style>