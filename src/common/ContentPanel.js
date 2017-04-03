import React from 'react';
import { StretchFlex } from './layout';
import { spacing, colours } from './styleConstants';

const ContentPanel = ({ children, style }) => (
  <StretchFlex
    style={[{ padding: spacing.medium, backgroundColor: colours.backgroundDark }, style]}
  >
    {children}
  </StretchFlex>
);

export default ContentPanel;
