<template>
    <html>
        <body>
            <!-- 遮挡页面 -->
            <div class="loading">
                <div class="loadTip">
                    页面正在加载，请稍后...
                    <br>
                    若长时间未加载成功请刷新页面。
                </div>
                
                <div class="pic">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>

            <div class="canvas" style="opacity: 0.2">
                <iframe
                    frameborder="0"
                    src="js/bg.html"
                    style="width: 100%; height: 100%"
                ></iframe>
            </div>

            <div class="head">
                <h1>安全学院数字孪生大屏</h1>
                <div class="weather"><span id="showTime"></span></div>
            </div>
            <div class="mainbox">
                <ul class="clearfix">
                    <li>
                        <div class="boxall">
                            <div class="alltitle">数据总览</div>
                            <div class="sycm">
                                <ul class="clearfix">
                                    <li>
                                        <h2>10000</h2>
                                        <span>系统访问量</span>
                                    </li>
                                    <li>
                                        <h2>300</h2>
                                        <span>安全房间</span>
                                    </li>
                                    <li>
                                        <h2>300</h2>
                                        <span>危险房间</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="boxfoot"></div>
                        </div>

                        <div class="boxall">
                            <div class="alltitle alltitle2">安全监测</div>

                            <ul class="tabnav">
                                <li style="height: auto">
                                    <div class="gdhead">
                                        <span>楼层</span><span>房间号</span
                                        ><span>危险等级</span><span>人数</span>
                                        <span>负责人</span>
                                        <span>时间</span>
                                    </div>
                                    <div
                                        class="scrollDiv"
                                        style="height: 1.63rem"
                                    >
                                        <ul class="smjl">
                                            <li>
                                                <span>一楼</span><span>101</span
                                                ><span>特别</span><span>10</span
                                                ><span>张彬</span><span></span>
                                            </li>
                                            <li>
                                                <span>一楼</span><span>101</span
                                                ><span>特别</span><span>10</span
                                                ><span>张彬</span><span></span>
                                            </li>
                                            <li>
                                                <span>一楼</span><span>101</span
                                                ><span>特别</span><span>10</span
                                                ><span>张彬</span><span></span>
                                            </li>
                                            <li>
                                                <span>一楼</span><span>101</span
                                                ><span>特别</span><span>10</span
                                                ><span>张彬</span><span></span>
                                            </li>
                                            <li>
                                                <span>一楼</span><span>101</span
                                                ><span>特别</span><span>10</span
                                                ><span>张彬</span><span></span>
                                            </li>
                                            <li>
                                                <span>一楼</span><span>101</span
                                                ><span>特别</span><span>10</span
                                                ><span>张彬</span><span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                            <div class="boxfoot"></div>
                        </div>

                        <div class="boxall">
                            <div class="alltitle">人员行为安全统计</div>
                            <div class="people-security" id="echart5"></div>
                            <div class="boxfoot"></div>
                        </div>
                    </li>
                    <li>
                        <div class="map">
                            <div class="map1">
                                <img src="./images/lbx.png" />
                            </div>
                            <div class="map2">
                                <img src="./images/jt.png" />
                            </div>
                            <div class="map3">
                                <img src="./images/map.png" />
                            </div>

                            <!--此处为安全学院楼模型-->
                            <div class="map4" id="securityModel"></div>
                            <!---->
                        </div>
                        <div class="boxall">
                            <div class="alltitle">楼内人数</div>
                            <div
                                class="allnav"
                                style="height: 1.86rem"
                                id="echart4"
                            ></div>
                            <div class="boxfoot"></div>
                        </div>
                    </li>
                    <li>
                        <div class="boxall" style="height: 6.3rem">
                            <div class="alltitle">仪表盘</div>

                            <div class="alltitle2">
                                人员进出分析
                                <div class="titabs">
                                    <a href="" class="active jsy1">标签1</a
                                    ><a class="jsy2" href="">标签2</a
                                    ><a class="jsy3" href="">标签3</a>
                                </div>
                            </div>
                            <div
                                class="allnav2"
                                id="echart21"
                                style="height: 22%"
                            ></div>
                            <div class="alltitle2">
                                风险等级变化
                                <div class="titabs">
                                    <a href="" class="active tr01">标签1</a
                                    ><a class="tr02" href="">标签2 </a
                                    ><a class="tr03" href="">标签3</a>
                                </div>
                            </div>
                            <div
                                class="allnav2"
                                id="echart22"
                                style="height: 22%"
                            ></div>

                            <div class="alltitle2">仪表盘</div>
                            <div class="allnav2" style="height: 22%">
                                <div class="feng" id="feng01"></div>
                                <div class="feng" id="feng02"></div>
                                <div class="feng" id="feng03"></div>
                            </div>

                            <div class="boxfoot"></div>
                        </div>

                        <div class="boxall" style="height: 2.6rem">
                            <div class="alltitle">摄像头</div>

                            <div class="allnav sxt">
                                <ul>
                                    <li class=""><a href="">启动</a></li>
                                    <li class=""><a href="">启动</a></li>
                                </ul>
                            </div>

                            <div class="boxfoot"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="back"></div>
        </body>
    </html>
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
//import * as $ from "jquery";
//import * as echarts from "echarts";
//import Limarquee from "limarquee";
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
            container: null,

            option1: {},
            option: {},
            t: null,

            dashboard1: null, //预加载
            beginEcharts: false,
        };
    },
    created() {
        
        $(document).ready(function () {
            var whei = $(window).width();
            $("html").css({ fontSize: whei / 20 });
            $(window).resize(function () {
                var whei = $(window).width();
                $("html").css({ fontSize: whei / 20 });
            });
        });
    },

    methods: {
        //顶部时间
        time() {
            let dt = new Date();
            var y = dt.getFullYear();
            var mt = dt.getMonth() + 1;
            var day = dt.getDate();
            var h = dt.getHours(); //获取时
            var m = dt.getMinutes(); //获取分
            var s = dt.getSeconds(); //获取秒
            //document.getElementsByClassName("showDangerTime").innerHTML = h + ":" + m;
            document.getElementById("showTime").innerHTML =
                y + "年" + mt + "月" + day + "日" + " " + h + ":" + m + ":" + s;
            this.t = setTimeout(this.time, 1000); //设定定时器，循环运行
        },

        init() {
            this.container = document.getElementById("securityModel");

            //console.log(this.container.clientHeight);
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
                new THREE.WebGLRenderer({ alpha: true })
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
            //myModel.scene.add(this.axesHelper);
            //灯光
            myModel.scene.add(this.ambientLight1);
            //摄像机
            myModel.camera.position.set(9.6, -2.4, 8.4);
            //渲染器
            myModel.renderer.setSize(
                this.container.clientWidth,
                this.container.clientHeight
            );
            myModel.renderer.render(myModel.scene, myModel.camera);
            //挂载渲染结果到HTML元素
            this.container.appendChild(myModel.renderer.domElement);
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
                    model.position.set(0, -2, 0);
                    model.rotation.z = -Math.PI / 2;
                    this.myModel.scene.add(model);
                },
                (xhr) => {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                (error) => {
                    console.error(error);
                }
            );
            //加载材质

            //第一步注释场景背景色,否则会影响背景设置透明
            //this.background = new THREE.Color(0xa0a0a0);
            //设置alpha透明系数
            //THREE.WebGLRenderer({ alpha: true });
            //this.renderer.setClearAlpha(0);

            //this.background = this.textureLoader.load("images/bg.jpg");
            //this.myModel.scene.background = this.background;
        },
        effectCompose(models) {
            ///////轮廓高亮显示////////
            // RenderPass这个通道会渲染场景，但不会将渲染结果输出到屏幕上
            const renderPass = new RenderPass(
                this.myModel.scene,
                this.myModel.camera
            );
            const outlinePass = new OutlinePass(
                new THREE.Vector2(
                    this.container.clientWidth,
                    this.container.clientHeight
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
                this.container.clientWidth,
                this.container.clientHeight
            );
            this.composer.addPass(renderPass);
            // 眩光通道bloomPass插入到composer
            this.composer.addPass(outlinePass);
        },
        render() {
            requestAnimationFrame(this.render);
            //myModel.renderer.render(myModel.scene, myModel.camera);
            this.composer.render();
        },

        echarts_21() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("echart21"));

            this.option1 = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: { type: "shadow" },
                },
                grid: {
                    left: "0%",
                    top: "10px",
                    right: "0%",
                    bottom: "0px",
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: "category",
                        data: [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12",
                        ],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid",
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            interval: 0,
                            //rotate:50,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: "12",
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                        axisLabel: {
                            //formatter: '{value} %'
                            show: true,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: "12",
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid",
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                            },
                        },
                    },
                ],
                series: [
                    {
                        type: "line",
                        data: [
                            5030, 8600, 3000, 7200, 7200, 5130, 10030, 8600,
                            13000, 7200, 9130, 4130,
                        ],

                        itemStyle: {
                            normal: {
                                color: "#37a3ff",
                                opacity: 1,

                                BorderRadius: 3,
                            },
                        },
                    },
                ],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(this.option1);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },
        echarts_22() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("echart22"));

            this.option1 = {
                //  backgroundColor: '#00265f',
                tooltip: {
                    trigger: "axis",
                    axisPointer: { type: "shadow" },
                },
                grid: {
                    left: "0%",
                    top: "5px",
                    right: "0%",
                    bottom: "0px",
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: "category",
                        data: [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12",
                        ],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid",
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            interval: 0,
                            // rotate:50,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: "12",
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                        axisLabel: {
                            //formatter: '{value} %'
                            show: true,
                            textStyle: {
                                color: "rgba(255,255,255,.6)",
                                fontSize: "12",
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid",
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                            },
                        },
                    },
                ],
                series: [
                    {
                        type: "line",
                        data: [
                            7200, 9130, 5030, 8600, 3000, 7200, 4130, 5130,
                            10030, 8600, 13000, 7200,
                        ],

                        itemStyle: {
                            normal: {
                                color: "#37a3ff",
                                opacity: 1,
                                barBorderRadius: 3,
                            },
                        },
                    },
                ],
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(this.option1);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },

        echarts_1() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("feng01"));
            var gauge_value = 66;

            this.option = {
                title: {
                    x: "center",
                    bottom: 10,
                    //text: '风向',
                    subtext: "风向",
                    textStyle: {
                        fontWeight: "normal",
                        fontSize: 18,
                        color: "#fff",
                    },
                },
                tooltip: {
                    show: true,
                },
                series: [
                    {
                        type: "gauge",
                        radius: "60%",
                        center: ["50%", "55%"],
                        splitNumber: 7, //刻度数量
                        min: 0,
                        max: 70,
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 2,
                                shadowBlur: 0,
                                color: [[1, "#8f8f8f"]],
                            },
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: "#8f8f8f",
                                width: 1,
                            },
                            length: -5,
                            splitNumber: 7,
                        },
                        splitLine: {
                            show: true,
                            length: -5,
                            lineStyle: {
                                color: "rgba(255,255,255,.2)",
                            },
                        },
                        axisLabel: {
                            distance: -25,

                            formatter: function (e) {
                                switch (e + "") {
                                    case "0":
                                        return "N";
                                    case "10":
                                        return "NE";

                                    case "20":
                                        return "E";

                                    case "30":
                                        return "SE";

                                    case "40":
                                        return "S";

                                    case "50":
                                        return "SW";

                                    case "60":
                                        return "W";

                                    case "70":
                                        return "NW";

                                    default:
                                        return e;
                                }
                            },
                            textStyle: {
                                fontSize: 10,
                                color: "rgba(255,255,255,.6)",
                            },
                        },
                        pointer: {
                            //仪表盘指针
                            show: 0,
                        },
                        detail: {
                            show: false,
                        },
                        data: [
                            {
                                name: "",
                                value: 100,
                            },
                        ],
                    },

                    {
                        name: "风向",
                        type: "gauge",
                        startAngle: 225,
                        endAngle: -45,
                        radius: "56%",
                        center: ["50%", "55%"], // 默认全局居中

                        min: 0,
                        max: 100,

                        axisLine: {
                            show: false,
                            lineStyle: {
                                width: 5,
                                shadowBlur: 0,
                                color: [[1, "#82b440"]],
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                            length: 20,
                        },

                        axisLabel: {
                            show: false,
                        },
                        pointer: {
                            show: true,
                            length: "65%",
                            width: 4,
                        },
                        detail: {
                            show: false,
                            offsetCenter: [0, 0],
                            textStyle: {
                                fontSize: 10,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#82b440",
                            },
                        },
                        data: [
                            {
                                name: "",
                                value: Math.floor(gauge_value),
                            },
                        ],
                    },
                ],
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(this.option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },
        echarts_2() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("feng02"));
            var gauge_value = 30;
            this.option = {
                title: {
                    x: "center",
                    bottom: 0,
                    text: gauge_value,
                    subtext: "风速km/h",
                    textStyle: {
                        fontWeight: "normal",
                        fontSize: 18,
                        color: "#fff",
                    },
                },
                tooltip: {
                    show: true,
                },
                series: [
                    {
                        type: "gauge",
                        radius: "60%",
                        center: ["50%", "55%"],
                        splitNumber: 7, //刻度数量
                        min: 0,
                        max: 70,
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 2,
                                shadowBlur: 0,
                                color: [[1, "#8f8f8f"]],
                            },
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: "#8f8f8f",
                                width: 1,
                            },
                            length: -5,
                            splitNumber: 7,
                        },
                        splitLine: {
                            show: true,
                            length: -5,
                            lineStyle: {
                                color: "rgba(255,255,255,.2)",
                            },
                        },
                        axisLabel: {
                            distance: -15,

                            textStyle: {
                                fontSize: 10,
                                color: "rgba(255,255,255,.6)",
                            },
                        },
                        pointer: {
                            //仪表盘指针
                            show: 0,
                        },
                        detail: {
                            show: false,
                        },
                        data: [
                            {
                                name: "",
                                value: 100,
                            },
                        ],
                    },

                    {
                        name: "风向",
                        type: "gauge",
                        startAngle: 225,
                        endAngle: -45,
                        radius: "56%",
                        center: ["50%", "55%"], // 默认全局居中

                        min: 0,
                        max: 70,

                        axisLine: {
                            show: false,
                            lineStyle: {
                                width: 5,
                                shadowBlur: 0,
                                color: [[1, "#2ea7ff"]],
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                            length: 20,
                        },

                        axisLabel: {
                            show: false,
                        },
                        pointer: {
                            show: true,
                            length: "65%",
                            width: 4,
                        },
                        detail: {
                            show: false,
                            offsetCenter: [0, 0],
                            textStyle: {
                                fontSize: 10,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#2ea7ff",
                            },
                        },
                        data: [
                            {
                                name: "",
                                value: Math.floor(gauge_value),
                            },
                        ],
                    },
                ],
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(this.option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },
        echarts_3() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("feng03"));
            var gauge_value = 17;

            this.option = {
                title: {
                    x: "center",
                    bottom: 0,
                    text: gauge_value,
                    subtext: "降雨量ML",
                    textStyle: {
                        fontWeight: "normal",
                        fontSize: 18,
                        color: "#fff",
                    },
                },
                tooltip: {
                    show: true,
                },
                series: [
                    {
                        type: "gauge",
                        radius: "60%",
                        center: ["50%", "55%"],
                        splitNumber: 10, //刻度数量
                        min: 0,
                        max: 100,
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 2,
                                shadowBlur: 0,
                                color: [[1, "#8f8f8f"]],
                            },
                        },
                        axisTick: {
                            show: false,
                            lineStyle: {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                            },
                            length: -5,
                            splitNumber: 7,
                        },
                        splitLine: {
                            show: true,
                            length: -5,
                            lineStyle: {
                                color: "rgba(255,255,255,.2)",
                            },
                        },
                        axisLabel: {
                            distance: -15,
                            textStyle: {
                                fontSize: 10,
                                color: "rgba(255,255,255,.6)",
                            },
                        },
                        pointer: {
                            //仪表盘指针
                            show: 0,
                        },
                        detail: {
                            show: false,
                        },
                        data: [
                            {
                                name: "",
                                value: 100,
                            },
                        ],
                    },

                    {
                        name: "风向",
                        type: "gauge",
                        startAngle: 225,
                        endAngle: -45,
                        radius: "56%",
                        center: ["50%", "55%"], // 默认全局居中

                        min: 0,
                        max: 100,

                        axisLine: {
                            show: false,
                            lineStyle: {
                                width: 5,
                                shadowBlur: 0,
                                color: [[1, "#ff7109"]],
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                            length: 20,
                        },

                        axisLabel: {
                            show: false,
                        },
                        pointer: {
                            show: true,
                            length: "65%",
                            width: 4,
                        },
                        detail: {
                            show: false,
                            offsetCenter: [0, 0],
                            textStyle: {
                                fontSize: 10,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#ff7109",
                            },
                        },
                        data: [
                            {
                                name: "",
                                value: Math.floor(gauge_value),
                            },
                        ],
                    },
                ],
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(this.option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },
        echarts_4() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("echart4"));

            this.option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: { type: "shadow" },
                },
                grid: {
                    top: "20%",
                    right: "50",
                    bottom: "20",
                    left: "30",
                },
                legend: {
                    data: ["一楼", "二楼", "三楼", "四楼"],
                    right: "center",
                    width: "100%",
                    textStyle: {
                        color: "rgba(255,255,255,.5)",
                    },
                    itemWidth: 12,
                    itemHeight: 10,
                },

                xAxis: [
                    {
                        type: "category",
                        data: ["一楼", "二楼", "三楼", "四楼", "五楼"],
                        axisLine: { show: false },
                        axisLabel: {
                            textStyle: {
                                fontSize: 13,
                                color: "rgba(255,255,255,.5)",
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                        // "name": "单位万",

                        axisTick: { show: false },
                        splitLine: { show: false },
                        axisLine: { show: false },
                        axisLabel: {
                            show: true,
                            fontSize: 14,
                            color: "rgba(255,255,255,.5)",
                        },
                        axisLine: {
                            min: 0,
                            max: 10,
                            show: false,
                        }, //左线色
                    },
                    {
                        type: "value",
                        //"name": "增速",
                        show: true,
                        axisLabel: {
                            formatter: "{value} %",
                            fontSize: 14,
                            color: "rgba(255,255,255,.5)",
                        },
                        axisTick: { show: false },
                        splitNumber: 3,
                        axisLine: { show: false }, //右线色
                        splitLine: {
                            lineStyle: { color: "rgba(255,255,255,.05)" },
                        }, //x轴线
                    },
                ],
                series: [
                    {
                        name: "本科生",
                        type: "bar",
                        data: [10, 20, 30, 40, 50],
                        barWidth: "10%",
                        itemStyle: {
                            normal: {
                                barBorderRadius: 15,
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#8bd46e",
                                        },
                                        {
                                            offset: 1,
                                            color: "#09bcb7",
                                        },
                                    ]
                                ),
                            },
                        },
                        barGap: "0.2",
                    },
                    {
                        name: "研究生",
                        type: "bar",
                        data: [30, 40, 50, 50, 50],
                        barWidth: "10%",
                        itemStyle: {
                            normal: {
                                barBorderRadius: 15,
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#248ff7",
                                        },
                                        {
                                            offset: 1,
                                            color: "#6851f1",
                                        },
                                    ]
                                ),
                            },
                        },
                        barGap: "0.2",
                    },
                    {
                        name: "教职工",
                        type: "bar",
                        data: [10, 20, 30, 40, 50],
                        barWidth: "10%",
                        itemStyle: {
                            normal: {
                                barBorderRadius: 15,
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0,
                                            color: "#fccb05",
                                        },
                                        {
                                            offset: 1,
                                            color: "#f5804d",
                                        },
                                    ]
                                ),
                            },
                        },
                        barGap: "0.2",
                    },
                    {
                        name: "增幅",
                        type: "line",
                        yAxisIndex: 1,

                        data: [3, 1, 5, 2.3, 1],
                        lineStyle: {
                            normal: {
                                width: 2,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: "#3496f8",
                            },
                        },
                        //   "smooth": true,
                        symbolSize: 0,
                    },
                ],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(this.option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },
        echarts_5() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("echart5"));
            let test = document.getElementById("echart5");
            console.log(test.clientHeight);
            var lightBlue = {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: "rgba(41, 121, 255, 1)",
                    },
                    {
                        offset: 1,
                        color: "rgba(0, 192, 255, 1)",
                    },
                ],
                globalCoord: false,
            };

            this.option = {
                tooltip: {
                    show: false,
                },
                grid: {
                    top: "0%",
                    left: "100",
                    right: "50",
                    bottom: "0%",
                },
                xAxis: {
                    min: 0,
                    //max: 12000,
                    splitLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                },
                yAxis: {
                    data: [
                        "待归还药品数",
                        "已借药品数量",
                        "危险实验数量",
                        "风险综合评估",
                        "服务器内存",
                        "当前在线人数",
                    ],
                    //offset: 15,
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 14,
                    },
                },
                series: [
                    {
                        type: "bar",
                        label: {
                            show: true,
                            zlevel: 10000,
                            position: "right",
                            padding: 6,
                            color: "#4e84a1",
                            fontSize: 14,

                            formatter: "{c}",
                        },
                        itemStyle: {
                            barBorderRadius: 25,
                            color: "#3facff",
                        },
                        barWidth: "10",

                        data: [20, 100, 50, 80, 60, 10],
                        z: 6,
                    },
                ],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(this.option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        },
        initLimarquee() {
            this.limarquee = new Limarquee(".scrollDiv");
            this.limarquee.render({
                direction: "up", // 滚动方向，可选 left / right / up / down
                loop: -1, // 循环次数，-1 为无限循环
                scrolldelay: 0, // 每次重复之前的延迟
                scrollamount: 50, // 滚动速度，越大越快
                circular: true, // 无缝滚动，如果为 false， 则和 marquee 效果一样
                drag: true, // 鼠标可拖动
                runshort: true, // 内容不足是否滚动
                hoverstop: true, // 鼠标悬停暂停
                xml: false, // 加载 xml 文件
                inverthover: false, // 反向，即默认不滚动，鼠 标悬停滚动
            });
            console.log(this.limarquee);
        },
        show() {
            this.$notify({
          title: '成功',
          message: '组件加载成功！请拖动地球查看学院模型。',
          type: 'success'
        });
            this.echarts_21();
            this.echarts_22();
            this.echarts_1();
            this.echarts_2();
            this.echarts_3();
            this.echarts_4();
            this.echarts_5();
            this.init();
            this.config(this.myModel);
            this.load();
            //this.effectCompose(this.models);
            this.render();
        },
    },

    mounted() {
        document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                $(".loading").delay(500).fadeOut();
            }
        };
        
        setTimeout(() => {
            this.show();
        }, 1200);
        $(function () {
            $(".scrollDiv").liMarquee({
                direction: "up",
                scrollamount: 30,
                runshort: false,
            });
        });
        //this.initLimarquee();
        //最后运行时间加载
        this.t = setTimeout(this.time(), 1000); //开始运行
        clearTimeout(this.t); //清除定时器
        this.time();
    },
};
</script>
<style lang="less" scoped>
@import "./css/common.css";
</style>