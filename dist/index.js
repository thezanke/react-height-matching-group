'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-param-reassign: 0 */


var HeightMatchingGroup = function (_Component) {
  _inherits(HeightMatchingGroup, _Component);

  function HeightMatchingGroup(_ref) {
    var _this2 = this;

    var tagName = _ref.tagName;

    _classCallCheck(this, HeightMatchingGroup);

    var _this = _possibleConstructorReturn(this, (HeightMatchingGroup.__proto__ || Object.getPrototypeOf(HeightMatchingGroup)).call(this));

    _this.getContainerRef = function (node) {
      _this.container = node;
    };

    _this.getMaxHeight = function (els) {
      return Array.prototype.map.call(els, function (el) {
        return el.scrollHeight;
      }).reduce(function (pre, cur) {
        return Math.max(pre, cur);
      }, -Infinity);
    };

    _this.matchHeights = function () {
      var els = _this.container.querySelectorAll(_this.props.selector);
      var maxHeight = _this.getMaxHeight(els);
      els.forEach(function (el) {
        el.style.height = maxHeight + 'px';
      });
    };

    _this.render = function () {
      return _react2.default.createElement(
        _this2.RootTag,
        {
          className: _this.props.className,
          ref: _this.getContainerRef
        },
        _this.props.children
      );
    };

    _this.RootTag = '' + tagName;
    return _this;
  }

  _createClass(HeightMatchingGroup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.matchHeights);
      setTimeout(this.matchHeights, 0);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.matchheights);
    }
  }]);

  return HeightMatchingGroup;
}(_react.Component);

HeightMatchingGroup.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string,
  selector: _react.PropTypes.string,
  tagName: _react.PropTypes.string
};
HeightMatchingGroup.defaultProps = {
  selector: '.match-height',
  tagName: 'span'
};
exports.default = HeightMatchingGroup;
