
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import welcome from '../views/welcome.vue'
import AdminList from '../views/User/AdminList.vue'
import MemberList from '../views/User/MemberList.vue'
import securityShow from '../views/security-threejs/securityShow.vue'
import fullScreen from '../views/security-threejs/fullScreen.vue'


import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login',
            meta: {
                title: "享智-实验室安全管理系统"
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                title: "享智-实验室安全管理系统"
            }
        },
        {
            path: '/404-notFound',
            name: '404',
            component: () => import('../404.vue'),
            meta: {
                title: "享智-404"
            }
        },
        {
            path: '/home',
            component: Home,
            redirect: '/welcome',
            children: [
                {
                    path: '/welcome',
                    component: welcome,
                    meta: {
                        title: "享智-首页"
                    }
                },
                {
                    path: '/adminList',
                    component: AdminList,
                    meta: {
                        title: "享智-管理员列表"
                    }
                },
                {
                    path: '/memberList',
                    component: MemberList,
                    meta: {
                        title: "享智-成员列表"
                    }
                },
                {
                    path: '/BIMmodel',
                    component: securityShow,
                    meta: {
                        title: "享智-安全学院模型预览"
                    }
                },

            ]
        },
        {
            path: '/BIMShow',
            component: fullScreen,
            meta: {
                title: "享智-安全学院数字孪生大屏",
            }
        }, 
        {
            path: '*', // 此处需特别注意至于最底部
            redirect: '/404-notFound'
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

    //路由发生变化时候修改页面中的title
    if (to.meta.title) {
        document.title = to.meta.title

        if (!to.matched.length) {
            const storeMenus = localStorage.getItem("token")
            if (storeMenus) {
                //如果有token内容，说明已经登录过，跳到404
                next("/404-notFound") // 跳到
                console.log(1)
            } else {
                //如果没有token内容，说明还没有登录过
                next("/login")
            }
        }
        //找到了就放行路由
        next(true)//放行路由
    }
    next()
})


export default router