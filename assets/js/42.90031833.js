(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{60:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"清除ios上button和input的默认样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清除ios上button和input的默认样式","aria-hidden":"true"}},[e._v("#")]),e._v(" 清除ios上button和input的默认样式")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("时间：2017年09月25日\n项目：《金银屋官网》\n问题：表单样式在 iOS 手机上不兼容\n描述: 按钮和 input 输入框在 iOS 上有默认样式，没有去掉\n代码： \ninput[type=button],input[type=text],input[type=password] {\n  -webkit-appearance:none;outline:none\n}\n")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("时间：2017年09月25日\n项目：《金银屋官网》\n问题：代码意图和逻辑没理清楚\n\n(function bottonm(){\n    if($(document).height()<$(window).height()){\n        $('.model-close').css({'position':'fixed','bottom':'20px'});\n        $(document).height($(window).height()+'px');\n    }\n})();\n\n$('.model-close') 是关闭弹出框表单的按钮，不会直接显示在页面，这段代码在 js 文件加载完就立即执行，没有任何意义，反而导致 JS 报错\n")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("时间：2017年09月25日\n项目：《金银屋官网》\n问题：不注意代码风格，没有遵守编码规范；有的代码加了分号有的没加；不该缩进的地方有缩进；同时使用了双引号和单引号；\n\n问题代码 1：\n\nsuccess: function(resp) {\n  if (resp.retcode === 2000000) {\n    successshow.show()\n    event.stopPropagation()\n  } else {\n    util.Alert('提示', resp.msg)\n  }\n},\nerror:function(xhr,type) {\n  failshow.show()\n  event.stopPropagation();\n}\n\n问题代码 2 (同时使用了双引号和单引号):\n$(\"#applycode\").on('keyup',function(e){\n")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("时间：2017年09月25日\n项目：《金银屋官网》\n问题：提交信息写错，deploy 写成 delply\n\ncommit 018461f1029d44543e69ce9f902d77170b1939e0\nAuthor: MOMO-0902 <329053928@qq.com>\nDate:   Mon Sep 25 06:54:29 2017 +0800\n\n    修改delply以及部分样式\n")])]),n("h2",{attrs:{id:"使用display-table实现移动端垂直居中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用display-table实现移动端垂直居中","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用display:table实现移动端垂直居中")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("时间：2017年09月25日\n项目：《金银屋官网》\n问题：移动端line-height也不能实现准确垂直居中，字体整体靠上\n描述：移动端与pc端解析方式不一样，导致line-height出现偏差\n解决办法：使用display:table解决问题\n\n问题2：使用display:table后本来不一样的两个元素变的一样高\n描述：这是因为display:table是将子元素变成单元格一样的显示方式，所以是等高的\n解决办法：给高度较小的盒子外边套一层，再使用vertical-align:middle 实现垂直居中\n//父元素\n.step{\n  display: table;\n  height: 20px;\n}\n//子元素1显示数字\n.stepnum {\n  display:table-cell;\n  vertical-align: middle;\n}\n//子元素2显示文字\n.stepword {\n  display:table-cell;\n  vertical-align: middle;\n  font-size: 14px;\n}\n//显示数字，是stpmnum的子元素\n.number {\n  font-size: 12px;\n  height: 16px;\n}\n\n")])]),n("h2",{attrs:{id:"使用select-val-来获取select选中项的value值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用select-val-来获取select选中项的value值","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用select.val()来获取select选中项的value值")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("时间：2017年09月26日\n项目：《金银屋官网》\n问题：未选择房产和金额的时候点击提交按钮，报错 Cannot read property 'value' of undefined\n\nlet houseoptions = $(\".select-house option\").not(function(){ return !this.selected })\nvar house = houseoptions[0].value\n\n这段代码是想获取 select选中的option，然后再获取 option的value值，给select设置没有默认选中项，所以当没有手动选择一项就点提交，option的value值也是没有的\n\n解决办法：使用select.val()来获取select选中项的value值\n")])]),n("h2",{attrs:{id:"select的value-方法-和-text-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#select的value-方法-和-text-方法","aria-hidden":"true"}},[e._v("#")]),e._v(" select的value()方法 和 text()方法")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("时间：2017年09月26日\n项目：《金银屋官网》\n问题：未正确分清select option的value和text值\n描述：使用select.val()获取 选中项的value值\n      option的value值是要发送到服务器的值\n      select.text()获取所有option的值\n      option的text值是option的显示内容\n\n")])]),n("h2",{attrs:{id:"引入库版本过低"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引入库版本过低","aria-hidden":"true"}},[e._v("#")]),e._v(" 引入库版本过低")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("时间：2017年09月26日\n项目：9.14-9.19一周学习分享\n问题：使用click与tap事件报错\n描述：由于zepto的touch.js版本过低，导致引入后页面发生事件报错\n\n")])]),n("h2",{attrs:{id:"jquery-ajax格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jquery-ajax格式","aria-hidden":"true"}},[e._v("#")]),e._v(" jquery ajax格式")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('时间：2017年09月26日\n项目：9.14-9.19一周学习分享\n问题1：写ajax格式出错\n描述：$.ajax({}) 写成了 $(ajax).({})\n     $(“html元素”)，$相当于Jquery，意思是选取，查询，或创建页面中的一个或者一类html元素，并对它们进行操作\n     $.ajax({}) $.each({}) $.map({})  $作为功能函数的前缀，意为调用(.)jquery对象($)的方法(ajax), $(ajax)是利用选择器获取元素，所以并不能在后边加"."\n\n问题2：使用ajax传送数据与接收参数类型搞错\n描述：向服务器传送数据应该是data,不是dataType,dataType是期待服务器返回类型，contentType是发送到服务器类型一般为"application/json"\n$.ajax({\n  url: "http://www.baidu.com",\n  data: {"username":username, "password":password},\n  dataType: "json",\n  contentType: "application/json",\n  timeout: 3000,\n  content: "$("body"),\n  success: function() {},\n  error: function() {}\n  })\n')])]),n("h2",{attrs:{id:"markdown-h1-h6下边加空行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#markdown-h1-h6下边加空行","aria-hidden":"true"}},[e._v("#")]),e._v(" markdown h1-h6下边加空行")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("时间：2017年09月27日\n项目：《wiki》写笔记\n问题：第二个##没有h2的样式\n描述：没有给h2下边加一空行，导致h2跟正文样式一样\n\n")])]),n("h2",{attrs:{id:"jquery回调函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jquery回调函数","aria-hidden":"true"}},[e._v("#")]),e._v(" jquery回调函数")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("问题：网页文档加载后的事件不执行\n时间：2017.09\n描述：第一次写的时候丢了function，这段代码的意思是当页面加载完成后执行此函数里边的函数，所以function(){}不能丢\n解决办法：\n$(document).ready(function(){\nfunction Func(){}\n})\n\n")])]),n("h2",{attrs:{id:"zepto获取select元素选中值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zepto获取select元素选中值","aria-hidden":"true"}},[e._v("#")]),e._v(" zepto获取select元素选中值")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("问题：使用$('option[selected]')不能获取slection选中的option值\n描述：zepto获取select元素的选中option不能用类似jq的方法$('option[selected]'),因为selected属性不是css的标准属性\n解决办法：使用$('option').not(function(){ return !this.selected })\n比如：jq:$this.find('option[selected]').attr('data-v') * 1\nzepto:$this.find('option').not(function() {return !this.selected}).attr('data-v') * 1\n但是获取有select中含有disabled属性的元素可以用$this.find(\"option:not(:disabled)\")因为disabled是标准属性\n")])])])}],!1,null,null,null);t.default=s.exports}}]);