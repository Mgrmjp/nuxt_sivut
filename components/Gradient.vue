<template>
    <div class="gradient">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.gradient {
    z-index: 99;
    width: 99vw;
    height: 100%;
    bottom: 0px;
    position: absolute;
    background: rgba(31, 9, 9, 0.322);
    background: linear-gradient(0deg, rgba(31, 9, 9, 0.294) 0%, rgba(47,47,47,0) 50%, rgba(187,42,42,0) 100%);
    pointer-events: none;
}

</style>