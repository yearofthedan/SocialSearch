import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SearchResultView extends Component {

  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <View>
          <Text>Results for...</Text>
        </View>
        <View>
          <Text>Placeholder for results list</Text>
        </View>
      </View>
    );
  }
}

export default SearchResultView;
