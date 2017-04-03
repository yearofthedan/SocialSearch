import React from 'react';
import { shallow } from 'enzyme';
import ResultPanel from '../ResultPanel';

describe('<ResultPanel>', () => {
  it('renders the component', () => {
    const rendered = shallow(<ResultPanel tweets={[]} />);
    expect(rendered.type()).not.toBeNull();
  });

  it('renders an entry for each tweet', () => {
    const data = [
      { id: '1', text: '123' },
      { id: '2', text: '456' },
    ];
    const rendered = shallow(
      <ResultPanel
        tweets={data}
      />);
    const tweets = rendered.find('Tweet');
    expect(tweets.length).toBe(2);
    expect(tweets.at(0).prop('tweet')).toEqual(data[0]);
    expect(tweets.at(1).prop('tweet')).toEqual(data[1]);
  });

  it('shows an error when there is an error', () => {
    const rendered = shallow(
      <ResultPanel
        error="There was an error"
      />);
    const error = rendered.find('ErrorText');
    expect(error.props().children).toContain('There was an error');
  });
});
