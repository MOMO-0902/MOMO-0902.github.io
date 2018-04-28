(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{78:function(t,e,n){"use strict";n.r(e);var o=n(0),l=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("获取scrollTop，scrollTop是可见窗口顶端与body对象最顶端的距离，即滚动鼠标或手指滑动页面时，隐藏的页面高度（滚动的距离）。")]),n("p",[t._v("documentElement对应的是html标签，body对应的body标签，在标准w3c下，document.body.scrollTop恒为0，需要用documnet.documentElement.scrollTop来代替，两者只有一个生效,始终有一个为0。")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  function getScrollTop () {\n    // 考虑到浏览器版本兼容性问题，解析方式可能会不一样\n  return document.documentElement.scrollTop || document.body.scrollTop\n}\n")])]),n("p",[t._v("获取视口高度（网页可见区域高）")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function getWinHeight () {\n  // 浏览器可见内容高度 || 浏览器所有内容高度(考虑到浏览器版本兼容性问题，解析方式可能会不一样)\n  return document.documentElement.clientHeight || document.body.clientHeight\n}\n")])]),n("p",[t._v("获取文档总高度")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function getScrollHeight() {\n  let bodyScrollHeight = 0\n  let documentScrollHeight = 0\n  if (document.body) {\n    bodyScrollHeight = document.body.scrollHeight\n  }\n  if (document.documentElement) {\n    documentScrollHeight = document.documentElement.scrollHeight\n  }\n  // 当页面内容超出浏览器可视窗口大小时，Html的高度包含body高度+margin+padding+border所以html高度可能会大于body高度\n  return (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight\n}\n")])]),n("p",[t._v("是否滚动到底部")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function isReachBottom () {\n  const scrollTop = getScrollTop() // 获取滚动条的高度\n  const winHeight = getWinHeight() // 一屏的高度\n  const scrollHeight = getScrollHeight() // 获取文档总高度\n  return scrollTop >= parseInt(scrollHeight) - winHeight\n}\n")])]),n("p",[t._v("导出函数")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export default isReachBottom\n")])]),n("p",[t._v("使用函数")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// 判断是否到页面底部，如果到页面底部，判断是否还有数据，如果有数据就加载，如果没有，就解绑滚动事件\nimport isReachBottom from \'isReachBottom\'\n\nmethods: {\n  reachBottom() {\n    if (isReachBottom()) {\n      if (this.hasMore) {\n        this.queryInfo()\n      } else {\n        window.onscroll = null\n      }\n    }\n  }\n}\nwatch: {\n  // 判断是否是需要滑动加载数据的页面\n  investShow() {\n    // 如果是需要滑动加载数据的页面，就绑定reachBottomg事件\n    window.addEventListener("scroll", this.reachBottom)\n  } else {\n    // 否则移除\n    window.removeEventListener("scroll", this.reachBottom)\n  }\n}\n\n')])])])}],!1,null,null,null);e.default=l.exports}}]);