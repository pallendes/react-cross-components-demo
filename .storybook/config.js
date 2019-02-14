import React from 'react'
import { configure, addDecorator } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from '../packages/core/src'

function loadStories () {
  require('glob-loader!./stories.pattern')
}

addDecorator(story => (
  <ThemeProvider theme={defaultTheme}>
    <div style={{ width: "300px" }}>{story()}</div>
  </ThemeProvider>
));

configure(loadStories, module)
