import * as React from 'react';

import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';

import { FormItemContext } from './FormItemContext';
import { Typography } from '../typography/Typography';

export interface FormItemProps {
  /** className of the FormItem component */
  className?: string;

  /** Determines the style for the message and child component */
  status?: 'error' | 'success' | 'warning' | 'loading';

  /** Message to show when status is defined */
  message?: string;
}

const Container = styled.div``;
const StatusContainer = styled.div``;

const StatusMessage = styled(Typography.Description)`
  ${({ theme, otherProps }) =>
    otherProps.status === 'error' &&
    css`
      color: ${theme.colors.red};
    `}

  ${({ theme, otherProps }) =>
    otherProps.status === 'warning' &&
    css`
      color: ${theme.colors.yellow};
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
  message,
  status,
}) => {
  const theme = useTheme();
  return (
    <Container className={`${className} rtk-form-item `}>
      <FormItemContext.Provider
        value={{
          status,
          message,
        }}
      >
        {children}
      </FormItemContext.Provider>
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
  );
};

FormItem.displayName = 'FormItem';