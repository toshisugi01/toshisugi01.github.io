(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://toshisugi01.github.io/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  * {\n    -webkit-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n  }\n  body {\n    font-family: \'Oswald\', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n'], ['\n  * {\n    -webkit-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n  }\n  body {\n    font-family: \'Oswald\', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHotLoader = __webpack_require__(7);

var _Navi = __webpack_require__(8);

var _Navi2 = _interopRequireDefault(_Navi);

var _Home = __webpack_require__(10);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(12);

var _About2 = _interopRequireDefault(_About);

var _Skills = __webpack_require__(13);

var _Skills2 = _interopRequireDefault(_Skills);

var _Contact = __webpack_require__(14);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'App__Wrapper'
})(['height:100%;width:100%;']);

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      sectionHeights: {
        home: 0,
        about: 0,
        services: 0,
        skills: 0,
        contact: 0
      }
    };
    _this.resizeTimer;
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.setHeights.bind(this));
      this.setHeights();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setHeights.bind(this));
    }
  }, {
    key: 'setHeights',
    value: function setHeights() {
      var _this2 = this;

      if (this.resizeTimer !== false) {
        clearTimeout(this.resizeTimer);
      }
      this.resizeTimer = setTimeout(function () {
        _this2.setState({
          sectionHeights: {
            home: _reactDom2.default.findDOMNode(_this2.refs.homeSection).clientHeight,
            about: _reactDom2.default.findDOMNode(_this2.refs.aboutSection).clientHeight,
            skills: _reactDom2.default.findDOMNode(_this2.refs.skillsSection).clientHeight,
            contact: _reactDom2.default.findDOMNode(_this2.refs.contactSection).clientHeight
          }
        });
      }, 200);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStatic.Router,
        { ref: 'router' },
        _react2.default.createElement(
          Wrapper,
          null,
          _react2.default.createElement(_Home2.default, { id: 'home', ref: 'homeSection' }),
          _react2.default.createElement(_Navi2.default, { heights: this.state.sectionHeights }),
          _react2.default.createElement(_About2.default, { id: 'about', ref: 'aboutSection' }),
          _react2.default.createElement(_Skills2.default, { id: 'skills', ref: 'skillsSection' }),
          _react2.default.createElement(_Contact2.default, { id: 'contact', ref: 'contactSection' })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _smoothScroll = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Position = {
  Home: "home",
  About: "about",
  Services: "services",
  Skills: "skills",
  Contact: "contact"
};

var Menu = (0, _styledComponents2.default)(_reactStatic.Link).withConfig({
  displayName: 'Navi__Menu'
})(['text-decoration:none;color:white;text-transform:uppercase;border-top:1px solid transparent;border-bottom:1px solid transparent;border-left:', ';border-right:', ';display:block;padding:.5em;position:relative;-webkit-transition:all 0.4s cubic-bezier(.5,.24,0,1);transition:all 0.4s cubic-bezier(.5,.24,0,1);&:before{content:\'\';position:absolute;left:0px;bottom:0px;z-index:-1;width:', ';height:1px;background:white;box-shadow:inset 0px 0px 0px white;display:block;-webkit-transition:all 0.4s cubic-bezier(.5,.24,0,1);transition:all 0.4s cubic-bezier(.5,.24,0,1);}&:after{content:\'\';position:absolute;right:0px;top:0px;z-index:-1;width:', ';height:1px;background:white;-webkit-transition:all 0.4s cubic-bezier(.5,.24,0,1);transition:all 0.4s cubic-bezier(.5,.24,0,1);}'], function (props) {
  return props.checked ? '1px solid white' : '1px solid transparent';
}, function (props) {
  return props.checked ? '1px solid white' : '1px solid transparent';
}, function (props) {
  return props.checked ? '100%' : '0%';
}, function (props) {
  return props.checked ? '100%' : '0%';
});
var Nav = _styledComponents2.default.nav.withConfig({
  displayName: 'Navi__Nav'
})(['bottom:0;width:100%;height:70px;background-color:rgba(0,0,0,0.2);position:', ';top:', ';z-index:', ';transform:', ';'], function (props) {
  return props.fixed ? 'fixed' : 'absolute';
}, function (props) {
  return props.fixed ? 0 : 'auto';
}, function (props) {
  return props.fixed ? 1 : 0;
}, function (props) {
  return props.fixed ? 'translate3d(0, 0, 0)' : 'none';
});
var List = _styledComponents2.default.li.withConfig({
  displayName: 'Navi__List'
})(['position:relative;']);
var Lists = _styledComponents2.default.ul.withConfig({
  displayName: 'Navi__Lists'
})(['display:flex;justify-content:space-around;list-style:none;padding:0;']);

var Navi = function (_React$Component) {
  _inherits(Navi, _React$Component);

  function Navi(props) {
    _classCallCheck(this, Navi);

    var _this = _possibleConstructorReturn(this, (Navi.__proto__ || Object.getPrototypeOf(Navi)).call(this, props));

    _this.state = {
      fixed: false,
      position: Position.Home
    };
    return _this;
  }

  _createClass(Navi, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      var navHeight = window.innerHeight - 70;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var state = { fixed: scrollTop > navHeight };
      var home = this.props.heights.home;
      var about = home + this.props.heights.about - 1;
      var skills = about + this.props.heights.skills - 1;
      var contact = skills + this.props.heights.contact - 1;
      if (scrollTop < home) {
        state.position = Position.Home;
      } else if (scrollTop >= home && scrollTop < about) {
        state.position = Position.About;
      } else if (scrollTop >= about && scrollTop < skills) {
        state.position = Position.Skills;
      } else if (scrollTop >= skills && scrollTop < contact) {
        state.position = Position.Contact;
      }
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Nav,
        { fixed: this.state.fixed },
        _react2.default.createElement(
          Lists,
          null,
          _react2.default.createElement(
            List,
            null,
            _react2.default.createElement(
              Menu,
              { to: '#home', checked: this.state.position == Position.Home },
              'Home'
            )
          ),
          _react2.default.createElement(
            List,
            null,
            _react2.default.createElement(
              Menu,
              { to: '#about', checked: this.state.position == Position.About },
              'About'
            )
          ),
          _react2.default.createElement(
            List,
            null,
            _react2.default.createElement(
              Menu,
              { to: '#skills', checked: this.state.position == Position.Skills },
              'Skills'
            )
          ),
          _react2.default.createElement(
            List,
            null,
            _react2.default.createElement(
              Menu,
              { to: '#contact', checked: this.state.position == Position.Contact },
              'Contact'
            )
          )
        )
      );
    }
  }]);

  return Navi;
}(_react2.default.Component);

