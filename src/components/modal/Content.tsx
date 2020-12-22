import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.modalContentPadding};
    overflow: auto;
    flex: 1;
  `};
`;
