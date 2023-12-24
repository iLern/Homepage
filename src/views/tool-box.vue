<script>
    export default {
        name: "tool-box",
        components: {
        },
    }
</script>

<template>
   <h1 class="blink-animation">Editing...</h1>
</template>

<style scoped>
@keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.blink-animation {
    color: #181818;
    animation: blink 1s ease-in-out infinite; /* 使用 animation 属性应用动画 */
}
</style>
