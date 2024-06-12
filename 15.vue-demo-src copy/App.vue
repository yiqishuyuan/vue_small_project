<template>
    <div class="app">
        <MyConformVue>
            <!-- 在使用中，具名插槽需要与命名匹配 -->
            <template v-slot:head>
                <h3>友情提示</h3>
                <span class="close">x</span>
            </template>
            <template v-slot:body>
                你确认要退出？
            </template>
            <template #foot>
                <button>取消</button>
                <button>确定</button>
            </template>
        </MyConformVue>

    </div>
</template>

<script>
import MyConformVue from './components/MyConform.vue'

export default {
    components: {
        MyConformVue,
    }
}
</script>


<style scoped></style>