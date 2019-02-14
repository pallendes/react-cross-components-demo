'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputStyled = require('./styles/InputStyled');

var _InputStyled2 = _interopRequireDefault(_InputStyled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  valid: _propTypes2.default.bool,
  type: _propTypes2.default.string
};

var defaultProps = {
  valid: true,
  type: 'text'
};

var Input = function Input(props) {
  return _react2.default.createElement(_InputStyled2.default, _extends({ type: 'text' }, props));
};

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

exports.default = Input;