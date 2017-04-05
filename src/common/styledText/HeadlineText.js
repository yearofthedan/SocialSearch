import React from 'react';
import { Text } from 'react-native';
import { colours } from '../styleConstants';

const HeadlineText = ({ style, children, ...props }) => (
  <Text
    {...props}
    style={[style, { color: colours.textHighlight, fontSize: 24, fontFamily: 'Roboto-Medium' }]}
  >
    {children}
  </Text>
);

export default HeadlineText;
