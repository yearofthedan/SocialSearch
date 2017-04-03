import React from 'react';
import { Text } from 'react-native';
import { colours } from '../styleConstants';

const Body1Text = ({ style, children, ...props }) => (
  <Text
    {...props}
    style={[style, { color: colours.textPrimary, fontSize: 14, fontFamily: 'sans-serif' }]}
  >{children}</Text>
);

export default Body1Text;
