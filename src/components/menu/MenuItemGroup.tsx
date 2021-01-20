import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Typography } from '../typography/Typography';

export interface MenuItemGroupProps {
  /** className of the menu item group */
  className?: string;

  /** Title of the item group */
  title: React.ReactNode;
}

const Container = styled.div`
  padding: 0px 16px;
  margin: 8px 0px 0px 0px;
`;

export const MenuItemGroup: React.FunctionComponent<MenuItemGroupProps> = ({
  className,
  children,
  title,
}) => (
  <Container className={`${className} rtk-menu-item-group`}>
    <Typography.Description>{title}</Typography.Description>
    {children}
  </Container>
);

MenuItemGroup.displayName = 'MenuItemGroup';
