import React from 'react';
import { ListView } from 'react-native';
import Tweet from './Tweet';

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

export default TweetList;
