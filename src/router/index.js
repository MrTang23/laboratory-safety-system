import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //to表示将要访问的路径
    //from表示从哪个路径跳转来
    //next为一个函数，表示放行
    //next() 放行   next('/....') 表示强制跳转
    if (to.path === '/login') return next();
    let tokenStr = sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})

export default router