<template>
    <div class="inputbox">
        <div class="box-header">
            <slot name="head"></slot>
        </div>
        <div class="box-body">
            <!-- 你确认要退出？ -->
            <!-- slot占位 -->
           <!-- 没有内容则空白，有则不需要 -->
            <slot name="body">传值前的内容</slot>   
        </div>
        <div class="box-footer">
            <slot name="foot">

            </slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>