import React from 'react';
import { View } from 'react-native';
import { HeadlineText } from './common';

const Header = ({ children, ...props }) => (
  <View style={{ height: 50, justifyContent: 'center' }} {...props}>
    <HeadlineText>{children}</HeadlineText>
  </View>
);

export default Header;
