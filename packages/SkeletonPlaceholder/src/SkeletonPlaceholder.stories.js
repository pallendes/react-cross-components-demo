import React from 'react'
import { defaultTheme } from 'core'
import { storiesOf } from '@storybook/react'

import { SkeletonPlaceholder } from '.'

storiesOf("SkeletonPlaceholder", module).add("Example", () => (
  <div style={{ fontSize: "24px" }}>
    <SkeletonPlaceholder
      isReady={false}
      width={200}
      colors={{ base: "#d3d3d3", highlight: "#dedede" }}
    >
      Some text
    </SkeletonPlaceholder>
  </div>
));