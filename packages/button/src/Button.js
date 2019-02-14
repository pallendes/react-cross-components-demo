import React from 'react'
import PropTypes from 'prop-types'
import ButtonStyled from './styles/ButtonStyled'

const propTypes = {
  size: PropTypes.oneOf([
    'inline', 
    'small', 
    'normal', 
    'large'
  ]),
  hierachy: PropTypes.oneOf([
    'primary',
    'secondary',
    'success'
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

const defaultProps = {
  size: 'normal',
  hierachy: 'primary',
  disabled: false,
  onClick: () => null
}

const Button = (props) => <ButtonStyled {...props} />

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button