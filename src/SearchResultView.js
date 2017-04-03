import React, { Component } from 'react';
import { ContentPanel } from './common';
import { SEARCH_TERM, getTweets } from './api';
import Header from './Header';
import ResultPanel from './ResultPanel';

class SearchResultView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      error: '',
    };
  }

  async componentWillMount() {
    try {
      const tweets = await getTweets();
      this.setState({ tweets });
    } catch (err) {
      this.setState({ error: `there was an error connecting to Twitter ${err.message}` });
    }
  }

  render() {
    return (
      <ContentPanel>
        <Header>
          Results for {`#${SEARCH_TERM}`}
        </Header>
        <ResultPanel
          error={this.state.error}
          tweets={this.state.tweets}
        />
      </ContentPanel>
    );
  }
}

export default SearchResultView;
