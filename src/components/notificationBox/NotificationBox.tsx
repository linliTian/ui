import * as React from 'react';

import { useTheme } from '../../hooks/useTheme';

import {
  Container,
  NotificationTextContainer,
  NotificationText,
  NotificationTitle,
} from './StyledNotificationBox';

import { NotificationIcon } from './NotificationIcon';
import { CloseIcon } from './CloseIcon';
import { GlobalTheme } from '../../theme/types';

export interface NotificationBoxProps {
  /** If true, the close icon will appear on the notification for interaction */
  allowClose?: boolean;

  /** If true, the notification will animate on mount and unmount */
  animate?: boolean;

  /** className of the notification component */
  className?: string;

  /** Content of the notification */
  children?: React.ReactNode;

  /** The amount of time in ms (milliseconds) the notification will be visible and mounted. */
  duration?: number;

  /** Unique identifier for each notification */
  itemKey: string | number;

  /** Callback to be called when close is clicked */
  onClose?: (key: string | number) => void;

  /** Determines the intent of the notification for the user */
  notificationType: 'default' | 'success' | 'error' | 'warning' | 'info';

  /** the title text of the notification */
  title?: string;
}

export const NotificationBox: React.FunctionComponent<NotificationBoxProps> = ({
  allowClose,
  animate,
  children,
  className,
  onClose,
  notificationType,
  itemKey,
  duration,
  title,
}) => {
  const theme = useTheme() as GlobalTheme;

  // Remove the notification
  const close = React.useCallback(() => {
    if (onClose) {
      onClose(itemKey);
    }
  }, [onClose, itemKey]);

  // when the notification mounts, set a timeout to remove it.
  React.useEffect(() => {
    if (duration) {
      window.setTimeout(() => {
        close();
      }, duration);
    }

    // eslint-disable-next-line
  }, []);

  // memoize the animation props
  const animationProps = React.useMemo(() => {
    if (animate) {
      return {
        positionTransition: {
          type: 'tween',
          duration: 0.2,
        },
        layout: true,
        initial: { opacity: 0, x: 50 },
        animate: {
          opacity: 1,
          x: 0,
          transition: { type: 'tween', duration: 0.2 },
        },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      };
    }

    return {};
  }, [animate]);

  return (
    <Container
      className={`${className} rtk-validation-notification`}
      theme={theme}
      notificationType={notificationType}
      {...animationProps}
    >
      <NotificationIcon notificationType={notificationType} />
      <NotificationTextContainer>
        <NotificationTitle theme={theme}>{title}</NotificationTitle>
        <NotificationText theme={theme}>{children}</NotificationText>
      </NotificationTextContainer>
      {allowClose && <CloseIcon onClose={close} />}
    </Container>
  );
};

NotificationBox.defaultProps = {
  allowClose: true,
};

NotificationBox.displayName = 'NotificationBox';
