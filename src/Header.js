import React from 'react';
import { View } from 'react-native';
import { HeadlineText } from './common';

const Header = ({ children }) => (
  <View style={{ height: 60, justifyContent: 'center' }}>
    <HeadlineText>{children}</HeadlineText>
  </View>
);

export default Header;
