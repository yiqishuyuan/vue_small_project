<template>
  <div class="content">
    <h3>个人信息列表</h3>
    <div>名字：{{ username }}</div>
    <div>年龄：{{ age }}</div>
    <div>车辆：{{ car.is_car }}</div>
    <div>是否单身:{{ isoneline ? '是' : '否' }}</div>
    <div>爱好：{{ hobby.join(',') }}</div>
    <!-- 如何修改数据 -->
    <button class="btn" v-on:click="countsub">-</button>
    <span>{{ count }}</span>
    <button class="btn" v-on:click="countadd">+</button>
  </div>

</template>

<script>
export default {
  // props: ['username', 'age', 'isoneline', 'car', 'hobby']


  // 对props中父组件传过来的数据进行数据的校验，（类型校验，非空校验，默认值，自定义校验）
  props: {
    // 对username校验
    username: {
      type: String,// 类型
      required: true, //非空校验
      default: '',   //给予默认值
      validator(value) {
        // console.log(typeof(value))
        // 自定义校验器
        if (typeof (value) == 'string') {
          return true
        }
      }

    },
    //
    age: Number,
    // 
    isoneline: Boolean,
    //
    car: Object,
    // 
    hobby: Array,
    //
    count: Number,

  },
  methods: {
    // 通过在函数的emit对当前文件下的count操作，然后传给父组件
    countsub() {
      this.$emit('countNumber', this.count - 1)
      
    },
    countadd() {

      this.$emit('countNumber', this.count + 1)
      console.log(this.count)
    }
  }
}
</script>

<style></style>