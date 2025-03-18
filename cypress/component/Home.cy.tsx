import React from 'react'
import Home from '../../client/src/pages/Home'
import { it } from 'cypress'
import { mount } from 'cypress/react'

describe('<Home />', () => {
  it('renders', () => {
    mount(<Home />)
    cy.mount(<Home />)
  })
})