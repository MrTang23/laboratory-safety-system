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
            <div id="container" >121212</div>
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
            container:null
        };
    },
    created() {

    },

    methods: {
        init() {
            this.container = document.getElementById("container");
            container.style.setProperty('--threeHeight', "600px");
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
                    this.container.clientWidth / this.container.clientHeight,
                    0.01,
                    10000
                ),
                new THREE.WebGLRenderer({ antialias: true })
            );
            this.gltfLoader = new GLTFLoader();
            this.fontLoader = new FontLoader();
            this.textureLoader = new THREE.TextureLoader();
            this.ambientLight1 = new THREE.AmbientLight(0xffffff, 3);
            this.axesHelper = new THREE.AxesHelper(1000);
            this.controls = new OrbitControls(
                this.myModel.camera,
                this.myModel.renderer.domElement
            );
            //创建效果组合器对象，可以在该对象上添加后期处理通道，通过配置该对象，使它可以渲染我们的场景，并应用额外的后期处理步骤，在render循环中，使用EffectComposer渲染场景、应用通道，并输出结果。
            this.composer = new EffectComposer(this.myModel.renderer);
        },
        config(myModel) {
            //辅助坐标轴
            myModel.scene.add(this.axesHelper);
            //灯光
            myModel.scene.add(this.ambientLight1);
            //摄像机
            myModel.camera.position.set(20, 10, 10);
            //渲染器
            myModel.renderer.setSize(this.container.clientWidth,this.container.clientHeight);
            myModel.renderer.render(myModel.scene, myModel.camera);
            //挂载渲染结果到HTML元素
            container.appendChild(myModel.renderer.domElement);
            //轨道控制器添加监听
            this.controls.addEventListener("change", function () {
                myModel.renderer.render(myModel.scene, myModel.camera);
            });
        },
        load() {
            var model1, model2, model3, model4, model5;
            //加载模型
            this.gltfLoader.load(
                "model/scene2.gltf",
                (gltf) => {
                    let model = gltf.scene;
                    model.scale.set(0.0002, 0.0002, 0.0002);
                    //model1 = model.clone();
                    //model2 = model.clone();
                    //model3 = model.clone();
                    //model4 = model.clone();
                    model5 = model.clone();
                    //model1.position.set(6, 0, 6);
                    //model2.position.set(6, 3, 6);
                    //model3.position.set(6, 6, 6);
                    //model4.position.set(6, 9, 6);
                    model5.position.set(0, 0, 0);
                    model5.rotation.z = -Math.PI/2
                    //model5.rotation.x=-Math.PI
                    //this.myModel.scene.add(model1);
                    //this.myModel.scene.add(model2);
                    //this.myModel.scene.add(model3);
                    //this.myModel.scene.add(model4);
                    this.myModel.scene.add(model5);
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
            this.fontLoader.load(
                "static/STFangsong_Regular.json",
                (font) => {
                    var txtGeo = new TextGeometry("文字文字", {
                        font: font,
                        size: 2,
                        height: 0.1,
                    });
                    var txtMater = new THREE.MeshBasicMaterial({
                        color: 0xffffff,
                    });
                    var txtMesh = new THREE.Mesh(txtGeo, txtMater);
                    txtMesh.position.set(10, 10, 0);
                    this.myModel.scene.add(txtMesh);
                },
                (xhr) => {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                (error) => {
                    console.log(error);
                }
            );
            //加载材质
            this.background = this.textureLoader.load("static/img/bg.jpeg");
            this.myModel.scene.background = this.background;
        },
        effectCompose(models) {
            ///////轮廓高亮显示////////
            // RenderPass这个通道会渲染场景，但不会将渲染结果输出到屏幕上
            const renderPass = new RenderPass(this.myModel.scene, this.myModel.camera);
            const outlinePass = new OutlinePass(
                new THREE.Vector2(this.container.clientWidth,this.container.clientHeight),
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

            this.composer.setSize(container.clientWidth, container.clientHeight);
            this.composer.addPass(renderPass);
            // 眩光通道bloomPass插入到composer
            this.composer.addPass(outlinePass);
        },
        render() {
            requestAnimationFrame(this.render);
            //myModel.renderer.render(myModel.scene, myModel.camera);
            this.composer.render();
        },
    },
    mounted() {
        this.init();
        this.config(this.myModel);
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
    #container{
        height: 610px;
        //height:sessionStorage.getItem("screen-height")-280;
        //width:100px;
    }
}
</style>
