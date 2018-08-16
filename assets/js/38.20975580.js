(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{54:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"vuex挂载store"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex挂载store","aria-hidden":"true"}},[e._v("#")]),e._v(" vuex挂载store")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("项目：《自学vuex》\n参照链接：<https://www.cnblogs.com/ghostwu/p/7521097.html>\n时间： 2018年3月23日\n问题：引用store中state的状态userName 提示错误 “cannot read property 'state' of undefined（不能读取undefined上的state属性）”\n分析：引用时使用this.$store.state.userName，此处错误表明store未定义，原因是未在创建vue实例时将store挂载上去\n关键代码:\nnew Vue({\n  el: 'App',\n  router,\n  store,\n  components: { App },\n  template: '<App/>'\n})\n\n")])]),n("h2",{attrs:{id:"页面上显示的vue文件都要引入到app-vue中并实例化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面上显示的vue文件都要引入到app-vue中并实例化","aria-hidden":"true"}},[e._v("#")]),e._v(" 页面上显示的vue文件都要引入到app.vue中并实例化")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("项目：《自学vuex》\n时间： 2018年3月26日\n问题：使用vuex的mapState辅助函数帮助一个组件获取多个状态时，页面不生效\n分析：在.vue文件中添加了其他的元素页面也不显示，猜测可能是页面中没有添加成功.vue单文件组件，在App.vue中并未对mapState.vue文件做引入以及实例化\n关键代码:\n<template>\n  <div id=\"app\">\n    <Mainc></Mainc>\n    <testc></testc>\n    <mapTest></mapTest>\n  </div>\n</template>\n\n<script>\nimport mapTest from './components/mapStateTest.vue'\n\nexport default {\n  name: 'App',\n  components: [\n    Mainc,\n    testc,\n    mapTest\n  ]\n}\n<\/script>\n")])]),n("p",[e._v("##挂载vue实例到页面中")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("项目：《华智数联-拟定方案》\n时间： 2018年3月29日\n问题：在新写的模态框里使用v-show命令不起作用，切换状态，绑定事件等均无反应\n分析：模态框不能隐藏，但使用display:none可以，可见是js与html出了问题，经过查看，发现js并无问题，查看html结构，发现此处我把新写的模态框放在了id=app的盒子之外,而vue实例是挂载在了此div上\n关键代码：\nnew Vue ({\n  el: 'app',\n  data： {}\n})\n")])]),n("h2",{attrs:{id:"未知数子元素等分剩余空间不能用flex-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#未知数子元素等分剩余空间不能用flex-1","aria-hidden":"true"}},[e._v("#")]),e._v(" 未知数子元素等分剩余空间不能用flex:1")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("项目：《华智数联-拟定方案》\n时间： 2018年3月28日\n问题：列表里省市都是循环出来的，但想每行只有5个，记得使用flex：1是等分空间的，但不记得5份如何定义属性\n分析：flex:1是已知子元素有几个，才可以等分剩余空间的，并没有属性能够定义未知子元素的父元素的属性，此处可将每个子元素宽度设置为20%\n")])])])}],!1,null,null,null);t.default=s.exports}}]);