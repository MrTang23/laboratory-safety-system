import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入全局css
import './assets/css/global.css'

//导入axios发起请求
import axios from 'axios'

//用户端设备检测
Vue.prototype.$equipment=function(){
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
   return flag;
}

//配置请求根路径
//vue.config.js修改跨域问题
axios.defaults.baseURL = 'http://114.55.147.112:8080'

//将token值写入请求头
axios.interceptors.request.use(config => {
    config.headers.satoken = sessionStorage.getItem('token')
    //return不可省略
    return config
})

Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
