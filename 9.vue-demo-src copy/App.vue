<template>
    <div class="app">
        APP:<button v-on:click="changeinfo"> 修改数据</button>
        <Son1Vue></Son1Vue>
        <Son2Vue></Son2Vue>
        <!-- 组件 -->
      

    </div>
</template>

<script>
import Son1Vue from './components/Son1.vue'
import Son2Vue from './components/Son2.vue'
// 给其他组件提供消息
export default {
    components: {
        Son1Vue,
        Son2Vue,

    },
    // 提供方法 ---->任何一个组件都能接收
    provide() {
        return {
            color: this.color,
            userinfo: this.userinfo

        }
    },
    // 提供数据供provide使用
    data() {
        return {
            color: 'pink',  //简单类型，非响应式的
            userinfo: {  // 复杂类型    响应式的
                name: 'lily',
                age: 88,
            }

        }
    },
    // 修改
    methods: {
        changeinfo() {
            // console.log('msg')
            this.color = 'red',
                console.log(this.color)
            this.userinfo.name = 'TOM'

        },

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