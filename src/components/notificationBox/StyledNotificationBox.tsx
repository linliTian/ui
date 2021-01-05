import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { motion } from 'framer-motion';

import * as React from 'react';
import { GlobalTheme } from '../../theme/types';

import { TitleProps, Typography } from '../typography/Typography';

interface ContainerProps {
  theme: GlobalTheme;
  notificationType: 'default' | 'success' | 'error' | 'warning' | 'info';
}

const getBackgroundColor = ({ notificationType, theme }) => {
  switch (notificationType) {
    case 'error':
      return css`
        background: ${theme.notificationBoxErrorBackground};
      `;
    case 'warning':
      return css`
        background: ${theme.notificationBoxWarningBackground};
      `;
    case 'success':
      return css`
        background: ${theme.notificationBoxSuccessBackground};
      `;
    case 'info':
      return css`
        background: ${theme.notificationBoxInfoBackground};
      `;
    case 'default':
      return css`
        background: ${theme.notificationBoxDefaultBackground};
      `;

    default:
      break;
  }
};

export const Container = styled(motion.div)<ContainerProps>`
  min-height: ${({ theme }) => theme.notificationBoxMinHeight};

  max-width: ${({ theme }) => theme.notificationBoxMaxWidth};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;

  ${getBackgroundColor}

  border-radius: ${({ theme }) => theme.notificationBoxBorderRadius};
  box-shadow: ${({ theme }) => theme.notificationBoxBoxShadow};

  padding: ${({ theme }) => theme.notificationBoxPadding};
`;
Container.displayName = 'Container';

export const NotificationTextContainer = styled.div`
  flex: 1;
  padding: 0 24px;
`;

export const NotificationText = styled(Typography.Body)`
  text-align: left;
  color: ${({ theme }) => theme.notificationBoxColor};
`;

const StyledTitle = styled(Typography.Title)`
  color: ${({ theme }) => theme.notificationBoxColor};
`;

export const NotificationTitle: React.FunctionComponent<TitleProps> = ({
  children,
}) => <StyledTitle level={5}>{children}</StyledTitle>;
