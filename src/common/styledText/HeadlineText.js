import React from 'react';
import { Text } from 'react-native';

const HeadlineText = ({ style, children, ...props }) => (
  <Text
    {...props}
    style={[style, { fontSize: 24, fontFamily: 'sans-serif-medium' }]}
  >
    {children}
  </Text>
);

export default HeadlineText;
