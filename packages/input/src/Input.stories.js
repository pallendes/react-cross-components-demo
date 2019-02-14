import React from 'react'
import { storiesOf } from '@storybook/react'
import { defaultTheme } from 'core'

import { Input } from '.'

storiesOf("Input", module)
  .add("Default input", () => (
    <Input />
  ))
  .add("Invalid input", () => (
    <Input valid={false} />
  ))
  .add("Disabled input", () => (
    <Input disabled />
  ));