import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks';

import { GlobalTheme } from '../../theme/types';

export interface SiderProps {
  /** classname for the Layout.Sider */
  className?: string;
}

interface StyledSiderProps {
  theme: GlobalTheme;
}

const StyledSider = styled.div<StyledSiderProps>`
  ${({ theme }) => css`
    @media (min-width: ${theme.mediaScreenSmall}) {
      width: ${theme.layoutSiderWidthSmall};
    }

    @media (min-width: ${theme.mediaScreenMedium}) {
      width: ${theme.layoutSiderWidthMedium};
    }

    @media (min-width: ${theme.mediaScreenLarge}) {
      width: ${theme.layoutSiderWidthLarge};
    }
  `}
`;

export const Sider: React.FunctionComponent<SiderProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <StyledSider className={`${className} rtk-layout-sider`} theme={theme}>
      {children}
    </StyledSider>
  );
};

Sider.displayName = 'LayoutSider';
