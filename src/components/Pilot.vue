<template>
    <div>
        <div>
            <span>Name</span>
            <input type="text">
        </div>
        <div>
            <span>Pilot ability</span>
            <textarea name="pilotability" id="" cols="30" rows="10"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pilot'
    }
</script>

<style scoped>
    textarea[name="pilotability"]{
        resize: none;
        width: 100%;
    }
</style>