import _isObject from 'lodash/isObject'
import { css } from 'styled-components'

const toStyleProp = size => (size && typeof size !== 'string'
  ? `${size}px`
  : size)

export const getWidth = ({ width }) => {
  if (!width) {
    return css`width: 100%`
  }

  if (_isObject(width)) {
    const desktopWidht = width.desktop || null
    const defaultWidth = width.default || null

    return css`
      width: ${toStyleProp(defaultWidth) || '100%'};

      @media only screen and (min-width: 768px) {
        width: ${toStyleProp(desktopWidht) || '100%'};
      }
    `
  }

  return css`
    width: ${toStyleProp(width) || '100%'};
  `
}

export const getHeight = ({ height }) => {
  if (!height) {
    return ''
  }

  if (_isObject(height)) {
    const desktopHeight = height.desktop || null
    const defaultHeight = height.default || null

    return css`
      height: ${toStyleProp(defaultHeight) || 'auto'};

      @media only screen and (min-width: 768px) {
        height: ${toStyleProp(desktopHeight) || 'auto'};
      }
    `
  }

  return css`
    height: ${toStyleProp(height) || 'auto'};
  `
}