exports.default = Navi;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("smooth-scroll");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeBox = _styledComponents2.default.div.withConfig({
  displayName: 'Home__HomeBox'
})(['position:relative;height:100vh;width:100%;top:0;left:0;display:inline-block;text-align:center;']);
var Name = _styledComponents2.default.h2.withConfig({
  displayName: 'Home__Name'
})(['margin:30vh auto 0 auto;text-align:center;color:white;font-family:fantasy,serif;letter-spacing:.3em;font-size:35px;']);
var Job = _styledComponents2.default.p.withConfig({
  displayName: 'Home__Job'
})(['margin:1em auto 0 auto;text-align:center;color:white;font-size:24px;text-transform:uppercase;']);
var sdb = (0, _styledComponents.keyframes)(['0%{transform:rotate(-45deg) translate(0,0);-webkit-transform:rotate(-45deg) translate(0,0);opacity:0;}50%{opacity:1;}100%{transform:rotate(-45deg) translate(-20px,20px);-webkit-transform:rotate(-45deg) translate(-20px,20px);opacity:0;}']);
var Scroll = _styledComponents2.default.div.withConfig({
  displayName: 'Home__Scroll'
})(['position:absolute;margin-top:70px;left:50%;width:24px;height:24px;margin-left:-12px;border-left:1px solid #fff;border-bottom:1px solid #fff;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:', ' 1.5s infinite;animation:', ' 1.5s infinite;box-sizing:border-box;'], sdb, sdb);

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var isBrowser = typeof window !== 'undefined';
      var bubbly = isBrowser ? __webpack_require__(11) : undefined;
      var box = _reactDom2.default.findDOMNode(this.refs.homebox);
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.innerHTML = 'bubbly();';
      box.appendChild(s);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        HomeBox,
        { id: this.props.id, ref: 'homebox' },
        _react2.default.createElement(
          Name,
          null,
          'Toshiaki Sugiyama'
        ),
        _react2.default.createElement(
          Job,
          null,
          'SYSTEM ENGINEER / CONSULTANT'
        ),
        _react2.default.createElement(Scroll, null)
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("bubbly-bg");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin: 15px 0;\n'], ['\n  margin: 15px 0;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//

