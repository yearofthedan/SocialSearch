import React from 'react';
import { Text } from 'react-native';
import { StretchFlex } from './common';

const ResultPanel = ({ error, tweets, ...props }) => (
  <StretchFlex {...props}>
    { error
      ? <Text>{error}</Text>
      : tweets.map(tweet => <Text key={tweet.id} >{tweet.text}</Text>)
     }
  </StretchFlex>
);

export default ResultPanel;
