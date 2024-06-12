<template>
    <div class="app">

        <!-- echart图标 -->
        <Son1Vue></Son1Vue>
        <!-- 表单组件的数据操作 -->
        <RefFormVue ref="refForm"></RefFormVue>
        <button @click="changeFormGet">获取数据</button>
        <button @click="changeFormReset">重置表单</button>

    </div>
</template>

<script>
import RefFormVue from './components/RefForm.vue'
import Son1Vue from './components/Son1.vue'

export default {
    components: {
        Son1Vue,
        RefFormVue,
    },
    data() {
        return {

        }
    },
    methods: {
        changeFormGet() {
            // 获取表单数据，obj类型
            console.log(this.$refs.refForm.getValues())
        },
        changeFormReset() {
            //    重置表单
            this.$refs.refForm.resetValues()
        }
    }
}
</script>

<style scoped></style>