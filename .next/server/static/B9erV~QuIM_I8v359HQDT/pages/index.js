module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(2);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(4);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.jsx



/* harmony default export */ var Meta = (function () {
  return external_react_default.a.createElement("div", {
    className: "jsx-3374884864"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "og:type",
    content: "website",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    name: "og:url",
    content: "http://bitfaced.com",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    name: "og:title",
    content: "BitFaced Podcast",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    name: "msvalidate.01",
    content: "397DC1B89F47E94AE576233E3E3D298B",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    name: "google-site-verification",
    content: "Skr1DY0RuQrohFqXu5sk0WcMzZp-OVC7inox9ihM0ng",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    name: "Description",
    content: "BitFaced - The greatest pop culture podcast no one is listening to",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    name: "mobile-web-app-capable",
    content: "yes",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    name: "author",
    content: "Eric G. Hollis & Tyler R. Glaze",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
    className: "jsx-3374884864"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-3374884864"
  })), external_react_default.a.createElement(style_default.a, {
    styleId: "3374884864",
    css: ["body,html,#__next{width:100%;height:100%;overflow:hidden;padding:0px;margin:0px;}", "body{background:url(https://i.pinimg.com/originals/37/63/61/37636169a277903f0ef4a794202a08c7.gif);background-size:cover;background-position-y:-180px;}"]
  }));
});
// EXTERNAL MODULE: external "evergreen-ui"
var external_evergreen_ui_ = __webpack_require__(1);

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(3);
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_);

// CONCATENATED MODULE: ./components/content/Home.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var logoStylesPortrait = {
  width: '100%',
  position: 'absolute',
  bottom: '210px'
};
var logoStylesLandscape = {
  width: '20%',
  marginLeft: '40%',
  position: 'absolute',
  bottom: '215px'
};
var logoStylesBigLandscape = {
  width: '60%',
  marginLeft: '20%',
  position: 'absolute',
  bottom: '215px'
};

var Home_HomeContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HomeContent, _React$Component);

  function HomeContent(props) {
    var _this;

    _classCallCheck(this, HomeContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomeContent).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(HomeContent, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_responsive_default.a, {
        orientation: "portrait"
      }, external_react_default.a.createElement("img", {
        id: "bitfaced-logo-img",
        style: logoStylesPortrait,
        alt: "BitFaced Podcast Logo with Eric and Tyler",
        src: "http://koboldcon.com/images/logo.png"
      })), external_react_default.a.createElement(external_react_responsive_default.a, {
        orientation: "landscape",
        maxDeviceHeight: 767
      }, external_react_default.a.createElement("img", {
        id: "bitfaced-logo-img",
        style: logoStylesLandscape,
        alt: "BitFaced Podcast Logo with Eric and Tyler",
        src: "http://koboldcon.com/images/logo.png"
      })), external_react_default.a.createElement(external_react_responsive_default.a, {
        orientation: "landscape",
        minDeviceHeight: 768
      }, external_react_default.a.createElement("img", {
        id: "bitfaced-logo-img",
        style: logoStylesBigLandscape,
        alt: "BitFaced Podcast Logo with Eric and Tyler",
        src: "http://koboldcon.com/images/logo.png"
      })));
    }
  }]);

  return HomeContent;
}(external_react_default.a.Component);

/* harmony default export */ var Home = (Home_HomeContent);
// CONCATENATED MODULE: ./components/content/About.jsx
function About_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { About_typeof = function _typeof(obj) { return typeof obj; }; } else { About_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return About_typeof(obj); }

function About_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function About_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function About_createClass(Constructor, protoProps, staticProps) { if (protoProps) About_defineProperties(Constructor.prototype, protoProps); if (staticProps) About_defineProperties(Constructor, staticProps); return Constructor; }

function About_possibleConstructorReturn(self, call) { if (call && (About_typeof(call) === "object" || typeof call === "function")) { return call; } return About_assertThisInitialized(self); }

function About_getPrototypeOf(o) { About_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return About_getPrototypeOf(o); }

function About_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) About_setPrototypeOf(subClass, superClass); }

function About_setPrototypeOf(o, p) { About_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return About_setPrototypeOf(o, p); }

function About_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var aboutContainerStyles = {
  width: '80%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  borderRadis: '3px'
};

