webpackJsonp([4],{

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(31)

	/* script */
	__vue_exports__ = __webpack_require__(33)

	/* template */
	var __vue_template__ = __webpack_require__(35)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/vincent/Desktop/wws/vuex/vuex-demo/vue2-demo/src/pages/index/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4aa84a8e"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4aa84a8e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4aa84a8e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/.0.25.0@css-loader/index.js!../../../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-4aa84a8e&scoped=true!../../../node_modules/.2.2.3@less-loader/index.js!../../../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
				var newContent = require("!!../../../node_modules/.0.25.0@css-loader/index.js!../../../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-4aa84a8e&scoped=true!../../../node_modules/.2.2.3@less-loader/index.js!../../../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "\n.login-msg[data-v-4aa84a8e] {\n  padding: 50px;\n  text-align: center;\n}\n.msg[data-v-4aa84a8e] {\n  padding: 50px;\n  text-align: center;\n  font-size: 20px;\n  color: red;\n}\n", ""]);

	// exports


/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vuex = __webpack_require__(17);

	var _logo = __webpack_require__(34);

	var _logo2 = _interopRequireDefault(_logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		data: function data() {
			return {
				logo: _logo2.default
			};
		},

		computed: (0, _vuex.mapState)({ user: function user(state) {
				return state.user;
			} })
	};

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "logo.png";

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('v-header', {
	    attrs: {
	      "title": "首页"
	    }
	  }, [(_vm.user.id) ? _c('router-link', {
	    attrs: {
	      "to": "/home"
	    },
	    slot: "right"
	  }, [_vm._v(_vm._s(_vm.user.name))]) : _vm._e()], 1), _vm._v(" "), (!_vm.user.id) ? _c('div', {
	    staticClass: "login-msg"
	  }, [_c('router-link', {
	    attrs: {
	      "to": "/login"
	    }
	  }, [_vm._v("你还未登录，请先登录")])], 1) : _vm._e(), _vm._v(" "), (_vm.user.id) ? _c('div', {
	    staticClass: "msg"
	  }, [_c('img', {
	    attrs: {
	      "width": "50",
	      "src": _vm.logo,
	      "alt": ""
	    }
	  }), _vm._v(" "), _c('br'), _vm._v("\n\t\t哈哈，恭喜你已经入坑Vue2\n\t")]) : _vm._e()], 1)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4aa84a8e", module.exports)
	  }
	}

/***/ }

});