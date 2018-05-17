(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueParallaxy", [], factory);
	else if(typeof exports === 'object')
		exports["VueParallaxy"] = factory();
	else
		root["VueParallaxy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Parallax = __webpack_require__(1);

	var _Parallax2 = _interopRequireDefault(_Parallax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _Parallax2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	function injectStyle (ssrContext) {
	  if (disposed) return
	  __webpack_require__(2)
	}
	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(9),
	  /* styles */
	  injectStyle,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kravchyshyn/Projects/vue-parallax/src/components/Parallax.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Parallax.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0f7fad62", Component.options)
	  } else {
	    hotAPI.reload("data-v-0f7fad62", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("2538d124", content, false, {});
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f7fad62\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Parallax.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f7fad62\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?sourceMap!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Parallax.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)(true);
	// imports


	// module
	exports.push([module.id, "\n.Masthead {\n  position: relative;\n  min-height: 21.875rem;\n  scroll-behavior: smooth;\n  overflow: hidden;\n  z-index: -1;\n}\n@media screen and (min-width: 48rem) {\n.Masthead {\n      min-height: 100vh;\n}\n}\n.Masthead__image {\n    width: 100%;\n    overflow: hidden;\n    height: 120%;\n}\n.Masthead__image > img {\n      height: 100%;\n      max-width: none;\n      width: 100%;\n      -o-object-fit: cover;\n      object-fit: cover;\n      -o-object-position: top;\n      object-position: top;\n      font-family: \"object-fit: cover; object-position: top\";\n}\n.Masthead__image.is-parallax {\n      left: 0;\n      position: absolute;\n      will-change: transform;\n      right: 0;\n      top: 0;\n}\n.Masthead__image.is-parallax > img {\n        height: 100%;\n        max-width: none;\n        width: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n        -o-object-position: top;\n        object-position: top;\n        font-family: \"object-fit: cover; object-position: top\";\n}\n.Masthead__image.is-fixed {\n      position: fixed;\n      will-change: transform;\n}\n.Masthead__image.is-fixed > img {\n        height: 100vh;\n        max-width: none;\n}\n", "", {"version":3,"sources":["/Users/kravchyshyn/Projects/vue-parallax/src/components/Parallax.vue"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;EACxB,iBAAiB;EACjB,YAAY;CACb;AACD;AACA;MACM,kBAAkB;CACvB;CACA;AACD;IACI,YAAY;IACZ,iBAAiB;IACjB,aAAa;CAChB;AACD;MACM,aAAa;MACb,gBAAgB;MAChB,YAAY;MACZ,qBAAqB;MACrB,kBAAkB;MAClB,wBAAwB;MACxB,qBAAqB;MACrB,uDAAuD;CAC5D;AACD;MACM,QAAQ;MACR,mBAAmB;MACnB,uBAAuB;MACvB,SAAS;MACT,OAAO;CACZ;AACD;QACQ,aAAa;QACb,gBAAgB;QAChB,YAAY;QACZ,qBAAqB;QACrB,kBAAkB;QAClB,wBAAwB;QACxB,qBAAqB;QACrB,uDAAuD;CAC9D;AACD;MACM,gBAAgB;MAChB,uBAAuB;CAC5B;AACD;QACQ,cAAc;QACd,gBAAgB;CACvB","file":"Parallax.vue","sourcesContent":["\n.Masthead {\n  position: relative;\n  min-height: 21.875rem;\n  scroll-behavior: smooth;\n  overflow: hidden;\n  z-index: -1;\n}\n@media screen and (min-width: 48rem) {\n.Masthead {\n      min-height: 100vh;\n}\n}\n.Masthead__image {\n    width: 100%;\n    overflow: hidden;\n    height: 120%;\n}\n.Masthead__image > img {\n      height: 100%;\n      max-width: none;\n      width: 100%;\n      -o-object-fit: cover;\n      object-fit: cover;\n      -o-object-position: top;\n      object-position: top;\n      font-family: \"object-fit: cover; object-position: top\";\n}\n.Masthead__image.is-parallax {\n      left: 0;\n      position: absolute;\n      will-change: transform;\n      right: 0;\n      top: 0;\n}\n.Masthead__image.is-parallax > img {\n        height: 100%;\n        max-width: none;\n        width: 100%;\n        -o-object-fit: cover;\n        object-fit: cover;\n        -o-object-position: top;\n        object-position: top;\n        font-family: \"object-fit: cover; object-position: top\";\n}\n.Masthead__image.is-fixed {\n      position: fixed;\n      will-change: transform;\n}\n.Masthead__image.is-fixed > img {\n        height: 100vh;\n        max-width: none;\n}\n"],"sourceRoot":""}]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function(useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if(item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}

		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

		return '/*# ' + data + ' */';
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}
	var options = null
	var ssrIdKey = 'data-vue-ssr-id'

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction, _options) {
	  isProduction = _isProduction

	  options = _options || {}

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }
	  if (options.ssrId) {
	    styleElement.setAttribute(ssrIdKey, obj.id)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  injectStyles,
	  scopeId,
	  moduleIdentifier /* server only */
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  var hook
	  if (moduleIdentifier) { // server build
	    hook = function (context) {
	      // 2.3 injection
	      context =
	        context || // cached call
	        (this.$vnode && this.$vnode.ssrContext) || // stateful
	        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
	      // 2.2 with runInNewContext: true
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__
	      }
	      // inject component styles
	      if (injectStyles) {
	        injectStyles.call(this, context)
	      }
	      // register component module identifier for async chunk inferrence
	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier)
	      }
	    }
	    // used by ssr in case component is cached and beforeCreate
	    // never gets called
	    options._ssrRegister = hook
	  } else if (injectStyles) {
	    hook = injectStyles
	  }

	  if (hook) {
	    var functional = options.functional
	    var existing = functional
	      ? options.render
	      : options.beforeCreate
	    if (!functional) {
	      // inject component registration as beforeCreate hook
	      options.beforeCreate = existing
	        ? [].concat(existing, hook)
	        : [hook]
	    } else {
	      // register for functioal component in vue file
	      options.render = function renderWithStyleInjection (h, context) {
	        hook.call(context)
	        return existing(h, context)
	      }
	    }
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    parallax: {
	      default: true,
	      type: Boolean
	    },
	    speedFactor: {
	      default: 0.15,
	      type: Number
	    },
	    fixed: {
	      default: false,
	      type: Boolean
	    },
	    breakpoint: {
	      default: '(min-width: 968px)',
	      type: String
	    },
	    sectionHeight: {
	      default: 70,
	      type: Number,
	      required: false
	    },
	    sectionClass: {
	      type: String,
	      default: 'Masthead'
	    },
	    containerClass: {
	      type: String,
	      default: 'Masthead__image'
	    },
	    parallaxClass: {
	      type: String,
	      default: 'is-parallax'
	    },
	    fixedClass: {
	      type: String,
	      default: 'is-fixed'
	    },
	    direction: {
	      type: String,
	      default: 'up'
	    }
	  },

	  data: function data() {
	    return {
	      el: null,
	      mediaQuery: null
	    };
	  },
	  mounted: function mounted() {
	    if (this.parallax && !this.fixed) {
	      this.el = this.$refs.parallax;
	      window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
	        setTimeout(f, 1000 / 60);
	      };
	      this.init();
	    }
	  },


	  methods: {
	    animateElement: function animateElement() {
	      var animationValue = this.$refs.block.getBoundingClientRect().top * this.speedFactor;

	      this.el.style.transform = 'translate3d(0, ' + animationValue * this.directionValue + 'px ,0)';
	    },
	    scrollHandler: function scrollHandler() {
	      var _this = this;

	      window.requestAnimationFrame(function () {
	        if (_this.isInView(_this.$refs.parallax)) {
	          _this.animateElement();
	        }
	      });
	    },
	    isInView: function isInView(el) {
	      var rect = el.getBoundingClientRect();

	      return rect.bottom >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
	    },
	    setupListener: function setupListener() {
	      if (this.mediaQuery.matches) {
	        window.addEventListener('scroll', this.scrollHandler, false);
	      } else {
	        window.removeEventListener('scroll', this.scrollHandler, false);
	      }
	    },
	    init: function init() {
	      this.mediaQuery = window.matchMedia(this.breakpoint);

	      if (this.mediaQuery) {
	        this.mediaQuery.addListener(this.setupListener);
	        this.setupListener();
	      }
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('scroll', this.scrollHandler, false);
	  },


	  computed: {
	    directionValue: function directionValue() {
	      return this.direction === 'down' ? +1 : -1;
	    }
	  }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "block",
	    class: [_vm.sectionClass],
	    style: ({
	      height: _vm.sectionHeight + 'vh'
	    })
	  }, [_c('div', {
	    ref: "parallax",
	    class: [_vm.parallax ? _vm.parallaxClass : '', _vm.fixed ? _vm.fixedClass : '', _vm.containerClass]
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0f7fad62", module.exports)
	  }
	}

/***/ })
/******/ ])
});
;