<template>
    <div class="container">
        <div class="card">
            <div class="pilot-initiative">{{$store.state.pilot.initiative}}</div>
            <div class="pilot-name">{{$store.state.pilot.name}}</div>
            <div class="pilot-ability">{{$store.state.pilot.ability}}</div>
            <div class="ship-name">{{ $store.state.ship.name }}</div>
            <div class="ship-ability">{{ $store.state.ship.ability }}</div>
            <div class="ship-hull">Hull {{ $store.state.ship.hull }}</div>
            <div class="ship-shields">Shields {{ $store.state.ship.shields }}</div>
            <div class="ship-defense">Defense {{ $store.state.ship.defense }}</div>
        </div>
    </div>
    
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*
        Unsleeved Pilot Card Length – 88mm
        Unsleeved Pilot Card Width – 63.5mm
    */
.container {
  display: flex;
  justify-content: center;
  padding: 0;
}
.card {
  background-color: black;
  width: 318px;
  height: 440px;
  color: white;
}
</style>