import Vue from 'vue'
import App from './App.vue';
// 导入全局组件
import AllButton from './componnets/AllButton.vue';
// 全局组件实例化   （组件名，组件对象）
// 在其他vue中使用
Vue.component('AllButton', AllButton)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
