'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Skeleton = require('./Skeleton');

var _SkeletonPlaceholderStyled = require('./styles/SkeletonPlaceholderStyled');

var _SkeletonPlaceholderStyled2 = _interopRequireDefault(_SkeletonPlaceholderStyled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkeletonPlaceholder = function SkeletonPlaceholder(_ref) {
  var children = _ref.children,
      isReady = _ref.isReady,
      height = _ref.height,
      width = _ref.width,
      customPlaceholder = _ref.customPlaceholder,
      type = _ref.type,
      rows = _ref.rows,
      colors = _ref.colors;

  var props = {
    height: height,
    width: width,
    colors: colors
  };

  var skeletons = [];

  for (var i = 0; i < rows; i += 1) {
    skeletons.push(customPlaceholder || _react2.default.createElement(_Skeleton.Skeleton, _extends({ key: i, type: type }, props)));
  }

  var skeletonPlaceholder = _react2.default.createElement(
    _SkeletonPlaceholderStyled2.default,
    null,
    skeletons
  );

  if (typeof children === 'function') {
    return isReady ? children(isReady) : skeletonPlaceholder;
  }

  return isReady ? children : skeletonPlaceholder;
};

SkeletonPlaceholder.defaultProps = {
  width: null,
  height: null,
  type: _Skeleton.SkeletonTypes.TEXT,
  rows: 1,
  colors: {
    base: '#eee',
    highlight: '#f5f5f5'
  }
};

SkeletonPlaceholder.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
  type: _propTypes2.default.oneOf([_Skeleton.SkeletonTypes.TEXT, _Skeleton.SkeletonTypes.RECT]),
  rows: _propTypes2.default.number,
  colors: _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    highlight: _propTypes2.default.string.isRequired
  })
};

exports.default = SkeletonPlaceholder;