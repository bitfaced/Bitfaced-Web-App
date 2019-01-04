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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dean/Desktop/BitFaced/components/Footer.jsx";

var footerStyle = {
  position: 'absolute',
  bottom: '-4px',
  width: '100%'
};
var PIPPA_EMBED_URL = 'https://player.pippa.io/bitfaced?theme=default&cover=1&latest=1';

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: footerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "Bitfaced Podcast Media Player",
    src: PIPPA_EMBED_URL,
    frameBorder: "0",
    width: "100%",
    height: "218px",
    allow: "autoplay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Meta */ "./components/Meta.jsx");
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideMenu */ "./components/SideMenu.jsx");
var _jsxFileName = "/Users/dean/Desktop/BitFaced/components/Header.jsx";




var iconStyle = {
  padding: 15
};

var Header = function Header(_ref) {
  var onContentChange = _ref.onContentChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onContentChange: onContentChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

Header.propTypes = {
  onContentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
var _jsxFileName = "/Users/dean/Desktop/BitFaced/components/Layout.jsx";




var layoutStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  height: '100%',
  width: '100%'
};

var Layout = function Layout(_ref) {
  var onContentChange = _ref.onContentChange,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onContentChange: onContentChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].node,
  onContentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func.isRequired
};
Layout.defaultProps = {
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Meta.jsx":
/*!*****************************!*\
  !*** ./components/Meta.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/dean/Desktop/BitFaced/components/Meta.jsx";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "og:type",
    content: "website",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "og:url",
    content: "http://bitfaced.com",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "og:title",
    content: "BitFaced Podcast",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "msvalidate.01",
    content: "397DC1B89F47E94AE576233E3E3D298B",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "google-site-verification",
    content: "Skr1DY0RuQrohFqXu5sk0WcMzZp-OVC7inox9ihM0ng",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "Description",
    content: "BitFaced - The greatest pop culture podcast no one is listening to",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "mobile-web-app-capable",
    content: "yes",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "author",
    content: "Eric G. Hollis & Tyler R. Glaze",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-3374884864",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3374884864",
    css: "body,html,#__next{width:100%;height:100%;overflow:hidden;padding:0px;margin:0px;}body{background:url(https://i.pinimg.com/originals/37/63/61/37636169a277903f0ef4a794202a08c7.gif);background-size:cover;background-position-y:-180px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZWFuL0Rlc2t0b3AvQml0RmFjZWQvY29tcG9uZW50cy9NZXRhLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQk0sQUFFb0IsQUFRa0YsV0FQakYsWUFDSSxnQkFDSixZQUNELFdBQ2IsK0JBSXdCLHNCQUNPLDZCQUMvQiIsImZpbGUiOiIvVXNlcnMvZGVhbi9EZXNrdG9wL0JpdEZhY2VkL2NvbXBvbmVudHMvTWV0YS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwib2c6dXJsXCIgY29udGVudD1cImh0dHA6Ly9iaXRmYWNlZC5jb21cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkJpdEZhY2VkIFBvZGNhc3RcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zdmFsaWRhdGUuMDFcIiBjb250ZW50PVwiMzk3REMxQjg5RjQ3RTk0QUU1NzYyMzNFM0UzRDI5OEJcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9XCJTa3IxRFkwUnVRcm9oRnFYdTVzazBXY016WnAtT1ZDN2lub3g5aWhNMG5nXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJEZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCaXRGYWNlZCAtIFRoZSBncmVhdGVzdCBwb3AgY3VsdHVyZSBwb2RjYXN0IG5vIG9uZSBpcyBsaXN0ZW5pbmcgdG9cIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1zdGF0dXMtYmFyLXN0eWxlXCIgY29udGVudD1cImJsYWNrXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiRXJpYyBHLiBIb2xsaXMgJiBUeWxlciBSLiBHbGF6ZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT0wXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge1xuICAgICAgYGJvZHksIGh0bWwsICNfX25leHQgeyBcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cblxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvMzcvNjMvNjEvMzc2MzYxNjlhMjc3OTAzZjBlZjRhNzk0MjAyYTA4YzcuZ2lmKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMTgwcHg7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/dean/Desktop/BitFaced/components/Meta.jsx */",
    __self: this
  }));
});

/***/ }),