var AboutBox = _styledComponents2.default.div.withConfig({
  displayName: 'About__AboutBox'
})(['position:relative;min-height:100vh;width:100%;top:0;left:0;display:inline-block;text-align:center;']);
var Name = _styledComponents2.default.div.withConfig({
  displayName: 'About__Name'
})(['height:50vh;width:100%;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;flex-direction:row;background-color:rgba(200,0,0,0.4);color:white;font-size:18px;font-family:fantasy,serif;letter-spacing:.3em;font-size:35px;']);
var FlexBox = _styledComponents2.default.div.withConfig({
  displayName: 'About__FlexBox'
})(['min-height:50vh;margin:auto;display:-webkit-flex;display:flex;-webkit-align-items:start;align-items:start;-webkit-flex-direction:row;flex-direction:row;flex-wrap:wrap-reverse;background-color:white;']);
var Career = _styledComponents2.default.ul.withConfig({
  displayName: 'About__Career'
})(['min-width:300px;margin:30px;font-size:12px;text-align:left;list-style-type:none;flex:1;padding:0;']);
var YearItem = _styledComponents2.default.li.withConfig({
  displayName: 'About__YearItem'
})(['margin-top:10px;']);
var Year = _styledComponents2.default.span.withConfig({
  displayName: 'About__Year'
})(['display:inline-block;width:50px;color:navy;']);
var Event = _styledComponents2.default.span.withConfig({
  displayName: 'About__Event'
})(['min-width:200px;']);
var Introduction = _styledComponents2.default.div.withConfig({
  displayName: 'About__Introduction'
})(['min-width:400px;text-align:left;margin-left:30px;margin-bottom:50px;margin-top:30px;font-size:14px;flex:1;']);
var Sentence = _styledComponents2.default.p.withConfig({
  displayName: 'About__Sentence'
})(['margin:0;']);
var Header = Sentence.extend(_templateObject);

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About(props) {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

    _this.state = {
      header: ['スギヤマ　トシアキ', 'システムエンジニア / コンサルタント'],
      sentence: ['大阪府生まれ東京都育ち。', '早稲田大学経営システム工学科卒業。', 'ERPパッケージソフトウェアの企画・開発から', 'ITエンジニアとしての経歴をスタートし、', 'その後システムコンサルタントを経て', '現在はフリーランスとして活動しています。']
    };
    return _this;
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        AboutBox,
        { id: this.props.id },
        _react2.default.createElement(
          Name,
          null,
          'About Me'
        ),
        _react2.default.createElement(
          FlexBox,
          null,
          _react2.default.createElement(Careers, null),
          _react2.default.createElement(
            Introduction,
            null,
            this.state.header.map(function (text, idx) {
              return _react2.default.createElement(
                Header,
                { key: 'header' + idx },
                text
              );
            }),
            this.state.sentence.map(function (text, idx) {
              return _react2.default.createElement(
                Sentence,
                { key: 'sentence' + idx },
                text
              );
            })
          )
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

exports.default = About;

var Careers = function (_React$Component2) {
  _inherits(Careers, _React$Component2);

  function Careers(props) {
    _classCallCheck(this, Careers);

    var _this2 = _possibleConstructorReturn(this, (Careers.__proto__ || Object.getPrototypeOf(Careers)).call(this, props));

    _this2.state = {
      careers: [{ year: '1983', event: 'Born in Osaka, Japan' }, { year: '2001', event: 'Entered Waseda Univ.' }, { year: '2005', event: 'Graduated Waseda Univ.' }, { year: '2005', event: 'Works Applications Inc.' }, { year: '2010', event: 'Round the World Trip' }, { year: '2014', event: 'Pain de mie Ltd.' }, { year: '2015', event: 'Accenture Japan Ltd.' }, { year: '2018', event: 'Become Freelance' }]
    };
    return _this2;
  }

  _createClass(Careers, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Career,
        null,
        this.state.careers.map(function (career, idx) {
          return _react2.default.createElement(
            YearItem,
            { key: 'yearitem' + idx },
            _react2.default.createElement(
              Year,
              { key: 'year' + idx },
              career.year
            ),
            _react2.default.createElement(
              Event,
              { key: 'event' + idx },
              career.event
            )
          );
        })
      );
    }
  }]);

  return Careers;
}(_react2.default.Component);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//

