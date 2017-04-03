import React from 'react';
import { View, Text } from 'react-native';

const ResultPanel = ({ error, tweets, ...props }) => (
  <View style={{ flex: 1, marginTop: 20 }} {...props}>
    { error
      ? <Text>{error}</Text>
      : tweets.map(tweet => <Text key={tweet.id} >{tweet.text}</Text>)
     }
  </View>
);

export default ResultPanel;
