/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Notification } from '../Notification';

// @ts-ignore
import mdx from './Notification.mdx';

export default {
  title: 'Components/Notification',
  component: Notification,
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
    <Notification itemKey="1" notificationType="default" title="Title Text">
      Insert message here.
    </Notification>
    <Spacer />
    <Notification itemKey="2" notificationType="warning" title="Warning">
      Insert warning message here.
    </Notification>
    <Spacer />
    <Notification itemKey="3" notificationType="info" title="Info">
      Insert info message here.
    </Notification>
    <Spacer />
    <Notification itemKey="4" notificationType="success" title="Success!">
      Insert info success here.
    </Notification>
    <Spacer />
    <Notification itemKey="5" notificationType="error" title="Error">
      Insert info error here.
    </Notification>
  </React.Fragment>
);
