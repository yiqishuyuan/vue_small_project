<template>

    <!-- 列表区域 -->
    <section class="main">
        <ul class="todo-list">
            <li class="todo" v-for="(item, index) in list" :key="item.id">
                <div class="view">
                    <span class="index">{{ index + 1 }}</span> <label>{{ item.name }}</label>
                    <button class="destroy" v-on:click="del(item.id)"></button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
// import { del } from 'vue';

export default {
    props: {
        list: Array
    },
    methods: {
        del(id) {
            this.$emit('DeleteCount', id)
        }
    }
}
</script>

<style></style>