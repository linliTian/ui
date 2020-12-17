import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks';

import { GlobalTheme } from '../../theme/types';

export interface FooterProps {
  /** classname for the Layout.Footer */
  className?: string;
}

interface FooterContainerProps {
  theme: GlobalTheme;
}

const Container = styled.div<FooterContainerProps>`
  ${({ theme }) => css`
    height: ${theme.layoutFooterHeight};
  `}
`;

export const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <Container className={`${className} rtk-layout-footer`} theme={theme}>
      {children}
    </Container>
  );
};

Footer.displayName = 'LayoutFooter';
