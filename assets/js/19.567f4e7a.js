(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{67:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("在上一节 "),n("router-link",{attrs:{to:"./2vue-constructor.html"}},[t._v("Vue构造函数")]),t._v(" 中，我们整理了完整的 "),n("code",[t._v("Vue")]),t._v(" 构造函数，包括原型的设计和全局API的设计，并且我们专门为其整理了附录，目的是便于查看相应的方法和属性是在哪里被添加的，同时也让我们对 "),n("code",[t._v("Vue")]),t._v(" 构造函数有一个大局观的认识。")],1),t._m(1),t._m(2),n("p",[t._v("我们有如下模板：")]),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),n("p",[t._v("首先我们要找到当我们调用 "),n("code",[t._v("Vue")]),t._v(" 构造函数的时候，第一句执行的代码是什么，所以我们要找到 "),n("code",[t._v("Vue")]),t._v(" 的构造函数，还记得 "),n("code",[t._v("Vue")]),t._v(" 的构造函数定义在哪里吗？不记得没关系，只要查阅一下 "),n("router-link",{attrs:{to:"../appendix/vue-prototype.html"}},[t._v("附录/Vue构造函数整理-原型")]),t._v(" 就ok了，"),n("code",[t._v("Vue")]),t._v(" 的构造函数定义在 "),n("code",[t._v("core/instance/index.js")]),t._v(" 文件中，我们找到它：")],1),t._m(13),t._m(14),t._m(15),n("p",[t._v("既然如此，我们就找到 "),n("code",[t._v("_init")]),t._v(" 方法，查阅 "),n("router-link",{attrs:{to:"../appendix/vue-prototype.html"}},[t._v("附录/Vue构造函数整理-原型")]),t._v(" 可知，"),n("code",[t._v("_init")]),t._v(" 方法在 "),n("code",[t._v("src/core/instance/init.js")]),t._v(" 文件被添加到 "),n("code",[t._v("Vue")]),t._v(" 的原型上，下面我们就看看 "),n("code",[t._v("_init")]),t._v(" 做了什么。")],1),t._m(16),t._m(17),t._m(18),n("p",[t._v("所以实际 "),n("code",[t._v("_uid")]),t._v(" 就是一个 "),n("code",[t._v("Vue")]),t._v(" 实例的实例属性，在之后的分析中，我们将会在很多地方遇到很多的实例属性被逐渐添加到 "),n("code",[t._v("Vue")]),t._v(" 实例上，所以我们同样整理了一个附录："),n("router-link",{attrs:{to:"../appendix/vue-ins.html"}},[t._v("附录/Vue实例的设计")]),t._v(" 来对 "),n("code",[t._v("Vue")]),t._v(" 实例进行整理，就像我们对 "),n("code",[t._v("Vue")]),t._v(" 构造函数的整理一样，大家可以在这里查阅。")],1),n("p",[t._v("回过头来继续看代码，接下来是这样一段：")]),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),n("p",[t._v("其中"),n("em",[t._v("组件初始化")]),t._v("的性能追踪就是我们在 "),n("code",[t._v("_init")]),t._v(" 方法中看到的那样去实现的，其实现的方式就是在初始化的代码的开头和结尾分别使用 "),n("code",[t._v("mark")]),t._v(" 函数打上两个标记，然后通过 "),n("code",[t._v("measure")]),t._v(" 函数对这两个标记点进行性能计算。"),n("code",[t._v("mark")]),t._v(" 和 "),n("code",[t._v("measure")]),t._v(" 这两个函数可以在附录 "),n("router-link",{attrs:{to:"../appendix/core-util.html"}},[t._v("core/util 目录下的工具方法全解")]),t._v(" 中查看其作用和实现方式。")],1),n("p",[t._v("此时大家应该打开 "),n("code",[t._v("core/util/perf.js")]),t._v(" 文件，然后对照着附录 "),n("router-link",{attrs:{to:"../appendix/core-util.html"}},[t._v("core/util 目录下的工具方法全解")]),t._v(" 搞清楚 "),n("code",[t._v("mark")]),t._v(" 和 "),n("code",[t._v("measure")]),t._v(" 这两个方法了，通过 "),n("code",[t._v("core/util/perf.js")]),t._v(" 文件的代码我们可知，只有在非生产环境，且浏览器必须支持 "),n("code",[t._v("window.performance")]),t._v(" API的情况下才会导出有用的 "),n("code",[t._v("mark")]),t._v(" 和 "),n("code",[t._v("measure")]),t._v(" 函数，也就是说，如果你的浏览器不支持 "),n("code",[t._v("window.performance")]),t._v(" 那么在 "),n("code",[t._v("core/instance/init.js")]),t._v(" 文件中导入的 "),n("code",[t._v("mark")]),t._v(" 和 "),n("code",[t._v("measure")]),t._v(" 就都是 "),n("code",[t._v("undefined")]),t._v("，也就不会执行 "),n("code",[t._v("if")]),t._v(" 语句里面的内容。")],1),t._m(26),t._m(27),t._m(28),n("p",[t._v("了解了这两段性能追踪的代码之后，我们再来看看这两段代码中间的代码，也就是被追踪性能的代码，如下：")]),t._m(29),t._m(30),n("p",[t._v("再往下是这样一段代码：")]),t._m(31),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"以一个例子为线索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以一个例子为线索","aria-hidden":"true"}},[this._v("#")]),this._v(" 以一个例子为线索")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("从这一章节开始，我们将逐渐走进 "),s("code",[this._v("Vue")]),this._v("，我们采用一种由浅入深，由宽到窄的思路，一开始我们会从宏观的角度来看 "),s("code",[this._v("Vue")]),this._v(" 是如何设计的，然后再一点点“追究”进去，进而逐步搞清楚 "),s("code",[this._v("Vue")]),this._v(" 为什么这么设计。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("而这一节，我们就致力于搞清楚："),s("code",[this._v("Vue的思路")]),this._v("。我们将会从一个例子开始，这个例子非常简单，如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{test}}"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("和这样一段 "),s("code",[this._v("js")]),this._v(" 代码：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vm "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("这段 "),n("code",[t._v("js")]),t._v(" 代码很简单，只是简单地调用了 "),n("code",[t._v("Vue")]),t._v("，传递了两个选项 "),n("code",[t._v("el")]),t._v(" 以及 "),n("code",[t._v("data")]),t._v("。这段代码的最终效果就是在页面中渲染为如下 "),n("code",[t._v("DOM")]),t._v("：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("其中\n"),s("code",[this._v("{{ test }}")]),this._v("\n被替换成了 "),s("code",[this._v("1")]),this._v("，并且当我们尝试修改 "),s("code",[this._v("data.test")]),this._v(" 的值的时候")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 或")]),t._v("\nvm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那么页面的 "),s("code",[this._v("DOM")]),this._v(" 也会随之变化为：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("看上去这个例子很简单(好吧，确实很简单)，但其实这么简单的例子已经足够我们搞清楚 "),s("code",[this._v("Vue")]),this._v(" 的思路了，当你明白 "),s("code",[this._v("Vue")]),this._v(" 的思路之后，再去搞清楚其他的问题将会变得异常轻松。接下来我们就看看上面的例子中，到底发生了什么。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Vue")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("warn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Vue is a constructor and should be called with the `new` keyword'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("_init")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("一目了然，当我们使用 "),n("code",[t._v("new")]),t._v(" 操作符调用 "),n("code",[t._v("Vue")]),t._v(" 的时候，第一句执行的代码就是 "),n("code",[t._v("this._init(options)")]),t._v(" 方法，其中 "),n("code",[t._v("options")]),t._v(" 是我们调用 "),n("code",[t._v("Vue")]),t._v(" 构造函数时透传过来的，也就是说：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("options "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("_init")]),this._v(" 方法的一开始，是这两句代码：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// a uid")]),t._v("\nvm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_uid "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" uid"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("首先声明了常量 "),n("code",[t._v("vm")]),t._v("，其值为 "),n("code",[t._v("this")]),t._v(" 也就是当前这个 "),n("code",[t._v("Vue")]),t._v(" 实例啦，然后在实例上添加了一个唯一标示："),n("code",[t._v("_uid")]),t._v("，其值为 "),n("code",[t._v("uid")]),t._v("，"),n("code",[t._v("uid")]),t._v(" 这个变量定义在 "),n("code",[t._v("initMixin")]),t._v(" 方法的上面，初始化为 "),n("code",[t._v("0")]),t._v("，可以看到每次实例化一个 "),n("code",[t._v("Vue")]),t._v(" 实例之后，"),n("code",[t._v("uid")]),t._v(" 的值都会 "),n("code",[t._v("++")]),t._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" startTag"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endTag\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* istanbul ignore if */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" mark"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    startTag "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`vue-perf-start:")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_uid"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("`")])]),t._v("\n    endTag "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`vue-perf-end:")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_uid"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("`")])]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("mark")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("startTag"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 中间的代码省略...")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* istanbul ignore if */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" mark"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("formatComponentName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("mark")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endTag"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("measure")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`vue ")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_name"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v(" init`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startTag"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endTag"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面的代码中，我省略了这两段代码中间的内容，我们暂且只看这两段代码。首先声明两个变量 "),s("code",[this._v("startTag")]),this._v(" 和 "),s("code",[this._v("endTag")]),this._v("，然后这两段代码有一个共同点，即拥有相同的判断语句：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" config"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" mark"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("意思是：在非生产环境下，并且 "),n("code",[t._v("config.performance")]),t._v(" 和 "),n("code",[t._v("mark")]),t._v(" 都为真，那么才执行里面的代码，其中 "),n("code",[t._v("config.performance")]),t._v(" 来自于 "),n("code",[t._v("core/config.js")]),t._v(" 文件，我们知道，"),n("code",[t._v("Vue.config")]),t._v(" 同样引用了这个对象，在 "),n("code",[t._v("Vue")]),t._v(" 的官方文档中可以看到如下内容：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://ovjvjtt4l.bkt.clouddn.com/2017-09-28-114949.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Vue")]),this._v(" 提供了全局配置 "),s("code",[this._v("Vue.config.performance")]),this._v("，我们通过将其设置为 "),s("code",[this._v("true")]),this._v("，即可开启性能追踪，你可以追踪四个场景的性能：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("1、组件初始化("),n("code",[t._v("component init")]),t._v(")")]),n("li",[t._v("2、编译("),n("code",[t._v("compile")]),t._v(")，将模板("),n("code",[t._v("template")]),t._v(")编译成渲染函数")]),n("li",[t._v("3、渲染("),n("code",[t._v("render")]),t._v(")，其实就是渲染函数的性能，或者说渲染函数执行且生成虚拟DOM("),n("code",[t._v("vnode")]),t._v(")的性能")]),n("li",[t._v("4、打补丁("),n("code",[t._v("patch")]),t._v(")，将虚拟DOM渲染为真实DOM的性能")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那么大家可能比较关心如何查看追踪到的性能数据，很简单，如下图，打开 "),s("code",[this._v("chrome")]),this._v(" 开发者工具即可查看：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://ovjvjtt4l.bkt.clouddn.com/2017-09-29-022249.jpg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如上图所示，这是我们本节这个小例子所追踪到的性能数据，在实际开发中 "),s("code",[this._v("Vue")]),this._v(" 的各个阶段要做的工作肯定要复杂的多，如果能够很好的利用这些性能数据，将会为你提供很大的改进意见。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// a flag to avoid this being observed")]),t._v("\nvm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isVue "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// merge options")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// optimize internal component instantiation")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// since dynamic options merging is pretty slow, and none of the")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// internal component options needs special treatment.")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initInternalComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("mergeOptions")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("resolveConstructorOptions")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    vm\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* istanbul ignore else */")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initProxy")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_renderProxy "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// expose real self")]),t._v("\nvm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_self "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n"),n("span",{attrs:{class:"token function"}},[t._v("initLifecycle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initEvents")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initRender")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'beforeCreate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initInjections")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// resolve injections before data/props")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initState")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initProvide")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'created'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("上面的代码是那两段性能追踪的代码之间全部的内容，我们逐一分析，首先在 "),n("code",[t._v("Vue")]),t._v(" 实例上添加 "),n("code",[t._v("_isVue")]),t._v(" 属性，并设置其值为 "),n("code",[t._v("true")]),t._v("。目的是用来标识一个对象是 "),n("code",[t._v("Vue")]),t._v(" 实例，即如果发现一个对象拥有 "),n("code",[t._v("_isVue")]),t._v(" 属性并且其值为 "),n("code",[t._v("true")]),t._v("，那么就代表该对象是 "),n("code",[t._v("Vue")]),t._v(" 实例。这样可以避免该对象被响应系统观测（其实在其他地方也有用到，但是宗旨都是一样的，这个属性就是用来告诉你：我不是普通的对象，我是Vue实例）。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// merge options")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// optimize internal component instantiation")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// since dynamic options merging is pretty slow, and none of the")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// internal component options needs special treatment.")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initInternalComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("mergeOptions")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("resolveConstructorOptions")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        vm\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("上面的代码是一段 "),n("code",[t._v("if")]),t._v(" 分支语句，条件是："),n("code",[t._v("options && options._isComponent")]),t._v("，其中 "),n("code",[t._v("options")]),t._v(" 就是我们调用 "),n("code",[t._v("Vue")]),t._v(" 时传递的参数选项，但 "),n("code",[t._v("options._isComponent")]),t._v(" 是什么鬼？我们知道在本节的例子中我们的 "),n("code",[t._v("options")]),t._v(" 对象只有两个属性 "),n("code",[t._v("el")]),t._v(" 和 "),n("code",[t._v("data")]),t._v("，并且在 "),n("code",[t._v("Vue")]),t._v(" 的官方文档中你也找不到关于 "),n("code",[t._v("_isComponent")]),t._v(" 这个选项的介绍，其实我相信大部分同学都已经知道，这是一个内部选项。而事实也确实是这样，这个内部选项是在 "),n("code",[t._v("Vue")]),t._v(" 创建组件的时候才会有的，为了不牵涉太多内容导致大家头晕，这里暂时不介绍其相关内容。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("根据本节的例子，上面的代码必然会走 "),s("code",[this._v("else")]),this._v(" 分支，也就是这段代码：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("mergeOptions")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("resolveConstructorOptions")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    vm\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("这段代码在 "),n("code",[t._v("Vue")]),t._v(" 实例上添加了 "),n("code",[t._v("$options")]),t._v(" 属性，在 "),n("code",[t._v("Vue")]),t._v(" 的官方文档中，你能够查看到 "),n("code",[t._v("$options")]),t._v(" 属性的作用，这个属性用于当前 "),n("code",[t._v("Vue")]),t._v(" 的初始化，什么意思呢？大家要注意我们现在的阶段处于 "),n("code",[t._v("_init()")]),t._v(" 方法中，在 "),n("code",[t._v("_init()")]),t._v(" 方法的内部大家可以看到一系列 "),n("code",[t._v("init*")]),t._v(" 的方法，比如：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("initLifecycle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initEvents")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initRender")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'beforeCreate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initInjections")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// resolve injections before data/props")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initState")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("initProvide")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'created'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("而这些方法才是真正起作用的一些初始化方法，大家可以找到这些方法看一看，在这些初始化方法中，无一例外的都使用到了实例的 "),n("code",[t._v("$options")]),t._v(" 属性，即 "),n("code",[t._v("vm.$options")]),t._v("。所以 "),n("code",[t._v("$options")]),t._v(" 这个属性的的确确是用于 "),n("code",[t._v("Vue")]),t._v(" 实例初始化的，只不过在初始化之前，我们需要一些手段来产生 "),n("code",[t._v("$options")]),t._v(" 属性，而这就是 "),n("code",[t._v("mergeOptions")]),t._v(" 函数的作用，接下来我们就来看看 "),n("code",[t._v("mergeOptions")]),t._v(" 都做了些什么，又有什么意义。")])}],!1,null,null,null);s.default=e.exports}}]);