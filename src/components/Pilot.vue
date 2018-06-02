<template>
    <div>
        <div>
            <input placeholder="Name your Pilot" type="text">
        </div>
        <div>
            <input placeholder="Initiative" type="Number" min="1" max="6">
        </div>
        <div>
            <textarea placeholder="Abililty text of your pilot" name="pilotability" id="" rows="10"></textarea>
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