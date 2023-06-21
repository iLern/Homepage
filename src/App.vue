<script setup>
import Avatar from "@/components/Avatar.vue";
import Links from "@/components/Links.vue";
import Description from "@/components/Description.vue";
</script>

<template>
    <div class="page">
        <div>
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
    position: relative;
    top: -30px; /* 调整此值以改变向上浮动的距离 */

    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;

    padding: 20px;
    border-radius: 30px;
    /*background-color: #C7CEDA;*/
}

.el-divider--horizontal {
    border-top: 1px rgba(0, 0, 0, 0.15) var(--el-border-style);
}
</style>
