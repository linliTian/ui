import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks';

import { GlobalTheme } from '../../theme/types';

export interface ContentProps {
  /** classname for the Layout.Content */
  className?: string;
}

interface ContentContainerProps {
  theme: GlobalTheme;
}

const Container = styled.div<ContentContainerProps>`
  ${() => css`
    flex: 1;
  `}
`;

export const Content: React.FunctionComponent<ContentProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <Container className={`${className} rtk-layout-content`} theme={theme}>
      {children}
    </Container>
  );
};

Content.displayName = 'LayoutContent';
