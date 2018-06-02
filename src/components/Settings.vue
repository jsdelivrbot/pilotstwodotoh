<template>
    <div class="subcontent">
        <nav class="settingsMenu">
            <router-link class="settingsItem pilot" to="pilot">Pilot</router-link>
            <router-link class="settingsItem ship" to="ship">Ship</router-link>
        </nav>
        <router-view class="content"></router-view>
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

<style lang="scss" scoped>
    .subcontent{
        height: 100%;
        width: 100%;
    }
    .settingsMenu{
        display: flex;
        .settingsItem{
            flex-grow: 1;
            min-width: 100px;
            display: block;
            &.router-link-active{
                border-bottom: 1px solid #4e4e4e;
            }
        }
    }
    .content{
        padding-top: 2rem;
    }
</style>