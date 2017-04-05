import React from 'react';
import { shallow } from 'enzyme';
import ResultPanel from '../ResultPanel';

describe('<ResultPanel>', () => {
  it('renders the component', () => {
    const rendered = shallow(<ResultPanel tweets={[]} />);
    expect(rendered.type()).not.toBeNull();
  });

  it('shows an error when there is an error', () => {
    const rendered = shallow(
      <ResultPanel
        error="There was an error"
      />);
    const error = rendered.find('ErrorText');
    expect(error.props().children).toContain('There was an error');
  });

  it('renders an tweet list with tweets when there is not an error', () => {
    const data = [
      { id: '1', text: '123' },
      { id: '2', text: '456' },
    ];
    const rendered = shallow(
      <ResultPanel
        tweets={data}
      />);
    const tweetlist = rendered.find('TweetList');
    expect(tweetlist.length).toBe(1);
    expect(tweetlist.prop('tweets')).toEqual(data);
  });
});
