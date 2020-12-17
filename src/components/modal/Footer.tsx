import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { Button, ButtonProps } from '../button/Button';

import { GlobalTheme } from '../../theme/types';

interface FooterProps {
  cancelButtonProps?: ButtonProps;
  cancelButtonText?: React.ReactNode;
  okButtonProps?: ButtonProps;
  onCancel?: () => void;
  okButtonText?: React.ReactNode;
  onOk?: () => void;
  theme: GlobalTheme;
}

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.modalFooterHeight};

    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: ${theme.modalFooterPadding};
    box-sizing: border-box;

    border-bottom-right-radius: ${theme.modalBorderRadius};
    border-bottom-left-radius: ${theme.modalBorderRadius};
    background: ${theme.modalFooterBackground};
  `};
`;

const CancelButton = styled(Button)`
  margin-left: 16px;
`;

export const DefaultFooter: React.FunctionComponent<FooterProps> = ({
  cancelButtonProps,
  cancelButtonText,
  okButtonProps,
  onCancel,
  okButtonText,
  onOk,
}) => {
  return (
    <React.Fragment>
      <Button onClick={onOk} {...okButtonProps}>
        {okButtonText}
      </Button>
      <CancelButton onClick={onCancel} ghost {...cancelButtonProps}>
        {cancelButtonText}
      </CancelButton>
    </React.Fragment>
  );
};

DefaultFooter.displayName = 'DefaultModalFooter';

DefaultFooter.defaultProps = {
  okButtonText: 'Okay',
  cancelButtonText: 'Cancel',
};
