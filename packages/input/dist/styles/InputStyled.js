'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n      opacity: 1;\n      cursor: not-allowed;\n      color: ', ';\n      background-color: ', ';\n      border-radius: ', 'px;\n      border: ', ';\n    '], ['\n      opacity: 1;\n      cursor: not-allowed;\n      color: ', ';\n      background-color: ', ';\n      border-radius: ', 'px;\n      border: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: ', ';\n    background-color: ', ';\n    border: ', ';\n    border-radius: ', 'px;\n  '], ['\n    color: ', ';\n    background-color: ', ';\n    border: ', ';\n    border-radius: ', 'px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: block;\n    width: 100%;\n    height: 38px;\n    padding: 8px 12px;\n    font-size: 18px;\n    line-height: 1;\n    box-sizing: border-box;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    appearance: none;\n  '], ['\n    display: block;\n    width: 100%;\n    height: 38px;\n    padding: 8px 12px;\n    font-size: 18px;\n    line-height: 1;\n    box-sizing: border-box;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n    appearance: none;\n  ']),
    _templateObject4 = _taggedTemplateLiteral([''], ['']),
    _templateObject5 = _taggedTemplateLiteral(['\n    border: ', ';\n    background: ', ';\n    box-shadow: ', ';\n    background-position: right 10px top 8px;\n    background-size: 20px;\n  '], ['\n    border: ', ';\n    background: ', ';\n    box-shadow: ', ';\n    background-position: right 10px top 8px;\n    background-size: 20px;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    &:focus {\n      border-color: ', ';\n      outline: 0;\n      box-shadow: ', ';\n    }\n  '], ['\n    &:focus {\n      border-color: ', ';\n      outline: 0;\n      box-shadow: ', ';\n    }\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getBaseStateStyles = function getBaseStateStyles(_ref) {
  var theme = _ref.theme,
      disabled = _ref.disabled;

  var inputTheme = theme.input;

  if (disabled) {
    return (0, _styledComponents.css)(_templateObject, inputTheme.disabled.textColor, inputTheme.disabled.bgColor, inputTheme.borderRadius, inputTheme.default.border);
  }

  return (0, _styledComponents.css)(_templateObject2, inputTheme.default.textColor, inputTheme.default.bgColor, inputTheme.default.border, inputTheme.borderRadius);
};

var getBaseStyles = function getBaseStyles(_ref2) {
  var theme = _ref2.theme;

  var inputTheme = theme.input;

  return (0, _styledComponents.css)(_templateObject3);
};

var getInvalidStateStyles = function getInvalidStateStyles(_ref3) {
  var theme = _ref3.theme,
      valid = _ref3.valid;

  if (valid) {
    return (0, _styledComponents.css)(_templateObject4);
  }

  var inputTheme = theme.input;

  return (0, _styledComponents.css)(_templateObject5, inputTheme.invalid.border, inputTheme.invalid.bg, inputTheme.invalid.boxShadow);
};

var getFocusStateStyles = function getFocusStateStyles(_ref4) {
  var theme = _ref4.theme;

  var inputTheme = theme.input;

  return (0, _styledComponents.css)(_templateObject6, inputTheme.focus.borderColor, inputTheme.focus.boxShadow);
};

var InputStyled = _styledComponents2.default.input(_templateObject7, getBaseStyles, getBaseStateStyles, getFocusStateStyles, getInvalidStateStyles);

exports.default = InputStyled;