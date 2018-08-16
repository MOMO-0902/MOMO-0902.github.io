(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{57:function(e,n,t){"use strict";t.r(n);var r=t(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"destoryed与beforedestory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#destoryed与beforedestory","aria-hidden":"true"}},[e._v("#")]),e._v(" destoryed与beforeDestory")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《钱隆归来》\n时间：2017年11月24日\n问题：在destoryed中清掉计时器不起作用\n描述：destoryed函数在实例销毁之前调用，在这一步，实例完全可用。\n在beforeDestory在实例销毁之后调用，在这一步，实例就不可用了。\n\n")])]),t("h2",{attrs:{id:"filters中this的指向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filters中this的指向","aria-hidden":"true"}},[e._v("#")]),e._v(" filters中this的指向")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年11月29日\n问题2：在filters中使用data中定义的属性报错undefined\n描述：filters中this为undefined,使用\n解决办法：可在filters中定义变量再使用\n关键代码：\nfilters: {\n  filterBtnTitle(item,args) {\n    let  btnTitle\n    console.log(args)\n    if (item.teacherConfirmStatus) {\n      if (item.paused === 1) {\n        // 1是暂停，代表学生发起了撤消请求\n        btnTitle = '同意撤消'\n      }\n      btnTitle = '已确认'\n    } else {\n      btnTitle = '确认为我的学生'\n    }\n    return btnTitle\n  }\n},\n\n")])]),t("h2",{attrs:{id:"filters传多个参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filters传多个参数","aria-hidden":"true"}},[e._v("#")]),e._v(" filters传多个参数")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年11月29日\n问题：使用filters传多个参数，位置互换返回结果错误\n描述：使用(item.orderNo, item.paused) | filterBtnTitle方式来传参数错误，filters管道符前边的参数为第一个参数，第二个，第三个参数应该依次在filters方法后边。\n<div>{{(item) | filterBtnTitle(item.paused)}}</div>\n\n")])]),t("h2",{attrs:{id:"过比较两个对象中的key来判断是否相等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过比较两个对象中的key来判断是否相等","aria-hidden":"true"}},[e._v("#")]),e._v(" 过比较两个对象中的key来判断是否相等")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年12月4日\n问题：使用===判断两个对象是否相等，返回false\n描述：因为一个是写进数组的对象，一个是在页面中点击产生的对象，对象是引用地址方式，两个不同引用地址比较结果肯定是false\n解决办法：通过比较两个对象中的key来判断是否相等。\n错误代码：：\n// 判断指定元素是否在数组中,因为两个数组并不相等，所以一直返回false，但此处复选框没必要去判断元素是否已在数组中，因为点一下添加进数组中，再点一下就删除了\nisInArray(arr, value){\n  for(var i = 0; i < arr.length; i++){\n    // if(value.orderNo === arr[i].orderNo){\n    //   console.log(11111111);\n    //   return true;\n    // }\n  }\n  return false;\n},\n")])]),t("h2",{attrs:{id:"对象的赋值操作为引用地址方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象的赋值操作为引用地址方式","aria-hidden":"true"}},[e._v("#")]),e._v(" 对象的赋值操作为引用地址方式")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年12月4日\n问题：先定义一个对象为它赋值，再定义第二个对象等于第一个对象，再为第二个对象赋值，此时打印第一个对象和第二个对象的值是相等的，因为此时两个对象引用同一地址\nlet obj1=new Object()\nobj1.name='Frank'\nlet obj2=obj1\nobj2.name='Muse'\nconsole.log(obj1.name);\n")])]),t("h2",{attrs:{id:"为数组对象增加删除指定元素的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为数组对象增加删除指定元素的方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 为数组对象增加删除指定元素的方法")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年12月4日\n问题：\n// 为数组对象增加删除指定元素的方法\n  removeByValue(arr, val) {\n    for(var i=0; i<arr.length; i++) {\n      if(arr[i] === val) {\n        arr.splice(i, 1);\n        break;\n      }\n    }\n  },\n\n")])]),t("h2",{attrs:{id:"使用filters方法进行数组去重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用filters方法进行数组去重","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用filters方法进行数组去重")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年12月4日\n问题：先判断元素是否在数组中，如果在就删除，我用了上述isInArray，removeByValue两个方法先后来操作，但此处可巧妙运用数组的filters方法，直接返回数组中不等于当前选中元素的那一项，就实现了删除相等的那一项\n关键代码：\nlet arr = arr.filters(item => {\n  return item.orderNo !== item.orderNo\n  })\n\n")])]),t("h2",{attrs:{id:"switch-return-和break不能一起用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switch-return-和break不能一起用","aria-hidden":"true"}},[e._v("#")]),e._v(" switch return 和break不能一起用")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间： 2017年12月4日\n问题：在switch分支处语法检查报错 Unreachable code  no-unreachable\n描述： switch return 和break不能一起用\n解决办法：将switch返回结果赋值给一个变量，最后再返回这个变量\n\n")])]),t("h2",{attrs:{id:"请求接口格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求接口格式","aria-hidden":"true"}},[e._v("#")]),e._v(" 请求接口格式")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间： 2017年12月4日\n问题：请求接口提交数据格式不正确，\n描述: 在外边给json赋值后，用的时候又用了{}括起来了，提交数据格式为json时，可以直接用post({key:value}),也可以先赋值再使用\n错误代码：\nconst params ={}\n  query.then({params}).then().catch()\n正确代码：\n1.queryOrderList({\n    uname: keywords\n  })\n2.const params = {}\n  params.uname = keywords\n  queryOrderList(params).then().catch()\n\n")])]),t("h2",{attrs:{id:"问题1：移动端字体小于12px时使用line-height字体整体靠上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题1：移动端字体小于12px时使用line-height字体整体靠上","aria-hidden":"true"}},[e._v("#")]),e._v(" 问题1：移动端字体小于12px时使用line-height字体整体靠上")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年12月4日\n问题1：移动端字体小于12px时使用line-height字体整体靠上\n解决办法： display:tabel默认是垂直居中，使用display: table来实现垂直居中效果并不是特别明显，所以再配合使用缩放来对元素进行缩放，给要垂直居中的元素外再套一层\n关键代码：\n.wrapper {\n  display: table,\n  font-size: 20px;\n  height: 28px;\n  line-height: 28px;\n  width: 72px;\n  transform: scale(0.5),\n  // transform-origin 设置旋转元素的基点位置，必须与transform一起使用\n  transform-origin: 100% 100%\n  span {\n    display: tabel-cell;\n    vertical-align: middle;\n  }\n}\n问题2：使用transform:scale可以实现缩放，但还占据着原来的空间，导致元素没有在原本应该的位置上显示\n解决办法： 使用zoom: 0.5来进行缩放，还不占据空间，zoom: 设置或检索对象的缩放比例\n\n")])]),t("h2",{attrs:{id:"只有dom方法才会真实接受-event对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只有dom方法才会真实接受-event对象","aria-hidden":"true"}},[e._v("#")]),e._v(" 只有dom方法才会真实接受$event对象")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('项目：《招生宝》\n时间：2017年12月4日\n问题：页面显示数据使用{{btnTitle(item.status, item.no, $event)}}方法来根据数据显示按钮样式，本想用$event来获得当前对象来改变其背景图，但$event为undefined\n描述：此处用来过滤功能的btnTitle方法并不是一个dom方法，所以并不会真实接受$evnet对象\n解决办法：在此用一个flag来做标志，如果是特殊样式falg = true,如果不是flag = false，然后当flag= true时添加class名，获取元素方法使用获取元素方法使用refs,给按钮绑定refs\n关键代码：\n<a class="confirm-button tac c3e" ref="btns"  @click="handleClick(item.teacherConfirmStatus, item.paused, item.orderNo)" :class="{\'confirmed\': isconfirm}" v-show="buttonShow === \'all\'">{{filterBtnTitle(item.teacherConfirmStatus, item.paused, item.status,key)}}</a>\n\nlet flag = true\nif (status = \'同意撤消\') {\n  flag = false\n}\nif (flag) {\n  this.nextTick(() => {\n    this.$refs.btns[index].className =\'confirmed\'\n  })\n}\n')])]),t("h2",{attrs:{id:"正则表达式格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式格式","aria-hidden":"true"}},[e._v("#")]),e._v(" 正则表达式格式")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年12月6日\n问题：正则表达式不起作用\n描述：格式错误\n正则表达式   let newTime = /\\d{4}-\\d{1,2}-\\d{1,2}/g.exec(time)写成了  let newTime = /\\d(4)-\\d(1,2)-\\d(1,2)/g.exec(time)\nnewTime[0].replace(/-/g, '.')写成了newTime[0].replace(\\-\\g, '.')\n\n")])]),t("h2",{attrs:{id:"接口返回状态码是数字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口返回状态码是数字","aria-hidden":"true"}},[e._v("#")]),e._v(" 接口返回状态码是数字")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('项目：《招生宝》\n时间：2017年12月6日\n问题：请求mock数据接口时接口状态一直返回失败，\n描述：状态码2000000写成了“2000000”\n错误代码： {\n  "path": "",\n  "delay": 500,\n  "name": "",\n  "description": "",\n  "isPaging": false,\n  "datasource": "success.data",\n  "responseName": "success",\n  "response": {\n    "success": {\n      "retcode": "5000000",\n      "message": "获取数据成功",\n      "data": {}\n    },\n    "failure": {\n      "code": "201",\n      "status": "FAILURE",\n      "message": "服务异常"\n    }\n  }\n}\n正确代码 ：\n{\n  "path": "",\n  "delay": 500,\n  "name": "",\n  "description": "",\n  "isPaging": false,\n  "datasource": "success.data",\n  "responseName": "success",\n  "response": {\n    "success": {\n      "retcode": 5000000,\n      "message": "获取数据成功",\n      "data": {}\n    },\n    "failure": {\n      "code": 201,\n      "status": "FAILURE",\n      "message": "服务异常"\n    }\n  }\n}\n\n\n')])]),t("h2",{attrs:{id:"请求接口参数格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求接口参数格式","aria-hidden":"true"}},[e._v("#")]),e._v(" 请求接口参数格式")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('项目：《招生宝》\n时间：2017年12月6日\n问题：向后台 传参数时需要的是数组，但得到的是json\n描述：因为传参数时传的时候用的{}括起来了，而括号里是一个数组，所以是json格式，并不是数组都是这样默认显示的（数组名，数组值），这明显是json格式。\n错误代码：  confirmBatch(\n                {batchArr}\n              ).then((res) => {\n                this.$dialog.alert(res.message)\n                // window.location.reload()\n              }).catch((err) => {\n                this.$dialog.alert(err.message)\n              })\n              得到的错误结果：{"batchArr": [{"orderNo": "1323"}]}\n\n')])]),t("h2",{attrs:{id:"disabled是input标签的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disabled是input标签的属性","aria-hidden":"true"}},[e._v("#")]),e._v(" disabled是input标签的属性")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年12月6日\n问题：做批量确认时，当所选学生订单数量为0时，disabled不可用\n描述：一直以为是数据判断或者属性绑定方法有错误 ，但经过各种测试都没错，百度才发现disabled是input标签专属的属性！\n\n以下摘自w3school：\ninput标签的disabled属性，规定应该禁用input元素！\n\n")])]),t("h2",{attrs:{id:"根据个人信息在显示不同状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据个人信息在显示不同状态","aria-hidden":"true"}},[e._v("#")]),e._v(" 根据个人信息在显示不同状态")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年12月7日\n问题：批量确认时，弹出框要弹出老师选择了某某某等几个学生，所以我把学生名字放在了一个数组里，我做的操作是当选中时单击删除，未选中时单击添加，但出现一种情况是删除一个数组就清空了，长度也变为0\n描述：从数组中删除元素时使用的方法是比较学生名字，忽略了学生同名的情况，当学生同名时，把名字数组里的相同元素都删除了，但其他未点击的元素样式没变，还是已选中状态，也有被这一状态迷惑的原因。后来尝试比较学生id，但同一个学生可能有两个订单，所以也可能删除两个订单，改为比较订单号\n解决办法：\n调用方法时将学生姓名与学生订单号一同传递给批量确认的方法，将两个属性作为组成一个对象，然后写进数组中，再进行显示\n关键代码： <input type = \"checkout\" @click=\"handleSelected\"></div>\n\nhandleSelected(orderNo, index, $event, uname) {\n    var orderNoObj = {}\n    orderNoObj.orderNo = orderNo\n    // 获取当前元素,即当前列表项\n    var $curr = $event.currentTarget\n    // 设置当前元素背景图为选中状态\n    if ($curr.className === 'unChecked') {\n      $curr.className = 'checked'\n      this.batchArr.push(orderNoObj)\n      var selectedObj = {}\n      selectedObj.uname = uname\n      selectedObj.orderNo = orderNo\n      this.batchNameArr.push(selectedObj)\n    } else {\n      // 设置当前元素背景图为未选中状态\n      $curr.className = 'unChecked'\n      // 使用filters删除指定元素\n      this.batchArr = this.batchArr.filter((item) => {\n        return item.orderNo !== orderNo\n      })\n      this.batchNameArr = this.batchNameArr.filter((item) => {\n        return item.orderNo !== orderNo\n      })\n    }\n  }\n}\n\n")])]),t("h2",{attrs:{id:"微信浏览器不能使用window-location-reload-成功刷新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微信浏览器不能使用window-location-reload-成功刷新","aria-hidden":"true"}},[e._v("#")]),e._v(" 微信浏览器不能使用window.location.reload()成功刷新")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《招生宝》\n时间：2017年12月7日\n问题：移动端微信浏览器使用window.location.reload()刷新页面不管用\n描述：location.reload()方法是重新加载当前文档，由于微信缓存问题,reload只是从缓存中装载文档，导致使用window.location.reload()不能成功刷新，所以使用href属性来使浏览器读取并显示新的url内容\n解决办法： 使用window.location.href = window.location.href + 时间戳来更新当前url内容\n关键代码：\nwindow.location.href = this.updateUrl(window.location.href)\n\n// 解决微信浏览器使用window.location.reload()刷新页面无效问题\n  updateUrl(url, key) {\n    key = (key || 't') + '=' // 默认是\"t\"\n    var reg = new RegExp(key + '\\\\d+') // 正则：t=1472286066028\n    var timestamp = +new Date()\n    if (url.indexOf(key) > -1) { // 有时间戳，直接更新\n      return url.replace(reg, key + timestamp)\n    } else { // 没有时间戳，加上时间戳\n      if (url.indexOf('?') > -1) {\n        var urlArr = url.split('?')\n        if (urlArr[1]) {\n          return urlArr[0] + '?' + key + timestamp + '&' + urlArr[1]\n        } else {\n          return urlArr[0] + '?' + key + timestamp\n        }\n      } else {\n        if (url.indexOf('#') > -1) {\n          return url.split('#')[0] + '?' + key + timestamp + location.hash\n        } else {\n          return url + '?' + key + timestamp\n        }\n      }\n    }\n  }\n},\n\n")])]),t("h2",{attrs:{id:"vue中执行对dom进行操作的js代码应该放在vue-nexttick-中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue中执行对dom进行操作的js代码应该放在vue-nexttick-中","aria-hidden":"true"}},[e._v("#")]),e._v(" vue中执行对dom进行操作的js代码应该放在Vue.nextTick()中")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('项目：《招生宝》\n时间：2017年12月7日\n问题1：搜索学生后搜索页和再返回列表页后每个第一个“确认为我的学生”按钮处样式都有问题\n描述1：因为当订单处于“同意撤消”和“确认学生”时都是有边框的样式，而"已确认"时状态样式不一样，此处用了一标志flag判断，flag为true时就加class名"confirmed"，正常列表中第一个为“已确认”,已经给元素加了class名，当搜索时虽然flag为false，没有走赋class名的条件语句 ，但也没有去掉class名的分支条件.\n解决办法1：加上如果flag为flase时去掉class名的分支语句\n\n问题2：用this.refs.btns[index].className报错\n描述2：在vue中执行对dom进行操作的js代码应该放在Vue.nextTick()中，\nVue.nextTick()是在下次DOM更新循环结束之后执行回调。在修改数据后立即使用这个方法，这样回调函数在dom更新完之后就会被调用.\n即需要使用随数据改变而改变的dom结构的操作都应该放在Vue.nextTick()中,\n\n正确代码：\nif (flag) {\n  this.nextTick(() => {\n    this.refs.btns[index].className\n    })\n}\n\n')])]),t("h2",{attrs:{id:"vue-dom更新updated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-dom更新updated","aria-hidden":"true"}},[e._v("#")]),e._v(" vue dom更新updated")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("项目：《趣学君》\n时间：2017年12月22日\n问题：dom更新时未执行里边的方法\n描述：dom更新时的方法应该是updated,而不是update，实例创建完成后（挂载阶段还没开始）事件是created,不是create\n\n")])])])}],!1,null,null,null);n.default=a.exports}}]);