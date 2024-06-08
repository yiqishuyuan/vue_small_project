<template>
    <!-- 输入框 -->
    <header class="header">
        <h1>小黑记事本</h1>
        <input placeholder="请输入任务" @keyup.enter="add" v-model="infoname" class="new-todo" />
        <button class="add" v-on:click="add">添加任务</button>
    </header>
</template>

<script>
export default {
    data() {
        return {
            infoname: ''
        }
    }
    ,
    methods: {
        add() {
            this.$emit('DateInfo', this.infoname)
            this.infoname = ''
        },


    }
}
</script>

<style></style>