import React from 'react';
import { Text } from 'react-native';
import { colours } from '../styleConstants';

const TitleText = ({ style, children, ...props }) => (
  <Text
    {...props}
    style={[style, { fontSize: 20, fontFamily: 'sans-serif-medium' }]}
  >{children}</Text>
);

export default TitleText;
