import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';

import { FormItemContext } from './FormItemContext';
import { Typography } from '../typography/Typography';

import { FormItemIcon } from './FormItemIcon';
import { GlobalTheme } from '../../theme/types';

export type Status = 'error' | 'success' | 'warning' | 'loading';

export interface FormItemProps {
  /** className of the FormItem component */
  className?: string;

  /** Determines the style for the message and child component */
  status?: Status;

  /** Message to show when status is defined */
  message?: React.ReactNode;

  /** if true, the status icon will be shown */
  hasIcon?: boolean;

  /** label for the form item */
  label?: React.ReactNode;
}

const FormItemContainer = styled.div`
  margin-bottom: 16px;
`;

const Container = styled.div`
  position: relative;
`;
Container.displayName = 'Container';

const StatusContainer = styled.div`
  margin-bottom: 8px;
`;

const getMessageStyle = ({ theme, otherProps }) => {
  const { status } = otherProps;

  switch (status) {
    case 'error':
      return css`
        color: ${theme.colors.red};
      `;
    case 'warning':
      return css`
        color: ${theme.colors.orange};
      `;
    case 'success':
      return css`
        color: ${theme.colors.green};
      `;
    case 'loading':
      return css`
        color: ${theme.colors.primary};
      `;

    default:
      break;
  }
};

const StatusMessage = styled(Typography.Description)`
  ${getMessageStyle}
`;
StatusMessage.displayName = 'StatusMessage';

export const FormItem: React.FunctionComponent<FormItemProps> = ({
  children,
  className,
  hasIcon,
  label,
  message,
  status,
}) => {
  const theme = useTheme() as GlobalTheme;
  return (
    <FormItemContainer className={`${className} rtk-form-item`}>
      <Typography.Label>{label}</Typography.Label>
      <Container>
        <FormItemContext.Provider
          value={{
            status,
            message,
          }}
        >
          {children}
        </FormItemContext.Provider>
        <AnimatePresence>
          {status && hasIcon && <FormItemIcon status={status} />}
        </AnimatePresence>
        <StatusContainer>
          <AnimatePresence>
            {message && status && (
              <motion.div
                key="validate-message"
                style={{ position: 'relative' }}
                initial={{ opacity: 0, top: -5 }}
                animate={{ opacity: 1, top: 0 }}
                exit={{ opacity: 0, top: -5 }}
                transition={{ duration: theme.animationTimeVeryFast }}
              >
                <StatusMessage otherProps={{ status }} theme={theme}>
                  {message}
                </StatusMessage>
              </motion.div>
            )}
          </AnimatePresence>
        </StatusContainer>
      </Container>
    </FormItemContainer>
  );
};

FormItem.defaultProps = {
  hasIcon: true,
};

FormItem.displayName = 'FormItem';
