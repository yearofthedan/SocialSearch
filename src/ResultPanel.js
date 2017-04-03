import React from 'react';
import { Body1Text, ErrorText, StretchFlex } from './common';

const ResultPanel = ({ error, tweets }) => (
  <StretchFlex>
    { error
    ? <ErrorText>{error}</ErrorText>
    : tweets.map(tweet => <Body1Text key={tweet.id} >{tweet.text}</Body1Text>)
   }
  </StretchFlex>
);

export default ResultPanel;
