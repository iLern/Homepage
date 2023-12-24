<script>
    export default {
        name: "love",
        components: {

        }
    }
</script>

<template>
    <div id="frame">
        <div class="heart left"></div>
        <div class="heart right"></div>
        <div class="heart bottom"></div>
    </div>
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
body {
    background-color: pink;
}
#frame {
    position: relative;
    width: 400px;
    height: 300px;
    margin: 250px auto;
}
.left,
.right {
    top: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
.left {
    left: 35px;
    z-index: 2;
}
.right {
    right: 35px;
    z-index: 1;
}
.bottom {
    bottom: 36px;
    left: 100px;
    width: 200px;
    height: 200px;
    transform: rotate(45deg);
    z-index: 0;
}
.heart {
    position: absolute;
    box-shadow: 0 0 40px #d5093c;
    animation: beat 0.8s ease infinite normal;
    background: linear-gradient(-90deg, #f50a45 0%, #d5093c 40%);
}
@keyframes beat {
    0% {
        transform: scale(1) rotate(225deg);
        box-shadow: 0 0 40px #d5093c;
    }
    50% {
        transform: scale(1.1) rotate(225deg);
        box-shadow: 0 0 70px #d5093c;
    }
    100% {
        transform: scale(1) rotate(225deg);
        box-shadow: 0 0 40px #d5093c;
    }
}
</style>
