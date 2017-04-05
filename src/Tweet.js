import React from 'react';
import { View, Image } from 'react-native';
import { Body1Text, Body2Text, SpacedBetweenRow, Centered } from './common';
import { spacing } from './common/styleConstants';

const formatDate = date => new Date(date).toDateString();

const DetailsRow = ({ tweet }) => (
  <SpacedBetweenRow>
    <Body2Text>{formatDate(tweet.created_at)}</Body2Text>
    <Body2Text>{tweet.user.name}</Body2Text>
  </SpacedBetweenRow>
);

const ContentRow = ({ tweet }) => (
  <View style={{ flexDirection: 'row' }}>
    <Body1Text>{tweet.text}</Body1Text>
  </View>
);

const Avatar = ({ tweet }) => <Centered style={{ width: 50 }}><Image
  resizeMode="contain"
  style={{ width: 40, height: 40 }}
  source={{ uri: tweet.user.profile_image_url_https }}
/></Centered>;

const Tweet = ({ tweet }) => (
  <SpacedBetweenRow style={{ flex: 1, maxWidth: 350, padding: spacing.small }}>
    <Avatar tweet={tweet} />
    <View style={{ flex: 1 }}>
      <DetailsRow tweet={tweet} />
      <ContentRow tweet={tweet} />
    </View>
  </SpacedBetweenRow>
);

export default Tweet;
