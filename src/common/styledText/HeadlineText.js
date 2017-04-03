import React from 'react';
import { Text } from 'react-native';
import { colours } from '../styleConstants';

const HeadlineText = ({ style, children, ...props }) => (
  <Text
    {...props}
    style={[style, { color: colours.textHighlight, fontSize: 24, fontFamily: 'sans-serif-medium' }]}
  >
    {children}
  </Text>
);

export default HeadlineText;
