import React from 'react';
import { Text } from 'react-native';
import { colours } from '../styleConstants';

const Body2Text = ({ style, children, ...props }) => (
  <Text
    {...props}
    style={[style, { color: colours.textAlternative, fontSize: 14, fontFamily: 'Roboto-Regular' }]}
  >{children}</Text>
);

export default Body2Text;
