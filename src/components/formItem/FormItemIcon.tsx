import * as React from 'react';
import styled from '@emotion/styled';

import { motion } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';

import Loading from '../icons/Loading';
import TimesCircle from '../icons/TimesCircle';
import ExclamationCircle from '../icons/ExclamationCircle';
import CheckCircle from '../icons/CheckCircle';

interface FormItemIconProps {
  status: 'error' | 'warning' | 'loading' | 'success';
}

const IconContainer = styled(motion.span)`
  position: absolute;
  top: calc(50% - 16px);

  display: flex;
  align-items: center;
`;

export const FormItemIcon: React.FunctionComponent<FormItemIconProps> = ({
  status,
}) => {
  const theme = useTheme();

  const getIcon = React.useCallback(() => {
    switch (status) {
      case 'error': {
        return <TimesCircle color={theme.colors.red} />;
      }
      case 'warning': {
        return <ExclamationCircle color={theme.colors.orange} />;
      }
      case 'success': {
        return <CheckCircle color={theme.colors.green} />;
      }
      case 'loading': {
        return <Loading color={theme.colors.primary} />;
      }
    }
  }, [status, theme]);

  return (
    <IconContainer
      key="status-icon"
      initial={{ opacity: 0, right: 0 }}
      animate={{ opacity: 1, right: 5 }}
      exit={{ opacity: 0, right: 0 }}
      transition={{ duration: 0.1 }}
    >
      {getIcon()}
    </IconContainer>
  );
};
