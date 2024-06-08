import Vue from 'vue'
import App from './App.vue'


// import './styles/index.css' // 页面样式
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
