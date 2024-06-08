<template>
  <div class="App">
    <!-- 头部 -->
    <HeaderList></HeaderList>
    <!-- 身体 -->
    <BodyList></BodyList>
    <!-- 脚步 -->
    <FooterList></FooterList>
  </div>
</template>

<script>
import BodyList from './componnets/BodyList.vue';
import FooterList from './componnets/FooterList.vue';
import HeaderList from './componnets/HeaderList.vue';


export default {
  components: {
    HeaderList: HeaderList,
    BodyList,
    FooterList,

  }

}
</script>

<style>
.App {
  width: 600px;
  height: 800px;
  background-color: rgb(16, 251, 133);
  margin: 0 auto;
}
</style>