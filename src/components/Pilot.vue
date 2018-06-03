<template>
    <div>
        <div class="row">
            <input placeholder="Name your Pilot" v-model="name" type="text">
        </div>
        <div class="row">
            <input placeholder="Initiative" v-model="initiative" type="Number" min="1" max="6">
        </div>
        <div class="row">
            <textarea placeholder="Abililty text of your pilot" v-model="ability" name="pilotability"></textarea>
        </div>
    </div>
</template>

<script>
export default {
  name: "Pilot",
  data() {
    return {
      initiative: 1,
      name: "",
      ability: ""
    };
  },
  watch: {
    initiative: function(oldVal, newVal) {
      this.updatePilot();
    },
    name: function(oldVal, newVal) {
      this.updatePilot();
    },
    ability: function(oldVal, newVal) {
      this.updatePilot();
    }
  },
  methods: {
    updatePilot() {
      this.$store.dispatch("updatePilot", {
        name: this.name,
        initiative: this.initiative,
        ability: this.ability
      });
    }
  }
};
</script>

<style scoped>
textarea[name="pilotability"] {
  resize: none;
  width: 100%;
}
</style>