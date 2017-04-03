import React from 'react';
import { shallow } from 'enzyme';
import StretchFlex from '../StretchFlex';

describe('<StretchFlex>', () => {
  it('renders the component', () => {
    const rendered = shallow(<StretchFlex />);
    expect(rendered.type()).not.toBeNull();
  });

  it('appends additional styles', () => {
    const rendered = shallow(<StretchFlex style={{ borderWidth: 10 }} />);
    expect(rendered.find('View').prop('style')[1]).toEqual({ borderWidth: 10 });
  });
});
