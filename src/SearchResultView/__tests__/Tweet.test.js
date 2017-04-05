import React from 'react';
import { shallow, mount } from 'enzyme';
import Tweet from '../Tweet';

describe('<Tweet>', () => {
  it('renders the component', () => {
    const rendered = shallow(<Tweet tweet={{ user: {} }} />);
    expect(rendered.type()).not.toBeNull();
  });

  it('formats the date nicely', () => {
    const rendered = mount(<Tweet tweet={{ user: {}, created_at: '2017/02/01' }} />);
    const details = rendered.find('DetailsRow');
    expect(details.text()).toContain('Wed Feb 01 2017');
  });
});
