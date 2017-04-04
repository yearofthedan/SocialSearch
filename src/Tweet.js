import React from 'react';
import { View, Image } from 'react-native';
import { Body1Text, TitleText, SpacedBetweenRow, Centered } from './common';

const formatDate = date => new Date(date).toDateString();

const DetailsRow = ({ tweet }) => (
  <SpacedBetweenRow>
    <TitleText>{formatDate(tweet.created_at)}</TitleText>
    <TitleText>{tweet.user.name}</TitleText>
  </SpacedBetweenRow>
);

const ContentRow = ({ tweet }) => (
  <View style={{ flexDirection: 'row' }}>
    <Body1Text>{tweet.text}</Body1Text>
  </View>
);

const Avatar = ({ tweet }) => <Centered style={{ width: 100 }}><Image
  style={{ width: 50, height: 50 }}
  source={{ uri: tweet.user.profile_image_url }}
/></Centered>;

const Tweet = ({ tweet }) => (
  <SpacedBetweenRow style={{ height: 100, width: 540, padding: 12 }}>
    <Avatar tweet={tweet} />
    <View style={{ width: 400 }}>
      <DetailsRow tweet={tweet} />
      <ContentRow tweet={tweet} />
    </View>
  </SpacedBetweenRow>
);

export default Tweet;
