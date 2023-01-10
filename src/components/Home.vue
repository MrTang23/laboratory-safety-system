<template>
    <div class="font">
        <el-container class="home-container">
            <el-container>
                <el-aside
                    :width="isCollapse ? '64px' : '280px'"
                    class="aside-menu"
                >
                    <!--侧边栏头像logo-->
                    <div class="aside-title">
                        <img src="../assets/logo.png" alt="" class="logo" />
                        <div class="font-location">
                            {{
                                this.isCollapse ? "" : "享智实验室安全管理系统"
                            }}
                        </div>
                    </div>
                    <!--侧边栏菜单-->
                    <el-menu
                        background-color="#272B31"
                        text-color="#C0C4CC"
                        active-text-color="#409EFF"
                        :unique-opened="true"
                        :collapse="isCollapse"
                        :collapse-transition="false"
                        router
                        :default-active="path"
                    >
                        <el-menu-item index="/welcome" @click="getRoutePath()">
                            <i class="el-icon-menu"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                        <el-menu-item index="1" @click="getRoutePath()">
                            <i class="el-icon-s-marketing"></i>
                            <span slot="title">数字孪生大屏</span>
                        </el-menu-item>

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-s-management"></i>
                                <span class="submenu">物视镜</span>
                            </template>

                            <el-menu-item index="2-0" @click="getRoutePath()"
                                >药品入库</el-menu-item
                            >
                            <el-menu-item index="2-1" @click="getRoutePath()"
                                >实验平台</el-menu-item
                            >
                            <el-menu-item index="2-2" @click="getRoutePath()"
                                >物品柜</el-menu-item
                            >
                            <el-menu-item index="2-3" @click="getRoutePath()"
                                >借出管理</el-menu-item
                            >
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-user-solid"></i>
                                <span class="submenu">团队成员管理</span>
                            </template>
                            <el-menu-item
                                index="/adminList"
                                @click="getRoutePath()"
                                >管理员</el-menu-item
                            >
                            <el-menu-item
                                index="/memberList"
                                @click="getRoutePath()"
                                >普通成员</el-menu-item
                            >
                            
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-s-cooperation"></i>
                                <span class="submenu">权限管理</span>
                            </template>
                            <el-menu-item
                                index="/"
                                @click="getRoutePath()"
                                >角色列表</el-menu-item
                            >
                            <el-menu-item
                                index="/"
                                @click="getRoutePath()"
                                >权限列表</el-menu-item
                            >
                            
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <!--页面头部、主体区域-->
                <el-container>
                    <!--页面头部-->
                    <el-header style="height: 80px" class="header">
                        
                        <el-button
                            type="primary"
                            icon="el-icon-s-operation"
                            @click="toggleCollapse"
                            class="collapse"
                        ></el-button>

                        <el-menu
                            mode="horizontal"
                            text-color="#303133"
                            active-text-color="#409EFF"
                            class="menu-header"
                        >
                            <el-menu-item index="1">处理中心</el-menu-item>
                            <el-menu-item index="2">我的工作台</el-menu-item>
                            <el-menu-item index="3">消息中心</el-menu-item>
                            <el-menu-item index="4">个人中心</el-menu-item>
                        </el-menu>
                        <img
                            src="../assets/head-photo.jpeg"
                            alt=""
                            class="head-photo"
                        />
                        <div class="user-info-move">
                            <div class="user-info-username">
                                {{
                                    this.screenWidth >= 880 ? this.username : ""
                                }}
                            </div>
                            <div class="user-info-email">
                                {{
                                    this.screenWidth >= 880
                                        ? "amostang23@gmail.com"
                                        : ""
                                }}
                            </div>
                        </div>
                    </el-header>

                    <!--页面主体内容-->
                    <el-main class="main-outer">
                        <!--路由占位符-->
                        <router-view></router-view>
                       
                    </el-main>
                </el-container>
            </el-container>

            <!--底部版权标识区域-->
            <el-footer style="height: 25px" class="footer-font"
                >南京工业大学 享智实验室安全管理系统-{{ this.screenWidth }}*{{
                    this.screenHeight
                }}</el-footer
            >
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: sessionStorage.getItem("username"),
            //是否折叠，false为不折叠
            isCollapse: false,
            //将路径从session storage中提取出。避免因刷新丢失菜单激活状态
            path: "",
            //监听浏览器窗口大小
            screenWidth: "",
            screenHeight: "",
        };
    },
    created() {
        this.path = sessionStorage.getItem("route_path");
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        sessionStorage.setItem("screen-height",this.screenHeight)
        if (this.screenWidth <= 1170) {
                    this.isCollapse = true;
                }
                if (this.screenWidth > 1170) {
                    this.isCollapse = false;
                }
                if (this.screenWidth <= 800 && this.screenWidth >= 790) {
                    this.messageScreenWidth();
                }
        
    },
    //获取实时屏幕尺寸大小
    //返回值：screenHeight,screenWeight
    mounted() {
         //实时监测屏幕尺寸
         this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        window.onresize = () => {
            return (() => {
                this.screenWidth = document.body.clientWidth;
                this.screenHeight = document.body.clientHeight;
                sessionStorage.setItem("screen-height",this.screenHeight)
                if (this.screenWidth <= 1170) {
                    this.isCollapse = true;
                }
                if (this.screenWidth > 1170) {
                    this.isCollapse = false;
                }
                if (this.screenWidth <= 800 && this.screenWidth >= 790) {
                    this.messageScreenWidth();
                }
            })();
        };
        
        //监测是否为手机端
        const device = navigator.userAgent;
        if (device.indexOf("iPad") > -1) {
            //  ipad
            this.$notify.info({
                title: "提示",
                message:
                    "使用iPad浏览可能无法达到最佳浏览效果，但不会造成任何实际影响。",
            });
        } else if (
            device.indexOf("Android") > -1 ||
            device.indexOf("ios") > -1
        ) {
            // 手机
            this.$alert(
                "手机端浏览可能造成极差的用户体验。请使用ipad/pad/电脑端。",
                "警告",
                {
                    confirmButtonText: "确定",
                    type: "warning",
                    callback: (action) => {
                        window.opener = null;
                        window.open("about:blank", "_top").close();
                    },
                }
            );
        } else {
            // 电脑
        }

       
    },
    methods: {
        //获取当前路径
        getRoutePath() {
            sessionStorage.setItem("route_path", this.$route.path);
        },
        //设备校验
        _isMobile() {
            let flag = navigator.userAgent.match(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            );
            return flag;
        },
        logout() {
            let satoken = localStorage.getItem("user_token");
            this.$get("/logout", { satoken });
            sessionStorage.clear();
            //用户名，密码，token令牌均保存在session中
            //localStorage.clear();
            this.$router.push("/login");
        },
        toggleCollapse() {
            this.isCollapse = !this.isCollapse;
        },
        messageScreenWidth() {
            this.$alert(
                "过低的浏览器窗体宽度和高度会导致较差的用户体验。请调整浏览器窗体至合适比例后点击确定。",
                "警告",
                {
                    confirmButtonText: "确定",
                    type: "warning",
                    callback: (action) => {
                        this.$notify({
                            title: "成功",
                            message:
                                "此时浏览器窗体为" +
                                this.screenWidth +
                                " * " +
                                this.screenHeight +
                                "px，谢谢配合。",
                            type: "success",
                        });
                    },
                }
            );
        },
        
    },
};
</script>

