import * as React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { rgba } from 'polished';

import { ThemeProvider } from '../../styled';

import { Button } from '../../components/button/Button';

import { createTheme } from '../../theme';

const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 4px;
    padding: 20px;

    background: ${theme.colors.secondaryBackground};
  `};
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const theme1 = createTheme({}, {});

const theme2 = createTheme(
  {
    primaryBackground: '#2D2D2D',
    secondary: '#ad7101',
    secondaryBackground: '#1B1B1B',
    tertiary: 'red',
    tertiaryBackground: rgba('#FFFFFF', 0.3),
    border: '#5C5F68',
    title: '#EFEFEF',
    subtitle: '#EFEFEF',
    body: '#FFFFFF',
    description: '#FFFFFF',
    label: '#FFFFFF',
    quaternaryBackground: rgba('#6FA4CB', 0.3),
  },
  {
    notificationBoxColor: '#000000',
  }
);

const themes = {
  theme1,
  theme2,
};

export default (props: any) => {
  const [themeIndex, setThemeIndex] = React.useState<'theme1' | 'theme2'>(
    'theme1'
  );

  const onClick = React.useCallback(() => {
    if (themeIndex === 'theme1') {
      setThemeIndex('theme2');
    } else {
      setThemeIndex('theme1');
    }
  }, [themeIndex]);

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <Container>
        <Header>
          <Button size="small" shape="circle" onClick={onClick} />
        </Header>
        <div style={{ height: '15px' }} />
        {props.children}
      </Container>
    </ThemeProvider>
  );
};
