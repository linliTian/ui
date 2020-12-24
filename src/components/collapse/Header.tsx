import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { GlobalTheme } from '../../theme/types';

import Plus from '../icons/Plus';
import Minus from '../icons/Minus';

interface HeaderProps {
  disabled?: boolean;
  expanded?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
  theme: GlobalTheme;
}

interface HeaderIconProps {
  icon?: React.ReactNode;
  expanded?: boolean;
  theme: GlobalTheme;
}

interface CustomProps {
  expanded?: boolean;
}

interface StyledHeaderProps {
  customProps: CustomProps;
  onClick: () => void;
  theme: any;
}

const HeaderContent = styled.div``;

const HeaderIconContainer = styled.div`
  display: flex;
  align-items: center;

  justify-self: end;
`;

const StyledHeader = styled.div<StyledHeaderProps>`
  ${({ customProps, theme }) => css`
    display: grid;
    grid-template-columns: auto 0.2fr;
    align-items: center;

    background: ${theme.collapseHeaderBackground};
    border: ${theme.collapseBorder};
    border-color: ${theme.collapseBorderColor};
    border-radius: ${theme.collapseBorderRadius};
    color: ${theme.collapseHeaderColor};

    padding: ${theme.collapseHeaderPadding};
    height: ${theme.collapseHeaderHeight};

    box-sizing: border-box;
    user-select: none;
    cursor: pointer;

    transition: all ${theme.animationTimeVeryFast}s;

    &:hover {
      background: ${theme.collapseHeaderHoverBackground};
      border: 1px solid transparent;
      color: ${theme.collapseHeaderHoverColor};
    }

    ${customProps.expanded &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `};
  `};
`;
StyledHeader.displayName = 'StyledHeader';

const HeaderIcon: React.FunctionComponent<HeaderIconProps> = ({
  icon,
  expanded,
  theme,
}) => {
  if (icon) {
    return <HeaderIconContainer>{icon}</HeaderIconContainer>;
  } else if (expanded) {
    return (
      <HeaderIconContainer>
        <Minus
          style={{
            height: theme.collapseIconSize,
            width: theme.collapseIconSize,
          }}
        />
      </HeaderIconContainer>
    );
  }

  return (
    <HeaderIconContainer>
      <Plus
        style={{
          height: theme.collapseIconSize,
          width: theme.collapseIconSize,
        }}
      />
    </HeaderIconContainer>
  );
};

const Header: React.FunctionComponent<HeaderProps> = ({
  disabled,
  icon,
  children,
  onClick,
  expanded,
  theme,
}) => (
  <StyledHeader
    className="rtk-collapse-header"
    theme={theme}
    onClick={onClick}
    customProps={{
      expanded,
    }}
  >
    <HeaderContent>{children}</HeaderContent>
    {!disabled && <HeaderIcon icon={icon} expanded={expanded} theme={theme} />}
  </StyledHeader>
);

Header.displayName = 'CollapseHeader';

export default Header;
