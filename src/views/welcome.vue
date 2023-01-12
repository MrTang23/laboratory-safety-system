<template>
    <div class="font">
        <el-breadcrumb
            separator-class="el-icon-arrow-right"
            class="breadcrumb-move"
        >
            <el-breadcrumb-item :to="{ path: '/welcome' }"
                >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item>欢迎</el-breadcrumb-item>

        </el-breadcrumb>
        <el-card class="box-card">
            
        </el-card>

        
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        };
    },
    created() {

    },
    methods: {
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
