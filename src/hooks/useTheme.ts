import * as React from 'react';

import { ThemeContext } from '@emotion/react';

import { createTheme } from '../theme';

export const useTheme = () => {
  const customizedTheme = React.useContext(ThemeContext);
  const theme = createTheme({}, customizedTheme);

  return theme;
};
