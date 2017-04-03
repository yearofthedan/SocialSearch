/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import SearchResultView from './src';

export default class SocialSearch extends Component {
  render() {
    return (
      <SearchResultView />
    );
  }
}

AppRegistry.registerComponent('SocialSearch', () => SocialSearch);