var About_AboutContent =
/*#__PURE__*/
function (_React$Component) {
  About_inherits(AboutContent, _React$Component);

  function AboutContent(props) {
    var _this;

    About_classCallCheck(this, AboutContent);

    _this = About_possibleConstructorReturn(this, About_getPrototypeOf(AboutContent).call(this, props));

    _defineProperty(About_assertThisInitialized(About_assertThisInitialized(_this)), "onClose", function () {
      var onContentChange = _this.props.onContentChange;
      onContentChange(DEFAULT_CONTENT_NODE);
    });

    _this.state = {};
    return _this;
  }

  About_createClass(AboutContent, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: aboutContainerStyles
      }, external_react_default.a.createElement(external_evergreen_ui_["Dialog"], {
        isShown: true,
        hasCancel: false,
        title: "About BitFaced",
        onCloseComplete: this.onClose,
        confirmLabel: "Back to Home"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_evergreen_ui_["Avatar"], {
        isSolid: true,
        color: "green",
        name: "Bit Faced",
        size: 60
      }), external_react_default.a.createElement(external_evergreen_ui_["Text"], {
        size: 700
      }, "BitFaced"), external_react_default.a.createElement("p", null, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf"), external_react_default.a.createElement("p", null, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf")), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_evergreen_ui_["Avatar"], {
        name: "Eric Hollis",
        size: 60
      }), external_react_default.a.createElement(external_evergreen_ui_["Text"], {
        size: 700
      }, "Eric G. Hollis"), external_react_default.a.createElement("p", null, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf"), external_react_default.a.createElement("p", null, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf")), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_evergreen_ui_["Avatar"], {
        name: "Tyler Glaze",
        size: 60
      }), external_react_default.a.createElement(external_evergreen_ui_["Text"], {
        size: 700
      }, "Tyler Glaze"), external_react_default.a.createElement("p", null, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf"))));
    }
  }]);

  return AboutContent;
}(external_react_default.a.Component);

/* harmony default export */ var About = (About_AboutContent);
// CONCATENATED MODULE: ./components/content/Contact.jsx
function Contact_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Contact_typeof = function _typeof(obj) { return typeof obj; }; } else { Contact_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Contact_typeof(obj); }

function Contact_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Contact_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Contact_createClass(Constructor, protoProps, staticProps) { if (protoProps) Contact_defineProperties(Constructor.prototype, protoProps); if (staticProps) Contact_defineProperties(Constructor, staticProps); return Constructor; }

function Contact_possibleConstructorReturn(self, call) { if (call && (Contact_typeof(call) === "object" || typeof call === "function")) { return call; } return Contact_assertThisInitialized(self); }

function Contact_getPrototypeOf(o) { Contact_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Contact_getPrototypeOf(o); }

function Contact_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Contact_setPrototypeOf(subClass, superClass); }

function Contact_setPrototypeOf(o, p) { Contact_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Contact_setPrototypeOf(o, p); }

function Contact_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Contact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Contact_aboutContainerStyles = {
  width: '80%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  borderRadis: '3px'
};

var Contact_ContactContent =
/*#__PURE__*/
function (_React$Component) {
  Contact_inherits(ContactContent, _React$Component);

  function ContactContent(props) {
    var _this;

    Contact_classCallCheck(this, ContactContent);

    _this = Contact_possibleConstructorReturn(this, Contact_getPrototypeOf(ContactContent).call(this, props));

    Contact_defineProperty(Contact_assertThisInitialized(Contact_assertThisInitialized(_this)), "onClose", function () {
      var onContentChange = _this.props.onContentChange;
      onContentChange(DEFAULT_CONTENT_NODE);
    });

    _this.state = {};
    return _this;
  }

  Contact_createClass(ContactContent, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: Contact_aboutContainerStyles
      }, external_react_default.a.createElement(external_evergreen_ui_["Dialog"], {
        isShown: true,
        hasCancel: false,
        title: "Contact BitFaced",
        onCloseComplete: this.onClose,
        confirmLabel: "Back to Home"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("iframe", {
        title: "fb-page",
        src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbitfacedgames%2F&tabs=messages&width=311&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=1629881623992316",
        width: "311",
        height: "500",
        scrolling: "no",
        allowTransparency: "true",
        allow: "encrypted-media"
      }))));
    }
  }]);

  return ContactContent;
}(external_react_default.a.Component);

