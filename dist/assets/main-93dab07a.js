import{_ as l,o as s,a as r,c as o,b as c,u as d,d as u}from"./index-7813feaf.js";function a(i,t){return window.viewer.imageryLayers.addImageryProvider(new Cesium.WebMapServiceImageryProvider({url:i,layers:t,alpha:0,parameters:{service:"WMS",format:"image/png",transparent:!0}}))}function n(){a("https://eslab2.dgut.edu.cn/geoserver/dongjiang/wms","dongjiang:dongjiang_bound6"),a("https://eslab2.dgut.edu.cn/geoserver/dongjiang/wms","dongjiang:dongjiang_river6"),window.viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({url:"http://{s}.tianditu.gov.cn/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=a5ef217ac65d9c8323d15a22f98c5c66",layer:"tdtCva",style:"default",format:"tiles",tileMatrixSetID:"c",subdomains:["t0","t1","t2","t3","t4","t5","t6","t7"],tilingScheme:new Cesium.GeographicTilingScheme,tileMatrixLabels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"],maximumLevel:18,show:!1})),window.viewer.scene.camera.changed.addEventListener(function(){Math.ceil(window.viewer.camera.positionCartographic.height);let i=window.viewer.camera.pickEllipsoid(new Cesium.Cartesian2(window.viewer.canvas.clientWidth/2,window.viewer.canvas.clientHeight/2)),t=Cesium.Ellipsoid.WGS84.cartesianToCartographic(i);t.longitude*180/Math.PI,t.latitude*180/Math.PI})}const m={class:"layout-tool-template modelToolBar"},g={__name:"loadRiver",setup(i){return s(()=>{n()}),(t,e)=>(r(),o("div",m,[c("button",{onClick:e[0]||(e[0]=w=>d(n)())},"loadRiver")]))}},v=l(g,[["__scopeId","data-v-036b4b0c"]]);const _={id:"cesiumContainer"},p={__name:"main",setup(i){return s(()=>{const t={showRenderLoopErrors:!1,requestRenderMode:!0,maximumRenderTimeChange:1/0,animation:!1,baseLayerPicker:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,shouldAnimate:!0,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,vrButton:!1,scene3DOnly:!0,fullscreenElement:document.body,orderIndependentTranslucency:!1,navigationInstructionsInitiallyVisible:!1},e=new Cesium.Viewer("cesiumContainer",t);e.scene.debugShowFramesPerSecond=!0,e.shadows=!0,e.scene.fxaa=!0,e.scene.postProcessStages.fxaa.enabled=!0,e.scene.debugShowFramesPerSecond=!1,e.scene.globe.enableLighting=!1,e.scene.logarithmicDepthBuffer=!0,e.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK),e._cesiumWidget._creditContainer.style.display="none",e.camera.setView({destination:Cesium.Cartesian3.fromDegrees(114.72537169973519,23.924765567670345,628624),orientation:{heading:Cesium.Math.toRadians(360),pitch:Cesium.Math.toRadians(-90),roll:Cesium.Math.toRadians(0)}}),window.viewer=e,window.Cesium=Cesium}),(t,e)=>(r(),o("div",_,[u(v)]))}};export{p as default};
