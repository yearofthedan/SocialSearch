import React from 'react';
import { shallow } from 'enzyme';
import Centered from '../Centered';

describe('<Centered>', () => {
  it('renders the component', () => {
    const rendered = shallow(<Centered />);
    expect(rendered.type()).not.toBeNull();
  });

  it('appends additional styles', () => {
    const rendered = shallow(<Centered style={{ borderWidth: 10 }} />);
    expect(rendered.find('View').prop('style')[1]).toEqual({ borderWidth: 10 });
  });
});
