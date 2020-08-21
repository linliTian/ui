import * as React from 'react';

import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';

import { FormItemContext } from './FormItemContext';
import { Typography } from '../typography/Typography';

import { FormItemIcon } from './FormItemIcon';

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

const StatusContainer = styled.div`
  margin-bottom: 8px;
`;

const StatusMessage = styled(Typography.Description)`
  ${({ theme, otherProps }) =>
    otherProps.status === 'error' &&
    css`
      color: ${theme.colors.red};
    `}

  ${({ theme, otherProps }) =>
    otherProps.status === 'warning' &&
    css`
      color: ${theme.colors.orange};
    `}

  ${({ theme, otherProps }) =>
    otherProps.status === 'success' &&
    css`
      color: ${theme.colors.green};
    `}

  ${({ theme, otherProps }) =>
    otherProps.status === 'loading' &&
    css`
      color: ${theme.colors.primary};
    `}
`;

export const FormItem: React.FunctionComponent<FormItemProps> = ({
  children,
  className,
  hasIcon,
  label,
  message,
  status,
}) => {
  const theme = useTheme();
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
