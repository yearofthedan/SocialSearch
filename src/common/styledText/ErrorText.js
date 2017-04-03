import React from 'react';
import TitleText from './TitleText';
import { colours } from '../styleConstants';

const ErrorText = ({ style, children, ...props }) => (
  <TitleText style={[style, { color: colours.error }]} {...props} >{children}</TitleText>
);

export default ErrorText;
