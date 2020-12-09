/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { NotificationBox } from '../NotificationBox';

// @ts-ignore
import mdx from './NotificationBox.mdx';

export default {
  title: 'Components/NotificationBox',
  component: NotificationBox,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const Spacer = styled.div`
  height: 16px;
`;

export const simple = () => (
  <React.Fragment>
    <NotificationBox itemKey={'1'} notificationType="warning">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
    <Spacer />
    <NotificationBox itemKey={'1'} notificationType="error">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
    <Spacer />
    <NotificationBox itemKey={'1'} notificationType="success">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
    <Spacer />
    <NotificationBox itemKey={'1'} notificationType="info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
    <Spacer />
    <NotificationBox itemKey={'1'} notificationType="default">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
  </React.Fragment>
);
