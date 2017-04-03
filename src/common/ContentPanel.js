import React from 'react';
import { StretchFlex } from './layout';
import { spacing } from './styleConstants';

const ContentPanel = ({ children, style }) => (
  <StretchFlex style={[{ padding: spacing.medium }, style]}>
    {children}
  </StretchFlex>
);

export default ContentPanel;
