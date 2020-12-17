import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { motion } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';

import { GlobalTheme } from '../../theme/types';

import { Icon } from '../icons';

import { Typography } from '../typography/Typography';

export interface TableLoadingProps {
  loadingComponent?: React.ReactNode;
}

const LoadingContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingMask = styled.div<{ theme: GlobalTheme }>`
  ${({ theme }: { theme: GlobalTheme }) => css`
    height: 100%;
    width: 100%;

    opacity: 0.8;
    background: ${theme.colors.primaryBackground};
  `}
`;

const LoadingText = styled(Typography.Body)`
  position: absolute;
`;

const LoadingIcon = styled(Icon.Loading)`
  margin-right: 8px;
`;

export const TableLoading: React.FunctionComponent<TableLoadingProps> = ({
  loadingComponent,
}) => {
  const theme = useTheme();

  return (
    <LoadingContainer
      variants={{
        loading: {
          opacity: 1,
          transition: { duration: theme.animationTimeFast },
        },
        complete: {
          opacity: 0,
          transition: { duration: theme.animationTimeFast },
        },
      }}
      initial={'complete'}
      animate={'loading'}
      exit={'complete'}
    >
      <LoadingMask theme={theme} />
      <LoadingText theme={theme}>
        <LoadingIcon />
        {loadingComponent == null ? 'Loading Data...' : loadingComponent}
      </LoadingText>
    </LoadingContainer>
  );
};
