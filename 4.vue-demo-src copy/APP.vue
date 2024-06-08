<template>
  <div class="App">
    父组件
    <!-- 向子类传递data中的数据 -->
    <!-- 子类传过来的值用@子类的事件名 -->
    <Son v-bind:title="myTitle" v-on:changeTitle="changeData"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue'
export default {
  // data应该是一个函数
  data() {
    return {
      myTitle: '我的世界'
    }
  },
  methods: {
    // 传值需要形参接受
    changeData(newvalue) {
         this.myTitle = newvalue
    }
  },
  components: {
    Son,
  }
}
</script>

<style></style>