/* harmony default export */ var Contact = (Contact_ContactContent);
// CONCATENATED MODULE: ./constants.jsx




var CONTENT_NODES = {
  home: {
    displayName: 'Home',
    component: function component() {
      return external_react_default.a.createElement(Home, null);
    }
  },
  about: {
    displayName: 'About Bitfaced',
    component: function component(onContentChange) {
      return external_react_default.a.createElement(About, {
        onContentChange: onContentChange
      });
    }
  },
  contact: {
    displayName: 'Contact Bitfaced',
    component: function component(onContentChange) {
      return external_react_default.a.createElement(Contact, {
        onContentChange: onContentChange
      });
    }
  }
};
var DEFAULT_CONTENT_NODE = 'home';
var noop = function noop() {};
// CONCATENATED MODULE: ./components/SideMenu.jsx
function SideMenu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SideMenu_typeof = function _typeof(obj) { return typeof obj; }; } else { SideMenu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SideMenu_typeof(obj); }

function SideMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SideMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SideMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) SideMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) SideMenu_defineProperties(Constructor, staticProps); return Constructor; }

function SideMenu_possibleConstructorReturn(self, call) { if (call && (SideMenu_typeof(call) === "object" || typeof call === "function")) { return call; } return SideMenu_assertThisInitialized(self); }

function SideMenu_getPrototypeOf(o) { SideMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SideMenu_getPrototypeOf(o); }

function SideMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SideMenu_setPrototypeOf(subClass, superClass); }

function SideMenu_setPrototypeOf(o, p) { SideMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SideMenu_setPrototypeOf(o, p); }

function SideMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SideMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var SideMenu_SideMenu =
/*#__PURE__*/
function (_React$Component) {
  SideMenu_inherits(SideMenu, _React$Component);

  function SideMenu(props) {
    var _this;

    SideMenu_classCallCheck(this, SideMenu);

    _this = SideMenu_possibleConstructorReturn(this, SideMenu_getPrototypeOf(SideMenu).call(this, props));

    SideMenu_defineProperty(SideMenu_assertThisInitialized(SideMenu_assertThisInitialized(_this)), "onMenuItemClick", function (e) {
      var onContentChange = _this.props.onContentChange;
      onContentChange(e.target.title);

      _this.setState({
        isOpened: false
      });
    });

    SideMenu_defineProperty(SideMenu_assertThisInitialized(SideMenu_assertThisInitialized(_this)), "menuItems", function () {
      return Object.keys(CONTENT_NODES).map(function (content) {
        return external_react_default.a.createElement(external_evergreen_ui_["Paragraph"], {
          onClick: _this.onMenuItemClick,
          margin: 10,
          title: content
        }, CONTENT_NODES[content].displayName);
      });
    });

    SideMenu_defineProperty(SideMenu_assertThisInitialized(SideMenu_assertThisInitialized(_this)), "getNextToggleStatus", function () {
      var isOpened = _this.state.isOpened;
      return !isOpened;
    });

    SideMenu_defineProperty(SideMenu_assertThisInitialized(SideMenu_assertThisInitialized(_this)), "toggleSideMenu", function () {
      var newStatus = _this.getNextToggleStatus();

      _this.setState({
        isOpened: newStatus
      });
    });

    _this.state = {
      isOpened: false,
      menuItems: _this.menuItems()
    };
    return _this;
  }

  SideMenu_createClass(SideMenu, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isOpened = _this$state.isOpened,
          menuItems = _this$state.menuItems;
      var onCloseComplete = isOpened === false ? noop : this.toggleSideMenu;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_evergreen_ui_["SideSheet"], {
        position: external_evergreen_ui_["Position"].TOP,
        isShown: isOpened,
        onCloseComplete: onCloseComplete
      }, menuItems), external_react_default.a.createElement(external_evergreen_ui_["IconButton"], {
        icon: "menu",
        onClick: this.toggleSideMenu
      }));
    }
  }]);

  return SideMenu;
}(external_react_default.a.Component);

/* harmony default export */ var components_SideMenu = (SideMenu_SideMenu);
// CONCATENATED MODULE: ./components/Header.jsx




var iconStyle = {
  padding: 15
};