var SKILL_LIST = [{
  title: "Backend Skills",
  values: [{ name: "Java" }, { name: "Node.js" }, { name: "C#" }, { name: "Oracle" }, { name: "DB2" }, { name: "MySQL" }, { name: "PostgreSQL" }, { name: "MariaDB" }, { name: "Windows" }, { name: "Mac" }, { name: "Linux" }, { name: "AWS" }, { name: "Salesforce" }, { name: "Jenkins" }, { name: "Vagrant" }] }, {
  title: "Frontend Skills",
  values: [{ name: "HTML / CSS" }, { name: "Javascript" }, { name: "jQuery" }, { name: "Angular" }, { name: "TypeScript" }, { name: "React" }, { name: "Cordova" }] }];

var SkillsBox = _styledComponents2.default.div.withConfig({
  displayName: 'Skills__SkillsBox'
})(['position:relative;min-height:100vh;width:100%;top:0;left:0;display:inline-block;text-align:center;']);
var Name = _styledComponents2.default.div.withConfig({
  displayName: 'Skills__Name'
})(['height:50vh;width:100%;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;flex-direction:row;background-color:rgba(238,255,7,0.4);color:white;font-size:18px;font-family:fantasy,serif;letter-spacing:.3em;font-size:35px;']);
var FlexBox = _styledComponents2.default.div.withConfig({
  displayName: 'Skills__FlexBox'
})(['margin:auto;display:-webkit-flex;display:flex;-webkit-align-items:start;align-items:start;-webkit-flex-flow:row wrap;flex-flow:row wrap;-webkit-justify-content:center;justify-content:center;background-color:white;']);
var SkillsContents = _styledComponents2.default.div.withConfig({
  displayName: 'Skills__SkillsContents'
})(['min-width:300px;margin:1em auto;padding:0.5em 1em;border:solid 3px #95ccff;border-radius:8px;background-color:white;']);
var SkillTitle = _styledComponents2.default.span.withConfig({
  displayName: 'Skills__SkillTitle'
})(['top:-13px;left:10px;padding:0 9px;line-height:1;background:#FFF;color:#95ccff;font-weight:bold;']);
var SkillItems = _styledComponents2.default.ul.withConfig({
  displayName: 'Skills__SkillItems'
})(['list-style-type:none;min-width:160px;']);
var SkillItem = _styledComponents2.default.li.withConfig({
  displayName: 'Skills__SkillItem'
})(['margin-left:30px;font-size:13px;text-align:left;']);

var Skills = function (_React$Component) {
  _inherits(Skills, _React$Component);

  function Skills(props) {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).call(this, props));
  }

  _createClass(Skills, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SkillsBox,
        { id: this.props.id },
        _react2.default.createElement(
          Name,
          null,
          'My Skills'
        ),
        _react2.default.createElement(
          FlexBox,
          null,
          SKILL_LIST.map(function (item, idx) {
            return _react2.default.createElement(
              SkillsContents,
              { key: item.title },
              _react2.default.createElement(
                SkillTitle,
                null,
                item.title
              ),
              _react2.default.createElement(
                SkillItems,
                null,
                item.values.map(function (skill, idx) {
                  return _react2.default.createElement(
                    SkillItem,
                    { key: skill.name },
                    skill.name
                  );
                })
              )
            );
          })
        )
      );
    }
  }]);

  return Skills;
}(_react2.default.Component);

