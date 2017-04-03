import React from 'react';
import { shallow } from 'enzyme';
import SearchResultView from '../SearchResultView';
import { getTweets } from '../api';

jest.mock('../api');

const asyncTestHelper = (execution) => {
  setTimeout(() => {
    execution();
  }, 0);
};

describe('<SearchResultView>', () => {
  it('renders the component', () => {
    const rendered = shallow(<SearchResultView />);
    expect(rendered.type()).not.toBeNull();
  });

  it('shows an error when there is an error', (done) => {
    getTweets.mockReturnValue(Promise.reject({ message: 'something' }));

    const rendered = shallow(<SearchResultView />);
    asyncTestHelper(() => {
      const results = rendered.find('View');
      const error = results.find('Text');
      expect(error.props().children).toContain('there was an error connecting to Twitter');
      done();
    });
  });

  it('renders an entry for each tweet returned', (done) => {
    getTweets.mockReturnValue(Promise.resolve([
      { id: '123', text: '123' },
      { id: '456', text: '456' },
    ]));

    const rendered = shallow(<SearchResultView />);
    asyncTestHelper(() => {
      const results = rendered.find('View');
      const tweets = results.find('Text');
      expect(tweets.children().length).toBe(2);
      done();
    });
  });
});
