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

  it('passes any errors to the result panel', (done) => {
    getTweets.mockReturnValue(Promise.reject({ message: 'something' }));

    const rendered = shallow(<SearchResultView />);
    asyncTestHelper(() => {
      const resultPanel = rendered.find('ResultPanel');
      expect(resultPanel.prop('error')).toContain('there was an error connecting to Twitter');
      done();
    });
  });

  it('passes any tweets to the result panel', (done) => {
    const tweets = [
      { id: '123', text: '123' },
      { id: '456', text: '456' },
    ];
    getTweets.mockReturnValue(Promise.resolve(tweets));

    const rendered = shallow(<SearchResultView />);
    asyncTestHelper(() => {
      const resultPanel = rendered.find('ResultPanel');
      expect(resultPanel.prop('tweets')).toEqual(tweets);
      done();
    });
  });
});
