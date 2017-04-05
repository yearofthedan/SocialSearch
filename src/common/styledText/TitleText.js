import React from 'react';
import { Text } from 'react-native';
import { colours } from '../styleConstants';

const TitleText = ({ style, children, ...props }) => (
  <Text
    {...props}
    style={[style, { color: colours.textAlternative, fontSize: 20, fontFamily: 'Roboto-Medium' }]}
  >{children}</Text>
);

export default TitleText;
