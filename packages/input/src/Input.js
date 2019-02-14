import React from 'react'
import PropTypes from 'prop-types'
import InputStyled from './styles/InputStyled'

const propTypes = {
  valid: PropTypes.bool,
  type: PropTypes.string
}

const defaultProps = {
  valid: true,
  type: 'text'
}

const Input = props => <InputStyled type="text" {...props} />

Input.defaultProps = defaultProps
Input.propTypes = propTypes

export default Input
