'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n'], ['\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background-color: ', ';\n    background-image: linear-gradient(90deg, ', ', ', ', ', ');\n    background-size: 200px 100%;\n    background-repeat: no-repeat;\n  '], ['\n    background-color: ', ';\n    background-image: linear-gradient(90deg, ', ', ', ', ', ');\n    background-size: 200px 100%;\n    background-repeat: no-repeat;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  animation: ', ' 1.2s ease-in-out infinite;\n  display: inline-block;\n\n\n  ', ';\n  ', ';\n  ', ';\n'], ['\n  animation: ', ' 1.2s ease-in-out infinite;\n  display: inline-block;\n\n\n  ', ';\n  ', ';\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = require('../../common/style-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var progress = (0, _styledComponents.keyframes)(_templateObject);

var background = function background(_ref) {
  var colors = _ref.colors;

  if (!colors) {
    return '';
  }

  return (0, _styledComponents.css)(_templateObject2, colors.base, colors.base, colors.highlight, colors.base);
};

var SkeletonStyled = _styledComponents2.default.span(_templateObject3, progress, background, _styleUtils.getWidth, _styleUtils.getHeight);

exports.default = SkeletonStyled;