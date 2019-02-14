import styled, { keyframes, css } from 'styled-components'
import { getWidth, getHeight } from '../../common/style-utils'

const progress = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

const background = ({ colors }) => {
  if (!colors) {
    return ''
  }

  return css`
    background-color: ${colors.base};
    background-image: linear-gradient(90deg, ${colors.base}, ${colors.highlight}, ${colors.base});
    background-size: 200px 100%;
    background-repeat: no-repeat;
  `
}

const SkeletonStyled = styled.span`
  animation: ${progress} 1.2s ease-in-out infinite;
  display: inline-block;


  ${background};
  ${getWidth};
  ${getHeight};
`

export default SkeletonStyled
