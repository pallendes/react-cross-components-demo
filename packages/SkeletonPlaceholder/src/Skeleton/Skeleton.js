import React from 'react'
import PropTypes from 'prop-types'
import SkeletonTextStyled from './styles/SkeletonTextStyled'
import SkeletonRectStyled from './styles/SkeletonRectStyled'

export const SkeletonTypes = {
  TEXT: 'text',
  RECT: 'rect'
}

const Skeleton = ({
  height, width, type, colors
}) => {
  const props = {
    height,
    width,
    colors
  }

  switch (type) {
    case SkeletonTypes.TEXT:
      return <SkeletonTextStyled {...props}>&zwnj;</SkeletonTextStyled>
    case SkeletonTypes.RECT:
      return <SkeletonRectStyled {...props}>&zwnj;</SkeletonRectStyled>
    default:
      return <SkeletonTextStyled {...props}>&zwnj;</SkeletonTextStyled>
  }
}

Skeleton.defaultProps = {
  width: null,
  height: null,
  type: SkeletonTypes.TEXT,
  colors: {
    base: '#eee',
    highlight: '#f5f5f5'
  }
}

Skeleton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  type: PropTypes.oneOf([SkeletonTypes.TEXT, SkeletonTypes.RECT]),
  colors: PropTypes.shape({
    base: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired
  })
}

export default Skeleton
