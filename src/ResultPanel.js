import React from 'react';
import { ErrorText, StretchFlex } from './common';
import TweetList from './TweetList';

const ResultPanel = ({ error, tweets }) => (
  <StretchFlex>
    { error
    ? <ErrorText>{error}</ErrorText>
    : <TweetList tweets={tweets} />
   }
  </StretchFlex>
);

export default ResultPanel;
