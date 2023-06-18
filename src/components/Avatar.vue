<template>
    <div class="avatar-container">
        <el-avatar :size="avatarSize" :src="avatarUrl" :alt="altText"></el-avatar>
    </div>
</template>

<script>
export default {
    name: "Avatar",

    props: {
        avatarSize: {
            type: Number,
            default: 100,
            validator: (value) => {
                return Number.isInteger(value) && value > 0;
            }
        },
        avatarUrl: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            default: 'Avatar'
        }
    }
};
</script>


<style>
.avatar-container {
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    text-align: center;
}
</style>