<style lang="less" scoped>
.font {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    .el-menu-item {
        font-size: 16px;
        letter-spacing: 0.15em;
    }
    .submenu {
        font-size: 16px;
    }
    .home-container {
        height: 100vh;
    }
    .header {
        background-color: #ffffff;
        color: #303133;
        //text-align: center;
        line-height: 60px;
        height: 80px;
        box-shadow: 5px 0px 5px -2px #606266 inset;
    }
    .header-address {
        background-color: Transparent;
        color: #303133;
        padding-left: 10px;
        text-align: left;
        line-height: 45px;
        //box-shadow: 5px 0px 5px -2px #606266 inset;
    }
    .el-footer {
        background-color: #606266;
        color: #ffffff;
        text-align: center;
    }

    .aside-menu {
        background-color: rgb(39, 43, 49);
        color: #c0c4cc;
        height: 100%;
        overflow: visible;

        .el-menu {
            border-right: none;
            border-bottom: none;
            //font-size: 30px;
            font-weight: 500;
            letter-spacing: 0.2em;
        }
    }

    .main-outer {
        background-color: #ebeef5;
        color: #303133;
        //text-align: center;
        box-shadow: 5px -1px 5px -2px #606266 inset;
        padding: 13px 23px 23px 23px;
    }
   
    .path {
        transform: translate(0, 70%);
        font-size: 14px;
    }
    .aside-title {
        vertical-align: middle;
        height: 80px;
        //transform: translate(10%,30%);
    }
    .font-location {
        transform: translate(20%, -50%);
        font-size: 19px;
        font-weight: 300;
        //padding: 10px;
    }
    .collapse {
        background: transparent;
        color: #303133;
        font-size: 33px;
        border: none;
        transform: translate(-20%, 22%);
    }
    .logo {
        width: 40px;
        transform: translate(30%, 60%);
    }
    .footer-font {
        font-size: 5px;
        padding-top: 3.5px;
    }
    .toggle-button {
        color: #303133;
        font-size: 22px;
        line-height: 75px;
        letter-spacing: 0.2em;
        cursor: pointer;
        float: left;
        padding-left: 10px;
    }
    .head-photo {
        width: 50px;
        //position: fixed;

        float: right;
        transform: translate(470px, 30%);
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    }
    .user-info-username {
        font-weight: 900;
        font-size: 20px;
        text-align: right;
        //transform: translate(50px, 0);
        //padding-right: 10px;
        margin: 10px;
        color: #303133;
        line-height: 10px;
    }
    .user-info-email {
        font-weight: 200;
        font-size: 14px;
        text-align: right;
        //transform: translate(50px, 0);
        //padding-right: 10px;
        margin: 10px;
        color: #303133;
        line-height: 10px;
    }
    .user-info-move {
        float: right;
        transform: translate(470px, 40%);
    }
    .menu-header {
        background-color: transparent;
        font-weight: 600;
        border-bottom: none;
        float: right;
        position: sticky;
        //transform: translate(-400px, 10%);
        right: 25%;
        top: 0.6%;
        height: 40px;
    }
    .el-menu-item:hover {
        outline: 0 !important;
        color: #409eff !important;
    }
    .el-menu-item.is-active {
        color: whitesmoke !important;
        background: #409eff !important;
    }
    .el-submenu__title:focus,
    .el-submenu__title:hover {
        outline: 0 !important;
        color: #409eff !important;
        background: none !important;
    }
    .el-menu--horizontal > .el-menu-item {
        height: 70px;
        line-height: 70px;
    }
}
</style>