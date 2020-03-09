import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.exists()) === true
  })
})
