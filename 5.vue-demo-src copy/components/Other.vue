<template>
  <div class="content">
    <h3>个人信息列表</h3>
    <div>名字：{{ username }}</div>
    <div>年龄：{{ age }}</div>
    <div>车辆：{{ car.is_car }}</div>
    <div>是否单身:{{ isoneline ? '是' : '否' }}</div>
    <div>爱好：{{ hobby.join(',') }}</div>

  </div>
</template>

<script>
export default {
  props: ['username', 'age', 'isoneline', 'car', 'hobby']
}
</script>

<style></style>