<template>
    <div class="app">

        <!-- <Son1Vue v-bind:cityId="cityId" v-on:changeCityId="cityId = $event"> -->
        <!-- 简化代码使用v-model -->
        <Son1Vue v-model="cityId"></Son1Vue>

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
            cityId: '103',
        }
    }
}
</script>

<style scoped>
.app {
    width: 700px;
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