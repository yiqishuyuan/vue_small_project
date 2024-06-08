<template>
  <div class="one">
    msg:two
    <button @click="sendMsg">向其他组件传递</button>
  </div>
</template>

<script>
import Bus from '../utils/eventBus'
export default {
    // 发送消息
    methods:{
     sendMsg(){
        // 发送方通过触发事件发送消息
        Bus.$emit('sendmsg','today is weather!')
     }
    }
 
}
</script>

<style>
.one{
    border: 3px solid black;
    width: 200px;
    height: 100px;
}

</style>