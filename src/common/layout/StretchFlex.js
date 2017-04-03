import React from 'react';
import { View } from 'react-native';

const StretchFlex = ({ children, style }) => (
  <View style={[{ flex: 1, alignItems: 'stretch' }, style]}>
    { children }
  </View>

);

export default StretchFlex;
