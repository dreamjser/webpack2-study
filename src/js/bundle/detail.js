webpackJsonp([1,3],{

/***/ 68:
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./src/routers/detail/components/detail/index.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! ./index.scss */ 72);

var _react = __webpack_require__(/*! react */ 1);

var _reactRouter = __webpack_require__(/*! react-router */ 12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_Component) {
  _inherits(Detail, _Component);

  function Detail() {
    _classCallCheck(this, Detail);

    return _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).apply(this, arguments));
  }

  _createClass(Detail, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'detail' },
        this.props.params.id
      );
    }
  }]);

  return Detail;
}(_react.Component);

module.exports = Detail;

/***/ },

/***/ 70:
/* unknown exports provided */
/* all exports used */
/*!****************************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/routers/detail/components/detail/index.scss ***!
  \****************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./../../../../../~/css-loader/lib/css-base.js */ 36)();
// imports


// module
exports.push([module.i, ".detail {\n  color: blue; }\n", ""]);

// exports


/***/ },

/***/ 72:
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./src/routers/detail/components/detail/index.scss ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./../../../../../~/css-loader!./../../../../../~/sass-loader!./index.scss */ 70);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ./../../../../../~/style-loader/addStyles.js */ 37)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./index.scss", function() {
			var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

});
//# sourceMappingURL=detail.js.map