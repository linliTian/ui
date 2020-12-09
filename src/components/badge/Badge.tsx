import * as React from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTheme } from '../../hooks';
import { GlobalTheme } from '../..';

export type BadgeColorType =
  | 'green'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'purple'
  | 'blue'
  | 'gray';

export interface BadgeProps {
  /** className of the Badge component */
  className?: string;
  /** Color to use for the body of the badge */
  backgroundColor?: BadgeColorType;
  /** Content to show in the badge */
  children?: React.ReactNode;
  /** Optional left side content to show, typically an icon, properly padded */
  leftChildren?: React.ReactNode;
  /** Optional right side content to show in the badge */
  rightChildren?: React.ReactNode;
}

interface StyledBadgeProps {
  backgroundColor?: BadgeColorType;
  theme: GlobalTheme;
}

function getThemeColor(theme, color) {
  switch (color) {
    case 'green':
      return theme.badgeBackgroundGreen;
    case 'red':
      return theme.badgeBackgroundRed;
    case 'blue':
      return theme.badgeBackgroundBlue;
    case 'yellow':
      return theme.badgeBackgroundYellow;
    case 'orange':
      return theme.badgeBackgroundOrange;
    case 'purple':
      return theme.badgeBackgroundPurple;
    case 'gray':
      return theme.badgeBackgroundGray;
    default:
      return theme.badgeBackgroundGreen;
  }
}

function needsDarkText(theme, color) {
  return color === 'yellow' || color === 'orange';
}

export const StyledBadge = styled.span<StyledBadgeProps>`
  ${({ backgroundColor, theme }) => css`
    padding: 4px 10px 4px 9px;
    border-radius: 16px;
    white-space: nowrap;
    font-weight: bold;
    border: 0px;
    color: ${needsDarkText(theme, backgroundColor)
      ? theme.badgeTextColorDark
      : theme.badgeTextColorLight};
    background: ${getThemeColor(theme, backgroundColor)};
  `};
`;

const SeparateContents = styled.span`
  margin-right: 4px;
`;

const SeparateRight = styled.span`
  margin-left: 4px;
`;

export const Badge: React.FunctionComponent<BadgeProps> = ({
  children,
  rightChildren,
  leftChildren,
  className,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <StyledBadge className={className} theme={theme} {...rest}>
      {leftChildren && <SeparateContents>{leftChildren}</SeparateContents>}
      {children}
      {rightChildren && <SeparateRight>{rightChildren}</SeparateRight>}
    </StyledBadge>
  );
};

Badge.displayName = 'Badge';

Badge.defaultProps = {
  className: '',
  rightChildren: null,
  leftChildren: null,
  backgroundColor: 'green',
};
