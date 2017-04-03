import React from 'react';
import { shallow } from 'enzyme';
import HeadingText from '../HeadingText';

describe('<HeadingText>', () => {
  it('renders the component', () => {
    const rendered = shallow(<HeadingText />);
    expect(rendered.type()).not.toBeNull();
  });

  it('passes any props through to the underlying text component', () => {
    const rendered = shallow(<HeadingText someProp />);
    expect(rendered.find('Text').prop('someProp')).not.toBeNull();
  });
});
