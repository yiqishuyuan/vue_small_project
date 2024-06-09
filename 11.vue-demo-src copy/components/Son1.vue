<template>
    <div class="box" v-show="visible">
        <span>系统提示</span>
        <a href="javascript:;" @click="clone">x</a>
        <hr>
        <span class="info">退出系统？</span>
        <hr>
        <button @click="clone">sure</button>
        &nbsp;
        <button @click="clone">cancel</button>
    </div>
</template>

<script>

export default {
    props: {
        visible: Boolean
    },
    // 数据回传
    methods: {
        // 数据向上回传
        clone(){
            this.$emit('update:visible',false)
        }
    }
}
</script>

<style scoped>
.box {
    width: 800px;
    height: 500px;
    margin: 0 auto;
    border: 1px solid black;
}

.box .info {
    width: 100%;
    color: red;
    font-size: 50px;
    text-align: center;
}
</style>