var Header_Header = function Header(_ref) {
  var onContentChange = _ref.onContentChange;
  return external_react_default.a.createElement("div", {
    style: iconStyle
  }, external_react_default.a.createElement(Meta, null), external_react_default.a.createElement(components_SideMenu, {
    onContentChange: onContentChange
  }));
};

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Footer.jsx

var footerStyle = {
  position: 'absolute',
  bottom: '-4px',
  width: '100%'
};
var PIPPA_EMBED_URL = 'https://player.pippa.io/bitfaced?theme=default&cover=1&latest=1';

var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("div", {
    style: footerStyle
  }, external_react_default.a.createElement("iframe", {
    title: "Bitfaced Podcast Media Player",
    src: PIPPA_EMBED_URL,
    frameBorder: "0",
    width: "100%",
    height: "218px",
    allow: "autoplay"
  }));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Layout.jsx




var layoutStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  height: '100%',
  width: '100%'
};

var Layout_Layout = function Layout(_ref) {
  var onContentChange = _ref.onContentChange,
      children = _ref.children;
  return external_react_default.a.createElement("div", {
    style: layoutStyle
  }, external_react_default.a.createElement(components_Header, {
    onContentChange: onContentChange
  }), children, external_react_default.a.createElement(components_Footer, null));
};

Layout_Layout.defaultProps = {
  children: null
};
/* harmony default export */ var components_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./components/content/ContentContainer.jsx
function ContentContainer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ContentContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { ContentContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ContentContainer_typeof(obj); }

function ContentContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ContentContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ContentContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) ContentContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) ContentContainer_defineProperties(Constructor, staticProps); return Constructor; }

function ContentContainer_possibleConstructorReturn(self, call) { if (call && (ContentContainer_typeof(call) === "object" || typeof call === "function")) { return call; } return ContentContainer_assertThisInitialized(self); }

function ContentContainer_getPrototypeOf(o) { ContentContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ContentContainer_getPrototypeOf(o); }

function ContentContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ContentContainer_setPrototypeOf(subClass, superClass); }

function ContentContainer_setPrototypeOf(o, p) { ContentContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ContentContainer_setPrototypeOf(o, p); }

function ContentContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ContentContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ContentContainer_ContentContainer =
/*#__PURE__*/
function (_React$Component) {
  ContentContainer_inherits(ContentContainer, _React$Component);

  function ContentContainer(props) {
    var _this;

    ContentContainer_classCallCheck(this, ContentContainer);

    _this = ContentContainer_possibleConstructorReturn(this, ContentContainer_getPrototypeOf(ContentContainer).call(this, props));

    ContentContainer_defineProperty(ContentContainer_assertThisInitialized(ContentContainer_assertThisInitialized(_this)), "getContent", function (contentKey) {
      var onContentChange = _this.props.onContentChange;
      return CONTENT_NODES[contentKey].component(onContentChange);
    });

    _this.state = {};
    return _this;
  }

  ContentContainer_createClass(ContentContainer, [{
    key: "render",
    value: function render() {
      var activeContent = this.props.activeContent;
      return external_react_default.a.createElement("div", null, this.getContent(activeContent));
    }
  }]);

  return ContentContainer;
}(external_react_default.a.Component);

ContentContainer_defineProperty(ContentContainer_ContentContainer, "defaultProps", {
  activeContent: DEFAULT_CONTENT_NODE
});

/* harmony default export */ var content_ContentContainer = (ContentContainer_ContentContainer);
// CONCATENATED MODULE: ./pages/index.jsx
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages_inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    pages_classCallCheck(this, Index);

    _this = pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));

    pages_defineProperty(pages_assertThisInitialized(pages_assertThisInitialized(_this)), "onContentChange", function (newContentState) {
      _this.setState({
        activeContent: newContentState
      });
    });

    _this.state = {
      activeContent: DEFAULT_CONTENT_NODE
    };
    return _this;
  }

  pages_createClass(Index, [{
    key: "render",
    value: function render() {
      var activeContent = this.state.activeContent;
      return external_react_default.a.createElement(components_Layout, {
        onContentChange: this.onContentChange
      }, external_react_default.a.createElement(content_ContentContainer, {
        activeContent: activeContent,
        onContentChange: this.onContentChange
      }));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);