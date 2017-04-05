import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('<Header>', () => {
  it('renders the component', () => {
    const rendered = shallow(<Header />);
    expect(rendered.type()).not.toBeNull();
  });
});
