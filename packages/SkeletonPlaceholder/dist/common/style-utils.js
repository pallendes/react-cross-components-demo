'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeight = exports.getWidth = undefined;

var _templateObject = _taggedTemplateLiteral(['width: 100%'], ['width: 100%']),
    _templateObject2 = _taggedTemplateLiteral(['\n      width: ', ';\n\n      @media only screen and (min-width: 768px) {\n        width: ', ';\n      }\n    '], ['\n      width: ', ';\n\n      @media only screen and (min-width: 768px) {\n        width: ', ';\n      }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: ', ';\n  '], ['\n    width: ', ';\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      height: ', ';\n\n      @media only screen and (min-width: 768px) {\n        height: ', ';\n      }\n    '], ['\n      height: ', ';\n\n      @media only screen and (min-width: 768px) {\n        height: ', ';\n      }\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    height: ', ';\n  '], ['\n    height: ', ';\n  ']);

var _isObject2 = require('lodash/isObject');

var _isObject3 = _interopRequireDefault(_isObject2);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var toStyleProp = function toStyleProp(size) {
  return size && typeof size !== 'string' ? size + 'px' : size;
};

var getWidth = exports.getWidth = function getWidth(_ref) {
  var width = _ref.width;

  if (!width) {
    return (0, _styledComponents.css)(_templateObject);
  }

  if ((0, _isObject3.default)(width)) {
    var desktopWidht = width.desktop || null;
    var defaultWidth = width.default || null;

    return (0, _styledComponents.css)(_templateObject2, toStyleProp(defaultWidth) || '100%', toStyleProp(desktopWidht) || '100%');
  }

  return (0, _styledComponents.css)(_templateObject3, toStyleProp(width) || '100%');
};

var getHeight = exports.getHeight = function getHeight(_ref2) {
  var height = _ref2.height;

  if (!height) {
    return '';
  }

  if ((0, _isObject3.default)(height)) {
    var desktopHeight = height.desktop || null;
    var defaultHeight = height.default || null;

    return (0, _styledComponents.css)(_templateObject4, toStyleProp(defaultHeight) || 'auto', toStyleProp(desktopHeight) || 'auto');
  }

  return (0, _styledComponents.css)(_templateObject5, toStyleProp(height) || 'auto');
};