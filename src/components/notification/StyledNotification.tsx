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

const getBorderLeftColor = ({ notificationType, theme }) => {
  switch (notificationType) {
    case 'error':
      return css`
        border-left-color: ${theme.colors.red};
      `;
    case 'warning':
      return css`
        border-left-color: ${theme.colors.yellow};
      `;
    case 'success':
      return css`
        border-left-color: ${theme.colors.green};
      `;
    case 'info':
      return css`
        border-left-color: ${theme.colors.blue};
      `;
    case 'default':
      return css`
        border-left-color: ${theme.colors.gray};
      `;

    default:
      break;
  }
};

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

  ${getBorderLeftColor}

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
