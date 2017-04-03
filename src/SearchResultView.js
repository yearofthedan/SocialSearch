import React, { Component } from 'react';
import { View } from 'react-native';
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
      <View style={{ flex: 1, marginTop: 20 }}>
        <Header>
          Results for {`#${SEARCH_TERM}`}
        </Header>
        <ResultPanel
          error={this.state.error}
          tweets={this.state.tweets}
        />
      </View>
    );
  }
}

export default SearchResultView;
