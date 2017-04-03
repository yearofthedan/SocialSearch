import React from 'react';
import { StretchFlex, Body1Text, ErrorText } from './common';

const ResultPanel = ({ error, tweets, ...props }) => (
  <StretchFlex {...props}>
    { error
      ? <ErrorText>{error}</ErrorText>
      : tweets.map(tweet => <Body1Text key={tweet.id} >{tweet.text}</Body1Text>)
     }
  </StretchFlex>
);

export default ResultPanel;
