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
            <el-breadcrumb-item>管理员</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <!--搜索、添加用户-->
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input
                        placeholder="请输入搜索内容"
                        class="input-with-select"
                        v-model="adminSearchQuery"
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
                        >添加管理员</el-button
                    >
                </el-col>
            </el-row>
            <!--渲染列表-->
            <el-table :data="adminList" border stripe>
                <el-table-column type="index" label="#"></el-table-column>
                <el-table-column
                    label="用户名"
                    prop="username"
                ></el-table-column>
                <el-table-column label="所属团队" prop="team"></el-table-column>
                <el-table-column label="身份" prop="roleId">{{
                    (roleId = 1 ? "管理员" : "普通成员")
                }}</el-table-column>
                <el-table-column label="姓名" prop="name"></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column
                    label="联系方式"
                    prop="phoneNumber"
                ></el-table-column>
                <el-table-column label="激活状态">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.isNotFrozen"
                            @change="adminStateChange(scope.row)"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="190px">
                    <el-tooltip
                        effect="dark"
                        content="编辑管理员信息"
                        placement="top"
                        :enterable="false"
                    >
                        <el-button
                            type="primary"
                            icon="el-icon-edit"
                            size="mini"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip
                        effect="dark"
                        content="删除管理员"
                        placement="top"
                        :enterable="false"
                        ><el-button
                            type="danger"
                            icon="el-icon-delete"
                            size="mini"
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
                </el-table-column>
            </el-table>
        </el-card>

        <!--添加用户对话框-->
        <el-dialog
            title="添加管理员"
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
                    <el-input :disabled="true" placeholder="管理员"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addUser()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            adminList: [],
            adminSearchQuery: "", //搜索用户绑定值
            addDialogVisible: false, //添加用户可见绑定值
            //添加用户表单
            addUserForm: {
                username: "",
                password: "",
                roleId: 1,
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
                ],
            },
        };
    },
    created() {
        this.getAdminList();
    },
    methods: {
        //获取管理员列表
        async getAdminList() {
            const { data: res } = await this.$http.get("user/listadmin");
            if (!res.code) {
                this.$alert(res.message, "错误", {
                    confirmButtonText: "确定",
                    type: "danger",
                    callback: (action) => {},
                });
            }
            this.adminList = res.data;
            //this.switchOpen=res.data.isFrozen
            //console.log(this.switchOpen)
        },
        //管理员冻结开关函数
        adminStateChange(userInfo) {
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
            console.log(this.adminSearchQuery);
            let url = "user/info/username/" + this.adminSearchQuery;
            const { data: res } = await this.$http.get(url);
            let arr = [];
            arr[0] = res.data;
            this.adminList = arr;
            console.log(this.adminList);
            if (res.data == null) {
                this.$alert("该用户不存在！", "错误", {
                    confirmButtonText: "确定",
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
                console.log(this.addUserForm);
                //await this.$http.get("user/add", { params: this.addUserForm });
                await this.$http.get("user/add", this.addUserForm ,{emulateJSON: true});
            });
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
