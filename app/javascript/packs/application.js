import React from 'react'
import { render } from 'react-dom'

require.context('../images')

console.log('hello')

import(/* webpackChunkName: "application-chunk" */ '../application').then(({ default: Component }) => {
  console.log(Component)
  document.addEventListener('DOMContentLoaded', () => {
    render(
      <Component name="React" />,
      document.body.appendChild(document.createElement('div')),
    )
  })
})
