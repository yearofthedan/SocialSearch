import React from 'react';
import { Text } from 'react-native';

const Body1Text = ({ style, children, ...props }) => (
  <Text
    {...props}
    style={[style, { fontSize: 14, fontFamily: 'sans-serif' }]}
  >{children}</Text>
);

export default Body1Text;
