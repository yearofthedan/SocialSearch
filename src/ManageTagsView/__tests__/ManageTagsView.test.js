import React from 'react';
import { shallow } from 'enzyme';
import ManageTagsView from '../ManageTagsView';

describe('<ManageTagsView>', () => {
  it('renders the component', () => {
    const rendered = shallow(<ManageTagsView />);
    expect(rendered.type()).not.toBeNull();
  });
});
