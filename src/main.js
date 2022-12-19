import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入全局css
import './assets/css/global.css'

//导入axios发起请求
import axios from 'axios'
//配置请求根路径
//vue.config.js修改跨域问题
axios.defaults.baseURL='http://114.55.147.112:8080'
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
