<template>
    <div class="box" v-if="isshow">
        {{ title }}
        <input type="text" v-model="iptdata" ref="inp">
        <button>确定</button>

    </div>
    <div class="box" v-else>
        {{ title }}
        <!-- 点击编辑时自动聚焦 -->
        <button v-on:click="changeText">编辑</button>
    </div>
</template>

<script>
// import { turn } from 'core-js/core/array';

export default {
    data() {
        return {
            title: '大标题',
            iptdata: '',
            isshow:false
        }
    },
    methods:{
        changeText(){
            // 显示输入框和聚焦
            this.isshow= true
            // 使用$nextTick聚焦   //该处使用定时器也可以
            this.$nextTick(()=>{
               this.$refs.inp.focus()

            })
        }
    }


}
</script>


<style scoped></style>