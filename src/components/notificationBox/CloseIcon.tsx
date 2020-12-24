import * as React from 'react';

import styled from '@emotion/styled';

import Times from '../icons/Times';

import { useTheme } from '../../hooks';

const Container = styled.div`
  padding: 4px;

  cursor: pointer;
`;

export const CloseIcon: React.FunctionComponent<any> = ({ onClose }) => {
  const theme = useTheme();

  const handleClose = React.useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <Container onClick={handleClose}>
      <Times color={theme.notificationBoxColor} />
    </Container>
  );
};

CloseIcon.displayName = 'CloseIcon';
