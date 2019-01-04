webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SideMenu.jsx":
/*!*********************************!*\
  !*** ./components/SideMenu.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
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
      console.log('toggleSideMenu');

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

/***/ })

})
//# sourceMappingURL=index.js.b77e599e9abb76aca60f.hot-update.js.map