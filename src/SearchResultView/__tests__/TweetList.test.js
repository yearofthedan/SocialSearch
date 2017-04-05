import React from 'react';
import { shallow, mount } from 'enzyme';
import TweetList from '../TweetList';

describe('<TweetList>', () => {
  it('renders the component', () => {
    const rendered = shallow(<TweetList tweets={[]} />);
    expect(rendered.type()).not.toBeNull();
  });

  it('renders an entry for each tweet', () => {
    const data = [
      { id: '1', created_at: '1111', text: '123', user: { name: 'dan' } },
      { id: '2', created_at: '2222', text: '456', user: { name: 'joe' } },
    ];
    const rendered = mount(
      <TweetList
        tweets={data}
      />);
    const tweets = rendered.find('Tweet');
    expect(tweets.length).toBe(2);
    expect(tweets.at(0).prop('tweet')).toEqual(data[0]);
    expect(tweets.at(1).prop('tweet')).toEqual(data[1]);
  });
});
