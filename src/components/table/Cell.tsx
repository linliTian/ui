import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks/useTheme';

import { GlobalTheme } from '../../theme/types';

import { Justify } from './Table';

interface CellProps {
  className?: string;
  header?: boolean;
  justify?: Justify;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

interface StyledCellProps {
  header?: boolean;
  justify?: Justify;
  theme: GlobalTheme;
}

const StyledCell = styled.div<StyledCellProps>`
  ${({ theme, justify, header }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${justify || 'flex-start'};

    padding: ${theme.tableBodyCellPadding};

    ${header &&
    css`
      padding: ${theme.tableHeadCellPadding};
    `}
  `}
`;
StyledCell.displayName = 'StyledCell';

export const Cell: React.FunctionComponent<CellProps> = ({
  className,
  children,
  justify,
  onClick,
}) => {
  const theme = useTheme();

  const handleClick = React.useCallback(
    (e) => {
      if (onClick) {
        onClick(e);
      }
    },
    [onClick]
  );

  return (
    <StyledCell
      className={className}
      onClick={handleClick}
      theme={theme}
      justify={justify}
    >
      {children}
    </StyledCell>
  );
};
