/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Tabs } from '../Tabs';

import { useTheme } from '../../../hooks/useTheme';

// @ts-ignore
import mdx from './Tabs.mdx';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 60px;

  display: flex;
  align-items: flex-end;
`;

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const [selectedTab, setSelectedTab] = React.useState<string | number>('2');

  const theme = useTheme();

  return (
    <Container theme={theme}>
      <Tabs
        defaultSelectedItem="2"
        selectedItem={selectedTab}
        onTabClick={key => setSelectedTab(key)}
      >
        <Tabs.Item title="Home" itemKey="1" />
        <Tabs.Item title="Incidents" itemKey="2" />
        <Tabs.Item
          title={
            <div>
              <span>Tickets</span>
            </div>
          }
          itemKey="3"
        />
        <Tabs.Item title="Customers" itemKey="4" />
      </Tabs>
    </Container>
  );
};
