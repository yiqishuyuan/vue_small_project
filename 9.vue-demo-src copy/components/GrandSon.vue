<template>
    <div class="sz">
        msg:grandson
        <hr>
        {{ color }}----{{ userinfo.name }}----{{ userinfo.age }}
    </div>
</template>

<script>
// 通过app中的provide提供的数据
export default {
    inject: ['color', 'userinfo']
   
} 
</script>

<style scoped>
.sz {
    width: 300px;
    height: 200px;
    border: 1px solid #01e056;
    margin: 0 auto;
}
</style>