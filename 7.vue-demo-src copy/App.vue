<template>
  <!-- 主体区域 -->
  <section id="app">
    <XhHeaderVue @DateInfo="addInfo"></XhHeaderVue>
    <XhMainVue :list="list" v-on:DeleteCount="delList"></XhMainVue>
    <XhFooterVue :list="list" v-on:DelAll="delAll"></XhFooterVue>
  </section>
</template>

<script>
import XhFooterVue from './components/XhFooter.vue'
import XhHeaderVue from './components/XhHeader.vue'
import XhMainVue from './components/XhMain.vue'

export default {
  components: {
    XhFooterVue,
    XhHeaderVue,
    XhMainVue
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        { id: 1, name: '打篮球', },
        { id: 2, name: '打足球', },
        { id: 3, name: '游泳半小时', },
        { id: 4, name: '练习钢琴', },

      ]
    }
  },
  methods: {
    // 删除
    delList(id) {
      this.list = this.list.filter(item => item.id != id)
    },
    // 添加
    addInfo(value) {
      console.log(value)
      if (value.trim() === '') {
        console.error(alert('error ,input data not conform!'))
      } else {
        this.list.unshift({
          id: +new Date(),
          name: value,
        })
      }

    },
    //全部删除
    delAll() {
      this.list = []

    }
  },
  // 持续化存储
  watch: {
    // 监听list
    list: {
      deep: true,
      handler(newvalue) {
        localStorage.setItem('list', JSON.stringify(newvalue))
      }
    }
  }
}
</script>

<style></style>
