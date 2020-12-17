import * as React from 'react';

import { ThemeContext } from '@emotion/react';

import { createTheme } from '../theme';

export const useTheme = () => {
  const defaultTheme = createTheme({}, {});
  const customizedTheme = React.useContext(ThemeContext);

  return { ...defaultTheme, ...customizedTheme };
};
