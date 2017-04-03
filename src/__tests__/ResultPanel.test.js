import React from 'react';
import { shallow } from 'enzyme';
import ResultPanel from '../ResultPanel';

describe('<ResultPanel>', () => {
  it('renders the component', () => {
    const rendered = shallow(<ResultPanel tweets={[]} />);
    expect(rendered.type()).not.toBeNull();
  });

  it('renders an entry for each tweet', () => {
    const rendered = shallow(
      <ResultPanel
        tweets={[
          { id: '1', text: '123' },
          { id: '2', text: '456' },
        ]}
      />);
    const tweets = rendered.find('Text');
    expect(tweets.children().length).toBe(2);
    expect(tweets.at(0).props().children).toContain('123');
    expect(tweets.at(1).props().children).toContain('456');
  });

  it('shows an error when there is an error', () => {
    const rendered = shallow(
      <ResultPanel
        error="There was an error"
      />);
    const error = rendered.find('Text');
    expect(error.props().children).toContain('There was an error');
  });
});
