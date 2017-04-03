import React from 'react';
import { View } from 'react-native';

const StretchFlex = ({ children, style, ...props }) => (
  <View style={{ flex: 1, alignItems: 'stretch', ...style }} {...props}>
    { children }
  </View>

);

export default StretchFlex;
