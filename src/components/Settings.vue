<template>
    <div>
        <nav class="settingsMenu">
            <router-link to="pilot">Pilot</router-link>
            <router-link to="ship">Ship</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    // Editor block for all the stats (Initiative, Hull, Shields, actions)
    // Split up the actions block to a different view? Became a bit complicated
    // Ships now have pilot and ship abilities
    export default {
        name: 'Settings'
    }
</script>

<style scoped>

</style>