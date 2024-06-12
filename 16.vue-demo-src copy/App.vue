<template>
  <div>
    <MyTable v-bind:list="list">
      <!-- 模板在slot传值过来时需要使用default-->
       <!-- 传值过来为对象
         -->
      <template #default="Userid">

        <button @click="del(Userid.id)">删除</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  methods: {
    del(id) {
      console.log(id)
      this.list = this.list.filter(item => item.id !== id)
    }
  },

  components: {
    MyTable
  }
}
</script>
