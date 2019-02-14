import 'jest-styled-components'
import { defaultTheme } from 'rcc-core'
import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer'

test('should render the default button', () => {
  const tree = renderer.create(<Button theme={defaultTheme} />).toJSON()
  expect(tree).toMatchSnapshot();
})

test('should render a primary button', () => {
  const tree = renderer.create(<Button hierachy="primary" theme={defaultTheme} />).toJSON()
  expect(tree).toMatchSnapshot();
})

test('should render a success button', () => {
  const tree = renderer.create(<Button hierachy="success" theme={defaultTheme} />).toJSON()
  expect(tree).toMatchSnapshot();
})

test('should render a disabled button', () => {
  const tree = renderer.create(<Button disabled theme={defaultTheme} />).toJSON()
  expect(tree).toMatchSnapshot();
})