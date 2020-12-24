import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';
import { Theme } from '../../theme/types';

export const Content = styled.div<Theme>`
  ${({ theme }) => css`
    padding: ${theme.modalContentPadding};
    overflow: auto;
    flex: 1;
  `};
`;
