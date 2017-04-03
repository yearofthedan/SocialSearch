import React from 'react';
import TitleText from './TitleText';

const ErrorText = ({ style, children, ...props }) => (
  <TitleText style={[style, { color: 'red' }]} {...props} >{children}</TitleText>
);

export default ErrorText;
