<template>
    <div class="app">
        <input type="text" ref="ipt" v-focus>
        <!-- 案列 -->
        <div class="pil" v-pil="color1">我的第一行</div>
        <div class="pil" v-pil="color2">我的第二行</div>
    </div>
</template>

<script>
import { color } from 'echarts';

export default {
    //    1.局部定义
    // mounted() {
    //     this.$refs.ipt.focus()
    // }
    // 2.使用directive局部定义
    // directives: {
    //     // inserted
    //     focus: {
    //         inserted(el) {
    //           el.focus()
    //         }
    //     }
    // }


    //案列
    data() {
        return {
            color1: 'red',
            color2: 'blue'
        }
    },
    directives: {
        pil: {

            // binging是一个方法,当然或者something，或者是任何命名
            inserted(el,songthing) {
                console.log(el,'binding方法:',songthing)
                el.style.color = songthing.value
            },
            // update和inserted请查看vue基础文档
            // 修改循环
            update(el,songthing){
                // 在修改时
                el.style.color=songthing.value
            }
        }
    }
}
</script>


<style scoped></style>