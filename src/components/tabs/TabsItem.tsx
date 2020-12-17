import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { Typography } from '../typography/Typography';

import { TabsContext } from './TabsContext';

import { useTheme } from '../../hooks/useTheme';

import { GlobalTheme } from '../../theme/types';

export interface TabsItemProps {
  /** className of the tabs item component */
  className?: string;

  /** unique identifier for the tab items */
  itemKey: string | number;

  /** title of the tab item */
  title: React.ReactNode;
}

const Container = styled.div`
  ${({
    theme,
    isSelected,
  }: {
    theme: GlobalTheme;
    isSelected: boolean;
  }) => css<{ theme: GlobalTheme; isSelected: boolean }>`
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;

    padding: ${theme.tabsItemPadding};

    transition: opacity ${theme.animationTimeVeryFast}s ease-in-out;

    opacity: 0.7;

    ${isSelected &&
      css`
        opacity: 1;
      `}

    &:hover {
      opacity: 1;
    }
  `}
`;

const TabBody = styled(Typography.Body)`
  ${({ theme }: { theme: GlobalTheme }) => css<{ theme: GlobalTheme }>`
    color: ${theme.tabsItemColor};
  `}
`;

export const TabsItem: React.FunctionComponent<TabsItemProps> = ({
  className,
  itemKey,
  title,
}) => {
  const tabItemRef = React.useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const {
    defaultSelectedItem,
    onClick,
    setActiveItem,
    selectedItem,
  } = React.useContext(TabsContext);

  const handleClick = React.useCallback(
    e => {
      if (onClick) {
        onClick(itemKey, e);
      }
    },
    [onClick, itemKey]
  );

  const setSelectedItem = React.useCallback(() => {
    if (tabItemRef.current == null) {
      return;
    }

    if (setActiveItem) {
      setActiveItem({
        itemKey,
        width: tabItemRef.current.offsetWidth,
        x: tabItemRef.current.offsetLeft,
      });
    }
  }, [setActiveItem, tabItemRef, itemKey]);

  // handles setting the default selected item
  React.useEffect(() => {
    if (defaultSelectedItem === itemKey && tabItemRef.current !== null) {
      setSelectedItem();
    }
    // we only need to run on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handles when the selected item changes
  React.useEffect(() => {
    if (selectedItem === itemKey && tabItemRef.current !== null) {
      setSelectedItem();
    }
    // we only care when the selected item has changed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  return (
    <Container
      className={`${className} rtk-tabs-item`}
      onClick={handleClick}
      isSelected={selectedItem === itemKey}
    >
      <TabBody theme={theme} ref={tabItemRef}>
        {title}
      </TabBody>
    </Container>
  );
};

TabsItem.displayName = 'TabsItem';
