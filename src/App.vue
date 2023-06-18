<script setup>
import Avatar from "@/components/Avatar.vue";
import Links from "@/components/Links.vue";
import Description from "@/components/Description.vue";
</script>

<template>
    <div class="page">
        <el-container>
            <el-main>
                <Avatar :avatar-size="120" avatar-url="/avatar.png"></Avatar>
                <Description></Description>
                <el-divider></el-divider>
                <Links :icon_width="25" :icon_height="25"></Links>
            </el-main>
        </el-container>
    </div>
</template>

<script>

</script>

<style scoped>
.page {
    margin-bottom: 20vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
