'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonStyled = require('./styles/ButtonStyled');

var _ButtonStyled2 = _interopRequireDefault(_ButtonStyled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  size: _propTypes2.default.oneOf(['inline', 'small', 'normal', 'large']),
  hierachy: _propTypes2.default.oneOf(['primary', 'secondary', 'success']),
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

var defaultProps = {
  size: 'normal',
  hierachy: 'primary',
  disabled: false,
  onClick: function onClick() {
    return null;
  }
};

var Button = function Button(props) {
  return _react2.default.createElement(_ButtonStyled2.default, props);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;