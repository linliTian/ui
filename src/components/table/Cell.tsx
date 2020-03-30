import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks/useTheme';

import { GlobalTheme } from '../../theme/types';

import { Justify } from './types';

interface CellProps {
  header?: boolean;
  justify?: Justify;
}

interface StyledCellProps {
  header?: boolean;
  justify?: Justify;
  theme: GlobalTheme;
}

const StyledCell = styled.div<StyledCellProps>`
  ${({ theme, justify, header }) => css`
    display: flex;
    align-items: center;
    justify-content: ${justify || 'flex-start'};

    padding: ${theme.tableBodyCellPadding};

    ${header &&
      css`
        padding: ${theme.tableHeadCellPadding};
      `}
  `}
`;

export const Cell: React.FunctionComponent<CellProps> = ({
  children,
  justify,
}) => {
  const theme = useTheme();

  return (
    <StyledCell theme={theme} justify={justify}>
      {children}
    </StyledCell>
  );
};
