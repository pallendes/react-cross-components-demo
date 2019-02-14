'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonTypes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SkeletonTextStyled = require('./styles/SkeletonTextStyled');

var _SkeletonTextStyled2 = _interopRequireDefault(_SkeletonTextStyled);

var _SkeletonRectStyled = require('./styles/SkeletonRectStyled');

var _SkeletonRectStyled2 = _interopRequireDefault(_SkeletonRectStyled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkeletonTypes = exports.SkeletonTypes = {
  TEXT: 'text',
  RECT: 'rect'
};

var Skeleton = function Skeleton(_ref) {
  var height = _ref.height,
      width = _ref.width,
      type = _ref.type,
      colors = _ref.colors;

  var props = {
    height: height,
    width: width,
    colors: colors
  };

  switch (type) {
    case SkeletonTypes.TEXT:
      return _react2.default.createElement(
        _SkeletonTextStyled2.default,
        props,
        '\u200C'
      );
    case SkeletonTypes.RECT:
      return _react2.default.createElement(
        _SkeletonRectStyled2.default,
        props,
        '\u200C'
      );
    default:
      return _react2.default.createElement(
        _SkeletonTextStyled2.default,
        props,
        '\u200C'
      );
  }
};

Skeleton.defaultProps = {
  width: null,
  height: null,
  type: SkeletonTypes.TEXT,
  colors: {
    base: '#eee',
    highlight: '#f5f5f5'
  }
};

Skeleton.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
  type: _propTypes2.default.oneOf([SkeletonTypes.TEXT, SkeletonTypes.RECT]),
  colors: _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    highlight: _propTypes2.default.string.isRequired
  })
};

exports.default = Skeleton;