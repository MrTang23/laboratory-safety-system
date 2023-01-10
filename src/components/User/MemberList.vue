<template>
    <div class="font">
        <el-breadcrumb
            separator-class="el-icon-arrow-right"
            class="breadcrumb-move"
        >
            <el-breadcrumb-item :to="{ path: '/welcome' }"
                >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item>团队成员管理</el-breadcrumb-item>
            <el-breadcrumb-item>普通成员</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <!--搜索、添加用户-->
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input
                        placeholder="请输入搜索内容"
                        class="input-with-select"
                        v-model="memberSearchQuery"
                    >
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                            @click="searchByUsername()"
                        ></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addDialogVisible = true"
                        >添加普通成员</el-button
                    >
                </el-col>
            </el-row>
            <!--渲染列表-->
            <el-table :data="memberList" border stripe :max-height="this.screenHeight">
                <el-table-column type="index" label="#"></el-table-column>
                <el-table-column
                    label="用户名"
                    prop="username"
                    width="95px"
                ></el-table-column>
                <el-table-column
                    label="所属团队"
                    prop="team"
                    width="170px"
                ></el-table-column>
                <el-table-column label="身份" prop="roleId" width="80px">
                    <template slot-scope="scope">
                        {{ roleIdTurn(scope.row) }}
                    </template>
                </el-table-column>
                <el-table-column
                    label="姓名"
                    prop="name"
                    width="100px"
                ></el-table-column>
                <el-table-column
                    label="邮箱"
                    prop="email"
                    width="190px"
                ></el-table-column>
                <el-table-column
                    label="联系方式"
                    prop="phoneNumber"
                    width="110px"
                ></el-table-column>
                <el-table-column label="激活状态" width="90px">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.isNotFrozen"
                            @change="memberStateChange(scope.row)"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="190px">
                    <template slot-scope="scope">
                        <el-tooltip
                            effect="dark"
                            content="编辑成员信息"
                            placement="top"
                            :enterable="false"
                        >
                            <el-button
                                type="primary"
                                icon="el-icon-edit"
                                size="mini"
                                @click="updateInfoDialog(scope.row)"
                            ></el-button>
                        </el-tooltip>
                        <el-tooltip
                            effect="dark"
                            content="删除成员"
                            placement="top"
                            :enterable="false"
                            ><el-button
                                type="danger"
                                icon="el-icon-delete"
                                size="mini"
                                @click="deleteUser(scope.row)"
                            ></el-button
                        ></el-tooltip>
                        <el-tooltip
                            effect="dark"
                            content="设置"
                            placement="top"
                            :enterable="false"
                        >
                            <el-button
                                type="warning"
                                icon="el-icon-setting"
                                size="mini"
                            ></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <!--添加用户对话框-->
        <el-dialog
            title="添加普通成员"
            :visible.sync="addDialogVisible"
            width="50%"
        >
            <el-form
                ref="addUserFormRef"
                :model="addUserForm"
                :rules="addUserFormRules"
                label-width="80px"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="addUserForm.username"></el-input>
                </el-form-item>
                <el-form-item label="初始密码" prop="password">
                    <el-input v-model="addUserForm.password"></el-input>
                </el-form-item>
                <el-form-item label="身份" prop="roleId">
                    <el-input
                        :disabled="true"
                        placeholder="普通成员"
                    ></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUser()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="更新成员信息"
            :visible.sync="updateDialogVisible"
            width="50%"
        >
            <el-form
                ref="updateUserInfoRef"
                :model="updateUserForm"
                label-width="80px"
                :rules="updateUserFormRules"
            >
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="updateUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="updateUserForm.email"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="phoneNumber">
                    <el-input v-model="updateUserForm.phoneNumber"></el-input>
                </el-form-item>
                <el-form-item label="团队" prop="team">
                    <el-input v-model="updateUserForm.team"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="updateDialogVisible = false"
                    >取 消</el-button
                >
                <el-button type="primary" @click="updateUserInfoRequest()"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            memberList: [],
            updateRowId: "", //超级管理员更新用户信息的用户id
            screenHeight: sessionStorage.getItem("screen-height")-280,//表格绑定最高高度
            memberSearchQuery: "", //搜索用户绑定值
            addDialogVisible: false, //添加用户可见绑定值
            updateDialogVisible: false, //更新成员信息可见绑定值
            updateUserForm: {
                name: "",
                email: "",
                phoneNumber: "",
                team: "",
            },
            updateUserFormRules: {
                name: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur",
                    },
                ],
                email: [
                    {
                        required: true,
                        validator: this.validateEmail,
                        trigger: "blur",
                    },
                ],
                phoneNumber: [
                    {
                        required: true,
                        validator: this.validateMobilePhone,
                        trigger: "blur",
                    },
                ],
            },
            //添加用户表单
            addUserForm: {
                username: "",
                password: "",
                roleId: 2,
            },
            //添加表单校验规则
            addUserFormRules: {
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur",
                    },
                    {
                        min: 3,
                        max: 10,
                        message: "用户名长度在3-10个字符之间",
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "请输入用预设密码",
                        trigger: "blur",
                    },
                    {
                        min: 6,
                        max: 32,
                        message: "密码长度在6-32个字符之间",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    created() {
        this.getMemberList();
    },
    methods: {
        //获取普通成员列表
        async getMemberList() {
            const { data: res } = await this.$http.get("user/listmember");
            if (!res.code) {
                this.$alert(res.message, "错误", {
                    confirmButtonText: "确定",
                    type: "danger",
                    callback: (action) => {},
                });
            }
            this.memberList = res.data;
            //this.switchOpen=res.data.isFrozen
            //console.log(this.switchOpen)
        },
        //冻结开关函数
        memberStateChange(userInfo) {
            let isFrozen, afterIsFrozen;
            if (!userInfo.isNotFrozen) {
                isFrozen = "此操作将冻结该用户，是否继续？";
                afterIsFrozen = "您已成功冻结该用户";
            }
            if (userInfo.isNotFrozen) {
                isFrozen = "此操作将激活该用户，是否继续？";
                afterIsFrozen = "您已成功激活该用户";
            }
            this.$confirm(isFrozen, "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    this.getIsNotFrozen(userInfo, afterIsFrozen);
                })
                .catch(() => {
                    userInfo.isNotFrozen = !userInfo.isNotFrozen;
                    this.$notify.info({
                        title: "提示",
                        message: "取消操作成功",
                    });
                });
        },
        //冻结用户请求
        async getIsNotFrozen(userInfo, afterIsFrozen) {
            let url = "user/toggleFrozen/" + userInfo.id;
            const { data: res } = await this.$http.get(url);
            if (res.code) {
                this.$notify({
                    title: "成功",
                    message: afterIsFrozen,
                    type: "success",
                });
            }
        },
        //搜索用户
        async searchByUsername() {
            let url = "user/search/username/" + this.memberSearchQuery;
            const { data: res } = await this.$http.get(url);
            this.memberList = res.data;
            if (res.data == null) {
                this.$alert("该用户不存在！", "警告", {
                    confirmButtonText: "确定",
                    type: "warning",
                    callback: (action) => {
                        location.reload();
                        this.$router.go(0);
                    },
                });
            }
        },
        addUser() {
            this.$refs.addUserFormRef.validate(async (valid) => {
                if (!valid) {
                    return;
                }
                const { data: res } = await this.$http.post(
                    "user/add",
                    this.addUserForm
                );
                if (!res.code) {
                    this.$alert(res.message, "警告", {
                        confirmButtonText: "确定",
                        type: "warning",
                        callback: (action) => {
                            location.reload();
                            this.$router.go(0);
                        },
                    });
                } else {
                    this.$alert("用户添加成功！", "成功", {
                        confirmButtonText: "确定",
                        type: "success",
                        callback: (action) => {
                            location.reload();
                            this.$router.go(0);
                        },
                    });
                }
            });
        },
        async deleteUser(userInfo) {
            this.$confirm("是否确定删除该用户？", "警告", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    this.deleteUserRequest(userInfo);
                })
                .catch(() => {
                    this.$notify.info({
                        title: "提示",
                        message: "取消操作成功",
                    });
                });
        },
        //删除用户请求
        async deleteUserRequest(userInfo) {
            let url = "user/remove/" + userInfo.id;
            const { data: res } = await this.$http.get(url);
            if (res.code) {
                this.$notify.success({
                    title: "成功",
                    message: "删除用户成功",
                });
                location.reload();
                this.$router.go(0);
            }
        },
        //更新用户信息,将原本的已有信息写入表单
        updateInfoDialog(userInfo) {
            this.updateDialogVisible = true;
            this.updateUserForm.name = userInfo.name;
            this.updateUserForm.email = userInfo.email;
            this.updateUserForm.phoneNumber = userInfo.phoneNumber;
            this.updateUserForm.team = userInfo.team;
            this.updateRowId = userInfo.id;
        },
        //点击确认后发送更新用户信息请求
        async updateUserInfoRequest() {
            let url = "user/update/" + this.updateRowId;
            const { data: res } = await this.$http.post(
                url,
                this.updateUserForm
            );
            if (res.code) {
                this.$alert("更新用户信息成功", "警告", {
                    confirmButtonText: "确定",
                    type: "success",
                    callback: (action) => {
                        location.reload();
                        this.$router.go(0);
                    },
                });
            } else {
                this.$alert(res.message, "错误", {
                    confirmButtonText: "确定",
                    type: "warning",
                    callback: (action) => {
                        location.reload();
                        this.$router.go(0);
                    },
                });
            }
        },
        //更新用户信息的邮箱校验规则
        validateEmail(rule, value, callback) {
            if (value === "") {
                callback(new Error("请填写邮箱"));
            } else {
                if (value !== "") {
                    var reg =
                        /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                    if (!reg.test(value)) {
                        callback(new Error("请输入正确的邮箱格式"));
                    }
                }
                callback();
            }
        },
        //更新用户信息的手机号校验规则
        validateMobilePhone(rule, value, callback) {
            if (value === "") {
                callback(new Error("手机号不可为空"));
            } else {
                if (value !== "") {
                    var reg = /^1[3456789]\d{9}$/;
                    if (!reg.test(value)) {
                        callback(new Error("请输入有效的手机号码"));
                    }
                }
                callback();
            }
        },
        //将原来表格内的roleId数字渲染为具体身份
        roleIdTurn(userInfo) {
            if (userInfo.roleId - 1) {
                return "普通成员";
            } else {
                return "管理员";
            }
        },
    },
};
</script>
<style lang="less" scoped>
.font {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    .box-card {
        width: 100%;
        margin-top: 13px;
        border-radius: 8px;
    }
    .el-card__body,
    .el-main {
        height: 100%;
    }
}
</style>
