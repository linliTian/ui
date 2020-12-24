import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { Typography } from '../typography/Typography';

import { Icon, SortState } from '../icons';

import { ColumnProps } from './Table';

import { GlobalTheme, Theme } from '../../theme/types';

import { Cell } from './Cell';

interface HeaderCellProps<T> {
  column: ColumnProps<T>;
  header?: boolean;
  onClick: (key: string | number, state: SortState) => void;
  sortedColumn?: string | number;
  theme: GlobalTheme;
}

interface StyledCellProps {
  theme: GlobalTheme;
  sortable?: boolean;
}

interface StyledSubtitleContentProps {
  sortable?: boolean;
}

const getSortState = (currentState: string): SortState => {
  switch (currentState) {
    case 'none':
      return 'asc';
    case 'asc':
      return 'dsc';
    case 'dsc':
      return 'none';
    default:
      return 'none';
  }
};

const StyledCell = styled(Cell)<StyledCellProps>`
  ${({ theme, sortable }) => css`
    transition: background ${theme.animationTimeFast}s ease-in-out;

    ${sortable &&
    css`
      &:hover {
        cursor: pointer;
        background: ${theme.colors.hoverBackground};
      }
    `}
  `}
`;
StyledCell.displayName = 'StyledCell';

const StyledSubtitle = styled(Typography.Subtitle)<Theme>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.tableHeadFontColor};
  font-size: ${({ theme }) => theme.tableHeadFontSize};
`;

const SubtitleContent = styled.span<StyledSubtitleContentProps>`
  ${({ sortable }) => css`
    margin-right: ${sortable ? '8px' : 0};
  `}
`;
SubtitleContent.displayName = 'SubtitleContent';

export const HeaderCell = <T extends any = any>(props: HeaderCellProps<T>) => {
  const { column, header, onClick, sortedColumn, theme } = props;

  const [sortState, setSortState] = React.useState<SortState>('none');

  const handleClick = React.useCallback(() => {
    if (column.sortable) {
      const newSortState = getSortState(sortState);
      onClick(column.key, newSortState);
      setSortState(newSortState);
    }
  }, [onClick, column, sortState]);

  // reset the sort state to remove the styles when the sorted column changes
  React.useEffect(() => {
    if (sortedColumn !== column.key) {
      setSortState('none');
    }
  }, [column.key, sortedColumn]);

  return (
    <StyledCell
      sortable={column.sortable}
      onClick={handleClick}
      justify={column.justify}
      header={header}
      theme={theme}
    >
      <StyledSubtitle theme={theme}>
        <SubtitleContent sortable={column.sortable}>
          {column.title}
        </SubtitleContent>
        {column.sortable && <Icon.Sort state={sortState} />}
      </StyledSubtitle>
    </StyledCell>
  );
};
