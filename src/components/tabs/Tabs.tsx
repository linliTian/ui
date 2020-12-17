import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { GlobalTheme } from '../../theme/types';

import { TabsContext } from './TabsContext';

import { TabsItem, TabsItemProps } from './TabsItem';

import { ActiveItem } from './types';

import { useTheme } from '../../hooks/useTheme';

export interface TabsFunctionComponent<T> extends React.FunctionComponent<T> {
  Item: React.FunctionComponent<TabsItemProps>;
}

export interface TabsProps {
  /** className of the tabs component */
  className?: string;

  /** the default selected tab item on initial render */
  defaultSelectedItem?: string | number;

  /** callback to handle when a tab item is clicked */
  onTabClick?: (key: string | number) => void;

  /** placement of the tabs */
  placement?: 'top';

  /** the currently selected tab item */
  selectedItem?: string | number;
}

interface StyledTabsContainerProps {
  placement?: 'top';
  theme: GlobalTheme;
}

const Container = styled.div`
  position: absolute;
`;

const TabsContainer = styled.div<StyledTabsContainerProps>`
  ${({ placement }) => css`
    ${placement === 'top' &&
      css`
        display: flex;
        align-items: center;
      `}
  `}
`;

const Inkbar = styled.div<{ theme: GlobalTheme }>`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.tabsInkbarColor};
    height: ${theme.tabsInkbarThickness};

    transition: all ${theme.animationTimeVeryFast}s ease-in-out;
  `}
`;

export const Tabs: TabsFunctionComponent<TabsProps> = ({
  selectedItem,
  className,
  children,
  defaultSelectedItem,
  onTabClick,
  placement,
}) => {
  const [activeItem, setActiveItem] = React.useState<ActiveItem>();

  const theme = useTheme();

  const handleTabClick = React.useCallback(
    key => {
      // prevents onTabClick from being called when the tab item is already selected
      if (activeItem && activeItem.itemKey !== key && onTabClick) {
        onTabClick(key);
      }
    },
    [onTabClick, activeItem]
  );

  return (
    <TabsContext.Provider
      value={{
        defaultSelectedItem,
        selectedItem,
        setActiveItem,
        onClick: handleTabClick,
      }}
    >
      <Container className={`${className} rtk-tabs`}>
        <TabsContainer
          className="rtk-tabs-container"
          placement={placement}
          theme={theme}
        >
          {children}
        </TabsContainer>
        <Inkbar
          theme={theme}
          style={{
            visibility: activeItem == null ? 'hidden' : 'visible',
            width: activeItem == null ? 'unset' : activeItem.width,
            left: activeItem == null ? 'unset' : activeItem.x,
          }}
        />
      </Container>
    </TabsContext.Provider>
  );
};

Tabs.Item = TabsItem;

Tabs.displayName = 'Tabs';

Tabs.defaultProps = {
  placement: 'top',
};

export { TabsItemProps };
