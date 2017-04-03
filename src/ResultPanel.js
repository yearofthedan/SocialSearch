import React from 'react';
import { View } from 'react-native';
import { Body1Text, ErrorText, StretchFlex } from './common';

const ResultPanel = ({ error, tweets }) => (
  <StretchFlex>
    { error
    ? <ErrorText>{error}</ErrorText>
    : tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} />)
   }
  </StretchFlex>
);

export default ResultPanel;

const Tweet = ({ tweet }) => (
  <View style={{ height: 100 }}>
    <Body1Text>{tweet.created_at}</Body1Text>
    <Body1Text>{tweet.user.name}</Body1Text>
    <Body1Text>{tweet.text}</Body1Text>
  </View>
);
