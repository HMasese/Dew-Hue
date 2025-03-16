import { mount } from 'cypress/react';
import React from 'react';
import Home from '../../client/src/pages/Home';

describe('<Home />', () => {
  it('renders', () => {
    mount(<Home />);
  });
});
