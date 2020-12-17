import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

import { Notification, NotificationProps } from '../notification/Notification';

import { NotificationBox } from '../notificationBox/NotificationBox';

export type NotificationType = Omit<NotificationProps, 'onClose'>;

export interface NotificationBinProps {
  /** className of the NotificationBin component */
  className?: string;

  /** The amount of time the notification will be shown in ms. (milliseconds) */
  duration?: number;

  /** Notifications to be shown. Each notification can have all props associated with the `Notification` component */
  notifications: NotificationType[];

  /** Determines which notification component to use */
  notificationComponent?: 'box' | 'default';

  /** Function to call to remove a notifcation from the stack */
  onRemove: (key: string | number) => void;
}

const Container = styled.div``;

export const NotificationBin: React.FunctionComponent<NotificationBinProps> = ({
  children,
  className,
  duration,
  notifications,
  notificationComponent,
  onRemove,
}) => {
  const NotificationComponent =
    notificationComponent === 'box' ? NotificationBox : Notification;
  return (
    <Container className={`${className} rtk-notification-bin`}>
      <AnimatePresence initial={false}>
        {notifications.map(({ itemKey, children, ...props }) => (
          <NotificationComponent
            duration={duration}
            key={itemKey}
            itemKey={itemKey}
            onClose={onRemove}
            animate
            {...props}
          >
            {children}
          </NotificationComponent>
        ))}
      </AnimatePresence>
      {children}
    </Container>
  );
};

NotificationBin.defaultProps = {
  duration: 5000,
  notificationComponent: 'default',
};

NotificationBin.displayName = 'NotificationBin';
