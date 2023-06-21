<template>
    <span class="centered-div name">iLern</span>
    <span class="centered-div description">Student / Developer</span>
</template>

<script>
export default {
    name: "Description"
}
</script>

<style scoped>
.centered-div {
    display: flex;
    justify-content: center;
    align-items: center;
}
.name {
    font-size: 30px;
    font-weight: bold;
    height: 50px;
    color: #646B73;
}
.description {
    font-size: 15px;
    height: 30px;
    color: #646b73;
}
</style>