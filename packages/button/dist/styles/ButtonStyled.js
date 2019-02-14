'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n      background-color: ', ';\n    '], ['\n      background-color: ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    background-color: ', ';\n    color: ', ';\n  '], ['\n    background-color: ', ';\n    color: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    background-color: ', ';\n  '], ['\n    background-color: ', ';\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    border: ', ';\n    border-radius: ', 'px;\n    padding: ', ';\n  '], ['\n    border: ', ';\n    border-radius: ', 'px;\n    padding: ', ';\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-size: ', 'px;\n  '], ['\n    font-size: ', 'px;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    &:hover,\n    &:focus,\n    &:active {\n      outline: none;\n\n      transition: box-shadow .2s ease-in, background-color .2s ease-in, color .2s ease-in;\n      box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.4);\n\n      ', '\n    }\n  '], ['\n    &:hover,\n    &:focus,\n    &:active {\n      outline: none;\n\n      transition: box-shadow .2s ease-in, background-color .2s ease-in, color .2s ease-in;\n      box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.4);\n\n      ', '\n    }\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n\n  line-height: 1;\n\n  cursor: ', ';\n  margin: 0;\n  position: relative;\n  display: inline-flex;\n  user-select: none;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  text-decoration: none;\n\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n\n  line-height: 1;\n\n  cursor: ', ';\n  margin: 0;\n  position: relative;\n  display: inline-flex;\n  user-select: none;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  text-decoration: none;\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var setHierachyColors = function setHierachyColors(_ref) {
  var theme = _ref.theme,
      hierachy = _ref.hierachy,
      disabled = _ref.disabled;

  if (disabled) {
    return (0, _styledComponents.css)(_templateObject, theme.button.colorScheme.disabled.bgColor);
  }

  var colorScheme = hierachy ? theme.button.colorScheme[hierachy] : theme.button.colorScheme['primary'];

  return (0, _styledComponents.css)(_templateObject2, colorScheme.bgColor, colorScheme.color);
};

var setHierachyHoverColors = function setHierachyHoverColors(_ref2) {
  var theme = _ref2.theme,
      hierachy = _ref2.hierachy;

  var colorScheme = hierachy ? theme.button.colorScheme[hierachy].hover : theme.button.colorScheme['primary'].hover;

  return (0, _styledComponents.css)(_templateObject3, colorScheme.bgColor);
};

var setBaseProps = function setBaseProps(_ref3) {
  var theme = _ref3.theme;
  var shape = theme.button.shape;


  return (0, _styledComponents.css)(_templateObject4, shape.border, shape.borderRadius, shape.padding);
};

var setSizeProps = function setSizeProps(_ref4) {
  var theme = _ref4.theme,
      size = _ref4.size;

  var fontSize = size ? theme.button.size[size] : theme.button.size['normal'];

  return (0, _styledComponents.css)(_templateObject5, fontSize);
};

var setHoverProps = function setHoverProps(_ref5) {
  var theme = _ref5.theme,
      disabled = _ref5.disabled;

  if (disabled) {
    return '';
  }

  return (0, _styledComponents.css)(_templateObject6, setHierachyHoverColors);
};

var ButtonStyled = _styledComponents2.default.button(_templateObject7, setHierachyColors, setBaseProps, setSizeProps, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? 'default' : 'pointer';
}, setHoverProps);

exports.default = ButtonStyled;