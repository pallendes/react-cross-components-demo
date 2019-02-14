import React from 'react'
import PropTypes from 'prop-types'
import { Skeleton, SkeletonTypes } from './Skeleton'
import SkeletonPlaceholderStyled from './styles/SkeletonPlaceholderStyled'

const SkeletonPlaceholder = ({
  children, isReady, height, width, customPlaceholder, type, rows, colors
}) => {
  const props = {
    height,
    width,
    colors
  }

  const skeletons = []

  for (let i = 0; i < rows; i += 1) {
    skeletons.push(customPlaceholder || <Skeleton key={i} type={type} {...props} />)
  }

  const skeletonPlaceholder = (
    <SkeletonPlaceholderStyled>
      {skeletons}
    </SkeletonPlaceholderStyled>
  )

  if (typeof children === 'function') {
    return isReady ? children(isReady) : skeletonPlaceholder
  }

  return isReady ? children : skeletonPlaceholder
}

SkeletonPlaceholder.defaultProps = {
  width: null,
  height: null,
  type: SkeletonTypes.TEXT,
  rows: 1,
  colors: {
    base: '#eee',
    highlight: '#f5f5f5'
  }
}

SkeletonPlaceholder.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  type: PropTypes.oneOf([SkeletonTypes.TEXT, SkeletonTypes.RECT]),
  rows: PropTypes.number,
  colors: PropTypes.shape({
    base: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired
  })
}

export default SkeletonPlaceholder
