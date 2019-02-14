'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  border-radius: 0;\n'], ['\n  border-radius: 0;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _SkeletonStyled = require('./SkeletonStyled');

var _SkeletonStyled2 = _interopRequireDefault(_SkeletonStyled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SkeletonRectStyled = (0, _styledComponents2.default)(_SkeletonStyled2.default)(_templateObject);

exports.default = SkeletonRectStyled;