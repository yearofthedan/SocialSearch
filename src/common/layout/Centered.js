import React from 'react';
import { View } from 'react-native';

const Centered = ({ children, style }) => (
  <View style={[{ alignItems: 'center', justifyContent: 'center' }, style]}>
    { children }
  </View>

);

export default Centered;
