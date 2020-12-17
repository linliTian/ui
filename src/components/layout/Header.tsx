import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks';

import { GlobalTheme } from '../../theme/types';

export interface HeaderProps {
  /** classname for the Layout.Header */
  className?: string;
}

interface HeaderContainerProps {
  theme: GlobalTheme;
}

const Container = styled.div<HeaderContainerProps>`
  ${({ theme }) => css`
    height: ${theme.layoutHeaderHeight};

    display: flex;
    align-items: center;

    padding: ${theme.layoutHeaderPaddingLarge};

    @media (max-width: ${theme.mediaScreenMedium}) {
      padding: ${theme.layoutHeaderPaddingMedium};
    }

    @media (max-width: ${theme.mediaScreenSmall}) {
      padding: ${theme.layoutHeaderPaddingSmall};
    }
  `}
`;

export const Header: React.FunctionComponent<HeaderProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <Container className={`${className} rtk-layout-header`} theme={theme}>
      {children}
    </Container>
  );
};

Header.displayName = 'LayoutHeader';
