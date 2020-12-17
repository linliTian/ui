import * as React from 'react';

import { motion } from 'framer-motion';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { GlobalTheme } from '../../theme/types';

import { Typography } from '../typography/Typography';

interface ContainerProps {
  theme: GlobalTheme;
  notificationType: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const Container = styled(motion.div)<ContainerProps>`
  min-height: ${({ theme }) => theme.notificationMinHeight};

  max-width: ${({ theme }) => theme.notificationMaxWidth};
  min-width: ${({ theme }) => theme.notificationMinWidth};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: ${({ theme }) => theme.notificationBackground};
  border-left: 8px solid;

  border-radius: ${({ theme }) => theme.notificationBorderRadius};

  margin-bottom: 16px;
  
  ${({ notificationType }) =>
    notificationType === 'error' &&
    css`
      border-left-color: ${({ theme }) => theme.colors.red};
    `}

  ${({ notificationType }) =>
    notificationType === 'warning' &&
    css`
      border-left-color: ${({ theme }) => theme.colors.yellow};
    `}

  ${({ notificationType }) =>
    notificationType === 'success' &&
    css`
      border-left-color: ${({ theme }) => theme.colors.green};
    `}

  ${({ notificationType }) =>
    notificationType === 'info' &&
    css`
      border-left-color: ${({ theme }) => theme.colors.blue};
    `}
  
  ${({ notificationType }) =>
    notificationType === 'default' &&
    css`
      border-left-color: ${({ theme }) => theme.colors.gray};
    `}

  box-shadow: ${({ theme }) => theme.notificationBoxBoxShadow};

  padding: 16px;
`;

export const NotificationTextContainer = styled.div`
  flex: 1;
  padding: 0 16px;
`;

export const NotificationText = styled(Typography.Body)`
  margin-top: 8px;
  text-align: left;
`;

export const NotificationTitle: React.FunctionComponent = ({ children }) => (
  <Typography.Title level={5}>{children}</Typography.Title>
);
