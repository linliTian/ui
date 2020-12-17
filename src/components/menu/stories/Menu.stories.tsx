/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Menu } from '../Menu';

// @ts-ignore
import mdx from './Menu.mdx';

const Container = styled.div`
  background: transparent;

  max-width: 300px;
`;

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => (
  <Container>
    <Menu onClick={key => console.log(key)}>
      <Menu.Item itemKey={'1'}>Item 1</Menu.Item>
      <Menu.Item itemKey={'2'}>Item 2</Menu.Item>
      <Menu.Item itemKey={'3'}>Item 3</Menu.Item>
    </Menu>
  </Container>
);

export const groups = () => (
  <Container>
    <Menu onClick={key => console.log(key)}>
      <Menu.ItemGroup title="Group 1">
        <Menu.Item itemKey={'1-1'} disabled>
          Sub Item 1
        </Menu.Item>
        <Menu.Item itemKey={'1-2'}>Sub Item 2</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Group 2">
        <Menu.Item itemKey={'2-1'}>Sub Item 2</Menu.Item>
        <Menu.Item itemKey={'2-2'}>Sub Item 3</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  </Container>
);
