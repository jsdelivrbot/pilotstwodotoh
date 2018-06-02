<template>
    <div class="container">
        <div class="row">
            <input placeholder="Name your Ship" class="column column-100" type="text">
        </div>
        <div class="row split">
            <input placeholder="Hull" class="column column-50" type="Number" min="1">
            <input placeholder="Shields" class="column column-50" type="Number" min="0">
        </div>
        <div class="row">
            <textarea placeholder="Special Ship rules" class="column column-100" name="shipability" id="" rows="10"></textarea>
        </div>
    </div>
</template>

<script>
export default {
  name: "Pilot"
};
</script>

<style lang="scss" scoped>
textarea[name="shipability"] {
  resize: none;
  width: 100%;
  padding: 0.5rem
}

.container {
  .row {
    margin-top: 1rem;

    &.split{
        display: flex;
    }
  }
}
</style>