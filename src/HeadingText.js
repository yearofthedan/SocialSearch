import React from 'react';
import { Text } from 'react-native';

const HeadingText = ({ children, ...props }) => (
  <Text {...props}>{children}</Text>
);

export default HeadingText;
