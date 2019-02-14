'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 0;\n  z-index: 999;\n  width: 100%;\n'], ['\n  padding: 0;\n  z-index: 999;\n  width: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SkeletonPlaceholderStyled = _styledComponents2.default.div(_templateObject);

exports.default = SkeletonPlaceholderStyled;