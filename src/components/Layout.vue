<template>
    <div>
        <div class="row">
            <input placeholder="Link to artwork" v-model="imageUrl" type="text">
        </div>
    </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
        imageUrl: "https://cdna.artstation.com/p/assets/images/images/008/756/972/large/klaus-wittmann-bob1.jpg?1515102092"
    };
  },
  methods: {
    updateLayout() {
      this.$store.dispatch("updateLayout", {
        name: this.name,
        initiative: this.initiative,
        ability: this.ability
      });
    }
  },
  watch: {}
};
</script>

<style scoped>
</style>