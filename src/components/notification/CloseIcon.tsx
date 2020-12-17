import * as React from 'react';

import styled from '@emotion/styled';

import Times from '../icons/Times';

import { Typography } from '../typography/Typography';

const Container = styled.div`
  cursor: pointer;
  align-self: flex-start;
`;

interface CloseIconProps {
  itemKey: string | number;
  onClose?: (key: string | number) => void;
}

export const CloseIcon: React.FunctionComponent<CloseIconProps> = ({
  onClose,
  itemKey,
}) => {
  const handleClose = React.useCallback(() => {
    if (onClose) {
      onClose(itemKey);
    }
  }, [itemKey, onClose]);

  return (
    <Container onClick={handleClose}>
      <Typography.Body>
        <Times />
      </Typography.Body>
    </Container>
  );
};
