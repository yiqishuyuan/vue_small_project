<template>
    <div class="app">
        <button @click="isShow = true">退出</button>
        <!-- 使用.sync -->
        <Son1Vue v-bind:visible.sync="isShow"></Son1Vue>
        <!-- 上下方法相同 -->
        <Son1Vue :visible="isShow" @update:visible="isShow = $event"></Son1Vue>
    </div>
</template>

<script>
import Son1Vue from './components/Son1.vue'

export default {
    components: {
        Son1Vue,
    },
    data() {
        return {
            isShow: false,
        }
    }
}
</script>

<style scoped>
.app {
    width: 100%;
    height: 700px;
    border: 1px solid red;
    margin: 0 auto;
}

.app button {
    width: 100px;
    height: 50px;
    margin: 0 auto;
    display: block;
}
</style>