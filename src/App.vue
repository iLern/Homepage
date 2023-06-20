<script setup>
import Avatar from "@/components/Avatar.vue";
import Links from "@/components/Links.vue";
import Description from "@/components/Description.vue";
</script>

<template>
    <div class="page">
        <div class="full-screen">
            <Avatar :avatar-size="120" avatar-url="/avatar.png"></Avatar>
            <Description></Description>
            <el-divider></el-divider>
            <Links :icon_width="25" :icon_height="25"></Links>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
