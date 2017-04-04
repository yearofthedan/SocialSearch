import React from 'react';
import { View } from 'react-native';

const SpacedBetweenRow = ({ children, style }) => (
  <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, style]}>
    { children }
  </View>

);

export default SpacedBetweenRow;
