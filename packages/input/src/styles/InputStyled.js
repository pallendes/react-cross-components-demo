import styled, { css } from 'styled-components'

const getBaseStateStyles = ({ theme, disabled }) => {  
  const inputTheme = theme.input

  if (disabled) {
    return css`
      opacity: 1;
      cursor: not-allowed;
      color: ${ inputTheme.disabled.textColor };
      background-color: ${ inputTheme.disabled.bgColor };
      border-radius: ${ inputTheme.borderRadius }px;
      border: ${ inputTheme.default.border };
    `
  }

  return css`
    color: ${ inputTheme.default.textColor };
    background-color: ${ inputTheme.default.bgColor };
    border: ${ inputTheme.default.border };
    border-radius: ${ inputTheme.borderRadius }px;
  `
}

const getBaseStyles = ({ theme }) => {
  const inputTheme = theme.input

  return css`
    display: block;
    width: 100%;
    height: 38px;
    padding: 8px 12px;
    font-size: 18px;
    line-height: 1;
    box-sizing: border-box;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    appearance: none;
  `
}

const getInvalidStateStyles = ({ theme, valid }) => {
  if (valid) {
    return css``
  }

  const inputTheme = theme.input

  return css`
    border: ${ inputTheme.invalid.border };
    background: ${ inputTheme.invalid.bg };
    box-shadow: ${ inputTheme.invalid.boxShadow };
    background-position: right 10px top 8px;
    background-size: 20px;
  `
}

const getFocusStateStyles = ({ theme }) => {
  const inputTheme = theme.input

  return css`
    &:focus {
      border-color: ${ inputTheme.focus.borderColor };
      outline: 0;
      box-shadow: ${ inputTheme.focus.boxShadow };
    }
  `
}

const InputStyled = styled.input`
  ${ getBaseStyles }
  ${ getBaseStateStyles }
  ${ getFocusStateStyles }
  ${ getInvalidStateStyles }
`

export default InputStyled
