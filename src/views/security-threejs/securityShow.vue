<template>
    <div class="font">
        <el-breadcrumb
            separator-class="el-icon-arrow-right"
            class="breadcrumb-move"
        >
            <el-breadcrumb-item :to="{ path: '/welcome' }"
                >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item>数字孪生大屏</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <el-row>
                <el-col :span="8"
                    ><div class="grid-content bg-purple">
                        <el-button type="primary" @click="toFullScreen()"
                            >点击进入大屏</el-button
                        >
                    </div></el-col
                >
                <el-col :span="11"
                    ><div class="grid-content bg-purple-light down-card">
                        下面卡片为模型预览，需要鼠标预先拖动
                    </div></el-col
                >
                <el-col :span="8"
                    ><div class="grid-content bg-purple"></div
                ></el-col>
            </el-row>
        </el-card>
        <el-card class="box-card">
            
            <div id="container"></div>
        </el-card>
    </div>
</template>
<script>
//import { start } from "./main";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
export default {
    data() {
        return {
            gltfLoader: null,
            fontLoader: null,
            textureLoader: null,
            background: null,
            ambientLight1: null,
            axesHelper: null,
            controls: null,
            composer: null,
            models: [],
            myModel: null,
            myModelAll:null,
            container: null,
            containerAll:null
        };
    },
    created() {},

    methods: {
        toFullScreen() {
            this.$router.push("/BIMshow");
        },
        toSecurity() {
            window.open("/securityScreen/index.html", "_blank");
            //window.open('/securityScreen/index.html','_self')
            //window.open('/securityScreen/index.html', '_blank', 'width=' + (window.screen.availWidth - 10) + ',height=' + (window.screen.availHeight - 70) + ', top = 0, left = 0, status=no')

            //window.open("/securityScreen/index.html", "_blank", "fullscreen=1");
        },
        init(container) {
            container.style.setProperty("--threeHeight", "600px");
            console.log(container.clientHeight);
            class MyModel {
                constructor(scene, camera, renderer) {
                    this.scene = scene;
                    this.camera = camera;
                    this.renderer = renderer;
                }
            }
            this.myModel = new MyModel(
                new THREE.Scene(),
                new THREE.PerspectiveCamera(
                    75,
                    //window.innerWidth / window.innerHeight,
                    container.clientWidth / container.clientHeight,
                    0.01,
                    10000
                ),
                new THREE.WebGLRenderer({ antialias: true })
            );
            this.gltfLoader = new GLTFLoader();
            this.fontLoader = new FontLoader();
            this.textureLoader = new THREE.TextureLoader();
            this.ambientLight1 = new THREE.AmbientLight(0xffffff, 3);
            //this.axesHelper = new THREE.AxesHelper(1000);
            this.controls = new OrbitControls(
                this.myModel.camera,
                this.myModel.renderer.domElement
            );
            this.controls.autoRotate = true; // 是否自动旋转
            //创建效果组合器对象，可以在该对象上添加后期处理通道，通过配置该对象，使它可以渲染我们的场景，并应用额外的后期处理步骤，在render循环中，使用EffectComposer渲染场景、应用通道，并输出结果。
            this.composer = new EffectComposer(this.myModel.renderer);
        },
        config(myModel,container) {
            //辅助坐标轴
            myModel.scene.add(this.axesHelper);
            //灯光
            myModel.scene.add(this.ambientLight1);
            //摄像机
            myModel.camera.position.set(20, 10, 10);
            //渲染器
            myModel.renderer.setSize(
                container.clientWidth,
                container.clientHeight
            );
            myModel.renderer.render(myModel.scene, myModel.camera);
            //挂载渲染结果到HTML元素
            container.appendChild(myModel.renderer.domElement);
            //轨道控制器添加监听
            this.controls.addEventListener("change", function () {
                myModel.renderer.render(myModel.scene, myModel.camera);
            });
        },
        initAll(container) {
            container.style.setProperty("--threeHeight", "600px");
            console.log(container.clientHeight);
            class MyModel {
                constructor(scene, camera, renderer) {
                    this.scene = scene;
                    this.camera = camera;
                    this.renderer = renderer;
                }
            }
            this.myModelAll = new MyModel(
                new THREE.Scene(),
                new THREE.PerspectiveCamera(
                    75,
                    //window.innerWidth / window.innerHeight,
                    container.clientWidth / container.clientHeight,
                    0.01,
                    10000
                ),
                new THREE.WebGLRenderer({ antialias: true })
            );
            this.gltfLoader = new GLTFLoader();
            this.fontLoader = new FontLoader();
            this.textureLoader = new THREE.TextureLoader();
            this.ambientLight1 = new THREE.AmbientLight(0xffffff, 3);
            //this.axesHelper = new THREE.AxesHelper(1000);
            this.controls = new OrbitControls(
                this.myModel.camera,
                this.myModel.renderer.domElement
            );
            this.controls.autoRotate = true; // 是否自动旋转
            //创建效果组合器对象，可以在该对象上添加后期处理通道，通过配置该对象，使它可以渲染我们的场景，并应用额外的后期处理步骤，在render循环中，使用EffectComposer渲染场景、应用通道，并输出结果。
            this.composer = new EffectComposer(this.myModel.renderer);
        },
        
        configAll(myModel,container) {
            //辅助坐标轴
            myModel.scene.add(this.axesHelper);
            //灯光
            myModel.scene.add(this.ambientLight1);
            //摄像机
            myModel.camera.position.set(20, 10, 10);
            //渲染器
            myModel.renderer.setSize(
                container.clientWidth,
                container.clientHeight
            );
            myModel.renderer.render(myModel.scene, myModel.camera);
            //挂载渲染结果到HTML元素
            containerAll.appendChild(myModel.renderer.domElement);
            //轨道控制器添加监听
            this.controls.addEventListener("change", function () {
                myModel.renderer.render(myModel.scene, myModel.camera);
            });
        },
        load() {
            var model1, model2, model3, model4, model5;
            //加载模型
            this.gltfLoader.load(
                "model/f1.gltf",
                (gltf) => {
                    let model = gltf.scene;
                    model.scale.set(0.0002, 0.0002, 0.0002);
                    model1 = model.clone();
                    model2 = model.clone();
                    model3 = model.clone();
                    model4 = model.clone();
                    model5 = model.clone();
                    model1.position.set(6, 0, 6);
                    model2.position.set(6, 3, 6);
                    model3.position.set(6, 6, 6);
                    model4.position.set(6, 9, 6);
                    model5.position.set(6,12,6);
                    
                    this.myModel.scene.add(model1);
                    this.myModel.scene.add(model2);
                    this.myModel.scene.add(model3);
                    this.myModel.scene.add(model4);
                    this.myModel.scene.add(model5);
                    this.models.push(model1, model2, model3);
                },
                (xhr) => {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                (error) => {
                    console.error(error);
                }
            );
            //加载字体

            //加载材质
            //this.background = this.textureLoader.load("images/bg.jpg");
            //this.myModel.scene.background = this.background;
        },
        loadAll() {
            var model1, model2, model3, model4, model5;
            //加载模型
            this.gltfLoader.load(
                "model/scene2.gltf",
                (gltf) => {
                    let model = gltf.scene;
                    model.scale.set(0.0002, 0.0002, 0.0002);

                    model.position.set(0,0,0);
                    this.myModel.scene.add(model);
                    //this.models.push(model1, model2, model3);
                },
                (xhr) => {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                (error) => {
                    console.error(error);
                }
            );
            //加载字体

            //加载材质
            //this.background = this.textureLoader.load("images/bg.jpg");
            //this.myModel.scene.background = this.background;
        },
        effectCompose(models,container) {
            ///////轮廓高亮显示////////
            // RenderPass这个通道会渲染场景，但不会将渲染结果输出到屏幕上
            const renderPass = new RenderPass(
                this.myModel.scene,
                this.myModel.camera
            );
            const outlinePass = new OutlinePass(
                new THREE.Vector2(
                    container.clientWidth,
                    container.clientHeight
                ),
                this.myModel.scene,
                this.myModel.camera,
                this.models
            );
            outlinePass.renderToScreen = true;
            outlinePass.edgeStrength = 3; //粗
            outlinePass.edgeGlow = 2; //发光
            outlinePass.edgeThickness = 2; //光晕粗
            outlinePass.pulsePeriod = 1; //闪烁
            outlinePass.usePatternTexture = false; //是否使用贴图
            outlinePass.visibleEdgeColor.set("yellow"); // 设置显示的颜色
            outlinePass.hiddenEdgeColor.set("white"); // 设置隐藏的颜色

            this.composer.setSize(
                container.clientWidth,
                container.clientHeight
            );
            this.composer.addPass(renderPass);
            // 眩光通道bloomPass插入到composer
            this.composer.addPass(outlinePass);
        },
        render() {
            requestAnimationFrame(this.render);
            //this.controls.updated();
            //myModel.renderer.render(myModel.scene, myModel.camera);
            this.composer.render();
        },
    },
    mounted() {
        this.container=document.getElementById("container")
        this.containerAll=document.getElementById("containerAll")
        this.init(this.container);
        this.config(this.myModel,this.container);
        this.load();
        //this.effectCompose(this.models);
        this.render();
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
    .down-card {
        font-size: 20px;
    }
    .building{
        width: 50%;
        height:500px
    }
    .floor{
        width: 50%;
    }

        
    
    #container {
        height: 480px;
        //height:sessionStorage.getItem("screen-height")-280;
        //width:100px;
    }
}
</style>