/***/ "./components/SideMenu.jsx":
/*!*********************************!*\
  !*** ./components/SideMenu.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evergreen-ui */ "evergreen-ui");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./constants.jsx");
var _jsxFileName = "/Users/dean/Desktop/BitFaced/components/SideMenu.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var SideMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideMenu, _React$Component);

  function SideMenu(props) {
    var _this;

    _classCallCheck(this, SideMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMenuItemClick", function (e) {
      var onContentChange = _this.props.onContentChange;
      onContentChange(e.target.title);

      _this.setState({
        isOpened: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "menuItems", function () {
      return Object.keys(_constants__WEBPACK_IMPORTED_MODULE_3__["CONTENT_NODES"]).map(function (content) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
          onClick: _this.onMenuItemClick,
          margin: 10,
          title: content,
          key: content,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, _constants__WEBPACK_IMPORTED_MODULE_3__["CONTENT_NODES"][content].displayName);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getNextToggleStatus", function () {
      var isOpened = _this.state.isOpened;
      return !isOpened;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleSideMenu", function () {
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

  _createClass(SideMenu, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isOpened = _this$state.isOpened,
          menuItems = _this$state.menuItems;
      var onCloseComplete = isOpened === false ? _constants__WEBPACK_IMPORTED_MODULE_3__["noop"] : this.toggleSideMenu;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["SideSheet"], {
        position: evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Position"].TOP,
        isShown: isOpened,
        onCloseComplete: onCloseComplete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, menuItems), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
        icon: "menu",
        onClick: this.toggleSideMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }));
    }
  }]);

  return SideMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(SideMenu, "propTypes", {
  onContentChange: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./components/content/About.jsx":
/*!**************************************!*\
  !*** ./components/content/About.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evergreen-ui */ "evergreen-ui");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./constants.jsx");
var _jsxFileName = "/Users/dean/Desktop/BitFaced/components/content/About.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var aboutContainerStyles = {
  width: '80%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  borderRadis: '3px'
};

var AboutContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AboutContent, _React$Component);

  function AboutContent(props) {
    var _this;

    _classCallCheck(this, AboutContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AboutContent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      var onContentChange = _this.props.onContentChange;
      onContentChange(_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONTENT_NODE"]);
    });

    _this.state = {};
    return _this;
  }

  _createClass(AboutContent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: aboutContainerStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
        isShown: true,
        hasCancel: false,
        title: "About BitFaced",
        onCloseComplete: this.onClose,
        confirmLabel: "Back to Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        isSolid: true,
        color: "green",
        name: "Bit Faced",
        size: 60,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        size: 700,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "BitFaced"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        name: "Eric Hollis",
        size: 60,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        size: 700,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Eric G. Hollis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        name: "Tyler Glaze",
        size: 60,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        size: 700,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Tyler Glaze"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "jfajhjkdahfjdshkfh adsffdsffdsfdsafdasfdsafasdf dsafafsdasfadsfasdfsadfdasfdasf adsfasfadsfadsfsdafdsaf"))));
    }
  }]);

  return AboutContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(AboutContent, "propTypes", {
  onContentChange: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (AboutContent);

/***/ }),

/***/ "./components/content/Contact.jsx":
/*!****************************************!*\
  !*** ./components/content/Contact.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evergreen-ui */ "evergreen-ui");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./constants.jsx");
var _jsxFileName = "/Users/dean/Desktop/BitFaced/components/content/Contact.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var aboutContainerStyles = {
  width: '80%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  borderRadis: '3px'
};

var ContactContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactContent, _React$Component);

  function ContactContent(props) {
    var _this;

    _classCallCheck(this, ContactContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactContent).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      var onContentChange = _this.props.onContentChange;
      onContentChange(_constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONTENT_NODE"]);
    });

    _this.state = {};
    return _this;
  }

  _createClass(ContactContent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: aboutContainerStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
        isShown: true,
        hasCancel: false,
        title: "Contact BitFaced",
        onCloseComplete: this.onClose,
        confirmLabel: "Back to Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        title: "fb-page",
        src: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbitfacedgames%2F&tabs=messages&width=311&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=1629881623992316",
        width: "311",
        height: "500",
        scrolling: "no",
        allowTransparency: "true",
        allow: "encrypted-media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }))));
    }
  }]);

  return ContactContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ContactContent, "propTypes", {
  onContentChange: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (ContactContent);

/***/ }),

