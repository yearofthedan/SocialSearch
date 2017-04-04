import React from 'react';
import { shallow } from 'enzyme';
import SpacedBetweenRow from '../SpacedBetweenRow';

describe('<SpacedBetweenRow>', () => {
  it('renders the component', () => {
    const rendered = shallow(<SpacedBetweenRow />);
    expect(rendered.type()).not.toBeNull();
  });

  it('appends additional styles', () => {
    const rendered = shallow(<SpacedBetweenRow style={{ borderWidth: 10 }} />);
    expect(rendered.find('View').prop('style')[1]).toEqual({ borderWidth: 10 });
  });
});
