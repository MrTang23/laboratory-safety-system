<template>
    <div class="login_container">
        <!--登录区域-->
        <div style="display: flex">
            <transition name="el-zoom-in-center">
                <div class="login_box" v-show="show">
                    <!--头像区域-->
                    <div class="avatar_box">
                        <img src="../assets/logo.png" alt="" />
                    </div>
                    <div class="welcome_title">享智实验室安全管理系统</div>
                    <!--登录表单区域-->
                    <!--rules为表单验证-->
                    <el-form
                        label-width="130px"
                        class="login_form"
                        :model="loginForm"
                        :rules="loginFormRules"
                        ref="loginFormCheck"
                    >
                        <el-form-item label="账号" prop="username">
                            <el-input
                                prefix-icon="el-icon-user"
                                placeholder="请输入您的账号"
                                v-model="loginForm.username"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input
                                prefix-icon="el-icon-lock"
                                v-model="loginForm.password"
                                placeholder="请输入密码"
                                type="password"
                            ></el-input>
                        </el-form-item>
                        <el-button
                            type="primary"
                            round
                            class="button_login"
                            @click="login('loginFormCheck')"
                            >登 录</el-button
                        >
                    </el-form>
                </div>
            </transition>
        </div>

        <!--页面底部版权标识-->
        <el-footer class="footer"
            >版权所有 © 2022 享智实验室安全管理平台</el-footer
        >
    </div>
</template>

<script>
export default {
    data() {
        //validate开头为验证是否为空的函数
        //第一个参数rule作用未知，不可删
        //data: () => ({ show: false });
        var validatePassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };
        var validateUsername = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入您的学号"));
            } else {
                callback();
            }
        };
        return {
            show: false,
            //登录表单
            loginForm: {
                username: "",
                password: "",
            },
            //验证登录表单验证是否未填写内容
            loginFormRules: {
                password: [{ validator: validatePassword, trigger: "blur" }], //验证密码
                username: [{ validator: validateUsername, trigger: "blur" }], //trigger: 'blur'表示失去光标时触发
            },
        };
    },
    mounted() {
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

    created() {
        this.show = !this.show;
    },
    methods: {
        //登录时设备校验
        _isMobile() {
            let flag = navigator.userAgent.match(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            );
            return flag;
        },

        //页面加载完成后表单出现动画
        loginFormZoom() {},

        //登录成功后弹框提示函数
        loginSuccess() {
            this.$notify({
                title: "登录成功",
                message: "欢迎进入享智实验室安全管理系统",
                type: "success",
            });
        },
        //登录函数
        login(formName) {
            this.$refs[formName].validate(async (valid) => {
                //判断表单数据是否验证成功
                if (valid) {
                    let { data } = await this.$http.post(
                        "/login",
                        this.loginForm
                    );
                    if (data.code) {
                        this.loginSuccess();
                        //服务器返回登录token令牌（保存个人信息）
                        //保存在浏览器缓存空间
                        sessionStorage.setItem("token", data.data.tokenValue);
                        //在浏览器中保存登录名
                        sessionStorage.setItem(
                            "username",
                            this.loginForm.username
                        );
                        sessionStorage.setItem(
                            "password",
                            this.loginForm.password
                        );

                        //将token信息放到请求头中
                        //this.$setToken();
                        //跳转到后台管理
                        this.$router.push("/home");
                    } else {
                        this.$message.error("账号或密码错误");
                        this.$refs[formName].resetFields(); //登录失败后重置表单
                    }
                } else {
                    this.$message.error("请填写合法的表单内容");
                    this.$refs[formName].resetFields();
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="less" scoped>
.login_container {
    //background-color: #409eff;
    //height: 100%;
    background-image: url("../assets/system-background.jpg");
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed; /*关键*/
    background-position: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    zoom: 1;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.login_box {
    width: 450px;
    height: 380px;
    background-color: #ebeef5bb;
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
}
.login_form {
    transform: translate(-10%, 80%);
}
.button_login {
    width: 50%;
    transform: translate(70%, 30%);
    font-size: 15px;
}

.footer {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    line-height: 60px; /*设置文字内容垂直居中，与height的高度相同*/
    text-align: center; /*设置文字内容居中在中间*/
    margin: auto auto 20px;
}

.welcome_title {
    width: 100%;
    text-align: center; /*设置文字内容居中在中间*/
    transform: translate(0, 100px);
    font-size: 25px;
    color: #606266;
}
</style>
