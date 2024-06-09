<template>
    <div class="two">
        msg:2
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import Bus from '@/utils/eventBus';
export default {
    // 进入页面就监听其他组件消息。
    created() {
        Bus.$on('sendmsg', (msg) => {
            console.log(msg)
            this.msg = msg
        })

    },
    data() {
        return {
            msg: ''
        }
    }
}
</script>

<style>
.two {
    border: 3px solid black;
    width: 200px;
    height: 100px;
}
</style>