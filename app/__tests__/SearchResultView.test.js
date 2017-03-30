import React from 'react';
import { shallow } from 'enzyme';
import SearchResultView from '../SearchResultView';

describe('<SearchResultView>', () => {
  it('renders the component', () => {
    const rendered = shallow(<SearchResultView />);
    expect(rendered.type()).not.toBeNull();
  });
});
