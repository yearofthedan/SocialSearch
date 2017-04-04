import React from 'react';
import { View, ListView } from 'react-native';
import { Body1Text } from './common';

const TweetList = ({ tweets }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return (
    <ListView
      enableEmptySections
      dataSource={ds.cloneWithRows(tweets)}
      renderRow={tweet => <Tweet tweet={tweet} key={tweet.id} />}
    />
  );
};

const Tweet = ({ tweet }) => (
  <View style={{ height: 100 }}>
    <Body1Text>{tweet.created_at}</Body1Text>
    <Body1Text>{tweet.user.name}</Body1Text>
    <Body1Text>{tweet.text}</Body1Text>
  </View>
);

export default TweetList;