/***/ "./components/content/ContentContainer.jsx":
/*!*************************************************!*\
  !*** ./components/content/ContentContainer.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants.jsx");
var _jsxFileName = "/Users/dean/Desktop/BitFaced/components/content/ContentContainer.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ContentContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContentContainer, _React$Component);

  function ContentContainer(props) {
    var _this;

    _classCallCheck(this, ContentContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContentContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getContent", function (contentKey) {
      var onContentChange = _this.props.onContentChange;
      return _constants__WEBPACK_IMPORTED_MODULE_2__["CONTENT_NODES"][contentKey].component(onContentChange);
    });

    _this.state = {};
    return _this;
  }

  _createClass(ContentContainer, [{
    key: "render",
    value: function render() {
      var activeContent = this.props.activeContent;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.getContent(activeContent));
    }
  }]);

  return ContentContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(ContentContainer, "propTypes", {
  activeContent: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  onContentChange: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func.isRequired
});

_defineProperty(ContentContainer, "defaultProps", {
  activeContent: _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONTENT_NODE"]
});

/* harmony default export */ __webpack_exports__["default"] = (ContentContainer);

/***/ }),

/***/ "./components/content/Home.jsx":
/*!*************************************!*\
  !*** ./components/content/Home.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dean/Desktop/BitFaced/components/content/Home.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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

var HomeContent =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_1___default.a, {
        orientation: "portrait",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "bitfaced-logo-img",
        style: logoStylesPortrait,
        alt: "BitFaced Podcast Logo with Eric and Tyler",
        src: HomeContent.LOGO_URL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_1___default.a, {
        orientation: "landscape",
        maxDeviceHeight: 767,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "bitfaced-logo-img",
        style: logoStylesLandscape,
        alt: "BitFaced Podcast Logo with Eric and Tyler",
        src: HomeContent.LOGO_URL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_1___default.a, {
        orientation: "landscape",
        minDeviceHeight: 768,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "bitfaced-logo-img",
        style: logoStylesBigLandscape,
        alt: "BitFaced Podcast Logo with Eric and Tyler",
        src: HomeContent.LOGO_URL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })));
    }
  }]);

  return HomeContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(HomeContent, "LOGO_URL", 'https://s3.us-east-2.amazonaws.com/bitfaced/logo.png');

/* harmony default export */ __webpack_exports__["default"] = (HomeContent);

/***/ }),

/***/ "./constants.jsx":
/*!***********************!*\
  !*** ./constants.jsx ***!
  \***********************/
/*! exports provided: CONTENT_NODES, DEFAULT_CONTENT_NODE, noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_NODES", function() { return CONTENT_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONTENT_NODE", function() { return DEFAULT_CONTENT_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_content_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/content/Home */ "./components/content/Home.jsx");
/* harmony import */ var _components_content_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content/About */ "./components/content/About.jsx");
/* harmony import */ var _components_content_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/content/Contact */ "./components/content/Contact.jsx");
var _jsxFileName = "/Users/dean/Desktop/BitFaced/constants.jsx";




var CONTENT_NODES = {
  home: {
    displayName: 'Home',
    component: function component() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_content_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
    }
  },
  about: {
    displayName: 'About Bitfaced',
    component: function component(onContentChange) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_content_About__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onContentChange: onContentChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    }
  },
  contact: {
    displayName: 'Contact Bitfaced',
    component: function component(onContentChange) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_content_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onContentChange: onContentChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      });
    }
  }
};
var DEFAULT_CONTENT_NODE = 'home';
var noop = function noop() {};

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_content_ContentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/content/ContentContainer */ "./components/content/ContentContainer.jsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./constants.jsx");
var _jsxFileName = "/Users/dean/Desktop/BitFaced/pages/index.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onContentChange", function (newContentState) {
      _this.setState({
        activeContent: newContentState
      });
    });

    _this.state = {
      activeContent: _constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CONTENT_NODE"]
    };
    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var activeContent = this.state.activeContent;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onContentChange: this.onContentChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_content_ContentContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        activeContent: activeContent,
        onContentChange: this.onContentChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "evergreen-ui":
/*!*******************************!*\
  !*** external "evergreen-ui" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map