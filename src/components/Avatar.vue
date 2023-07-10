<template>
    <div class="avatar-container">
<!--        <el-avatar :size="avatarSize" :src="avatarUrl" :alt="altText"></el-avatar>-->
        <img :src="avatarUrl" :alt="altText" :width="avatarSize" :height="avatarSize">
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

img {
    border-radius: 50%;
    box-shadow: 0 0 11px #888888;
    transition: box-shadow 0.5s ease-out 100ms;
}

img:hover {
    box-shadow: 0 0 50px #97A0ED;
}

</style>
