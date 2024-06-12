import Vue from 'vue'
import App from './App.vue'
// import './styles/index.css'

Vue.config.productionTip = false
// 全局定义指令
// ('指令名'，{})
Vue.directive('focus',{
     inserted(el){
         el.focus()
     }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
