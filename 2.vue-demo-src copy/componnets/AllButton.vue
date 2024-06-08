<!-- 全局注册组件 -->
<!-- 全局组件需要在main.js中注册 -->
<template>
    <button class="btn" @click="fn">点击</button>
</template>

<script>
export default {
    methods: {
        fn() {
            alert('hello my world !')
        }
    }
}
</script>

<style>
.btn {
    width: 60px;
    height: 40px;
    border-radius: 5px;
    background-color: chartreuse;
    vertical-align: middle  ;
}
</style>