<template>
    <div class="son">
        子组件{父亲传过来的字符为：{{ title }}}
        <!-- 子组件传值给父亲 -->
         <button @click="fn" style="width: 100px;height: 50px;">向父亲传值</button>
    </div>
</template>

<script>
export default {
    // props ---》支柱
   props:['title']  ,
   methods:{
    fn(){
        // 向父亲传值
        // 使用this.$emit(事件名，值)
        this.$emit('changeTitle','mycraft--data-online!')
    }
   }
}
</script>

<style></style>