(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{93:function(t,e,a){"use strict";a.r(e);var r=a(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"_1-在data里定义一个初始状态，设为false，作为加载标志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在data里定义一个初始状态，设为false，作为加载标志","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.在data里定义一个初始状态，设为false，作为加载标志")]),a("h3",{attrs:{id:"_2-请求之前将状态变成true-再去请求接口，这时一直是加载状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-请求之前将状态变成true-再去请求接口，这时一直是加载状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.请求之前将状态变成true,再去请求接口，这时一直是加载状态")]),a("h3",{attrs:{id:"_3-当接口响应之后不管是成功还是失败都将状态变成false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-当接口响应之后不管是成功还是失败都将状态变成false","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.当接口响应之后不管是成功还是失败都将状态变成false")]),a("h3",{attrs:{id:"_4-每次请求之前都判断一下加载状态，如果是true直接return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-每次请求之前都判断一下加载状态，如果是true直接return","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.每次请求之前都判断一下加载状态，如果是true直接return")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("data() {\n  return {\n    fetching: false\n  }\n}\n,\nmothods: {\n  request() {\n    if (this.fetching === true) {\n      return \n    }\n    this.fetching = true\n    axios.get(url)\n    .then(res => {\n      this.fetching = false\n    })\n    .catch(err => {\n      this.fetching = false\n    })\n  }\n}\n")])])])}],!1,null,null,null);e.default=n.exports}}]);