exports.default = Skills;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
var Texts = ["If you are interested in me,", "please feel free to contact me."];

var ContactBox = _styledComponents2.default.div.withConfig({
  displayName: 'Contact__ContactBox'
})(['position:relative;min-height:50vh;width:100%;top:0;left:0;display:inline-block;text-align:center;']);
var Name = _styledComponents2.default.div.withConfig({
  displayName: 'Contact__Name'
})(['height:50vh;width:100%;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;flex-direction:row;background-color:rgba(255,105,0,0.4);color:white;font-size:18px;font-family:fantasy,serif;letter-spacing:.3em;font-size:35px;']);
var Sentence = _styledComponents2.default.p.withConfig({
  displayName: 'Contact__Sentence'
})(['padding-top:', ';margin-top:', ';'], function (props) {
  return props.isFirst ? "50px" : 0;
}, function (props) {
  return props.isFirst ? 0 : "16px";
});
var MailButton = _styledComponents2.default.a.withConfig({
  displayName: 'Contact__MailButton'
})(['border-radius:4px;display:inline-block;margin-top:30px;width:200px;height:54px;text-decoration:none;line-height:54px;outline:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .3s;transition:all .3s;background-color:#333;color:#fff;border:1px solid black;cursor:pointer;&:before,&:after{position:absolute;z-index:-1;display:block;content:\'\';}&:hover{background-color:white;color:black;}']);
var Mail = _styledComponents2.default.span.withConfig({
  displayName: 'Contact__Mail'
})(['border-radius:3px;display:inline-block;position:relative;width:20px;height:16px;margin:0 10px 0 0;padding:0;background:', ';-webkit-transition:all .3s;transition:all .3s;&:before{display:block;content:"";position:absolute;top:0;left:0;width:0;height:0;border:10px solid transparent;border-top-color:', ';-webkit-transition:all .3s;transition:all .3s;}&:after{display:block;content:"";position:absolute;top:0;left:0;width:0;height:0;left:2px;border:8px solid transparent;border-top-color:', ';-webkit-transition:all .3s;transition:all .3s;}'], function (props) {
  return props.hover ? 'black' : 'white';
}, function (props) {
  return props.hover ? 'white' : 'black';
}, function (props) {
  return props.hover ? 'black' : 'white';
});
var Box = _styledComponents2.default.div.withConfig({
  displayName: 'Contact__Box'
})(['background-color:white;height:50vh;']);

var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact(props) {
    _classCallCheck(this, Contact);

    var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));

    _this.state = { hover: false };
    return _this;
  }

  _createClass(Contact, [{
    key: 'mouseHandler',
    value: function mouseHandler(isMouseEnter) {
      this.setState({ hover: isMouseEnter });
    }
  }, {
    key: 'mailHandler',
    value: function mailHandler() {
      location.href = 'mailto:frusion.mail@gmail.com';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        ContactBox,
        { id: this.props.id },
        _react2.default.createElement(
          Name,
          null,
          'Contact Me'
        ),
        _react2.default.createElement(
          Box,
          null,
          Texts.map(function (text, idx) {
            return _react2.default.createElement(
              Sentence,
              { key: text, isFirst: idx == 0 },
              text
            );
          }),
          _react2.default.createElement(
            MailButton,
            {
              onMouseEnter: this.mouseHandler.bind(this, true),
              onMouseLeave: this.mouseHandler.bind(this, false),
              onClick: this.mailHandler },
            _react2.default.createElement(Mail, { hover: this.state.hover }),
            "Mail me"
          )
        )
      );
    }
  }]);

  return Contact;
}(_react2.default.Component);

exports.default = Contact;

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.4bf5503a.js.map