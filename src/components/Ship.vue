<template>
    <div class="container">
        <div class="row">
            <input placeholder="Name your Ship" v-model="name" class="column column-100" type="text">
        </div>
        <div class="row split">
            <input placeholder="Hull" class="column" v-model="hull" type="Number" min="1">
            <input placeholder="Shields" class="column" v-model="defense" type="Number" min="0">
            <input placeholder="Defense" class="column" v-model="shields" type="Number" min="0">
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
    ability: this.ability,
    defense: this.defense
  });
}

export default {
  name: "Ship",
  data() {
    return {
      ability: "",
      name: "T-65 X-Wing",
      hull: 4,
      shields: 2,
      defense: 2,
      actions: [
        {
          type: "focus",
          difficulty: "white",
          linked: {
            type: "barrel",
            difficulty: "red"
          }
        }
      ],
      arcs: [
        {
          type: "front",
          value: "3"
        }
      ]
    }
  },
  watch: {
    name: updateShip,
    hull: updateShip,
    shields: updateShip,
    ability: updateShip,
    defense: updateShip
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
      justify-content: space-between;
      input{
        
      }
    }
  }
}
</style>