/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Button } from '../../button/Button';

import { NotificationBin, NotificationType } from '../NotificationBin';

const Spacer = styled.div`
  height: 16px;
  width: 16px;
`;

// @ts-ignore
import mdx from './NotificationBin.mdx';

export default {
  title: 'Components/NotificationBin',
  component: NotificationBin,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const [notifications, setNotifications] = React.useState<NotificationType[]>(
    []
  );

  const [notificationComponent, setNotificationComponent] = React.useState<
    'box' | 'default'
  >('default');

  const add = React.useCallback(() => {
    // @ts-ignore
    setNotifications(currentNotifications => {
      const randomNumber = Math.floor(Math.random() * 999);
      const newNotifcation = {
        itemKey: randomNumber,
        title: `Notification: ${randomNumber}`,
        children: <div>This is the description.</div>,
        notificationType: 'success',
      };

      return [...currentNotifications, newNotifcation];
    });
  }, []);

  const remove = React.useCallback(key => {
    setNotifications(currentNotifications => {
      return currentNotifications.filter(n => n.itemKey !== key);
    });
  }, []);

  const toggleComponent = React.useCallback(() => {
    setNotificationComponent(current => {
      if (current === 'default') {
        return 'box';
      }

      return 'default';
    });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Button onClick={add}>Add</Button>
        <Spacer />
        <Button onClick={toggleComponent}>Toggle Notification Component</Button>
      </div>
      <Spacer />
      <NotificationBin
        notificationComponent={notificationComponent}
        notifications={notifications}
        onRemove={remove}
      />
    </div>
  );
};
