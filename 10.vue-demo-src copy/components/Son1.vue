<template>
    <!-- 不能使用v-model绑定，选中则需要使用change事件 -->

    <!-- <select v-bind:value="cityId" v-on:change="changeValue"> -->


    <select v-bind:value="value" v-on:change="changeValue">
        <option value="102">成都</option>
        <option value="103">绵阳</option>
        <option value="104">自贡</option>
        <option value="105">德阳</option>
        <option value="106">邛崃</option>
    </select>
</template>

<script>

export default {
    props: {
        // cityId: String   //使用value来接收值
        value: String
    },
    // 数据回传
    methods: {
        changeValue(e) {
            // this.$emit('changeCityId', e.target.value)
            // 与input绑定
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style scoped>
.son1 {
    width: 600px;
    height: 300px;
    border: 1px solid blue;
    margin: 0 auto;
}
</style>