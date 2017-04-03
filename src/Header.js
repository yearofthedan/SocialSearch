import React from 'react';
import { View } from 'react-native';
import HeadingText from './HeadingText';

const Header = ({ children, ...props }) => (
  <View {...props}>
    <HeadingText>{children}</HeadingText>
  </View>
);

export default Header;
