import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { Icon } from '../icons';

import { GlobalTheme } from '../../theme/types';

interface HeaderProps {
  children?: React.ReactNode;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  onCancel?: () => void;
  theme: GlobalTheme;
}

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    margin-top: 24px;

    background: ${theme.modalHeaderBackground};
    color: ${theme.modalHeaderColor};
    padding: ${theme.modalHeaderPadding};

    border-top-right-radius: ${theme.modalBorderRadius};
    border-top-left-radius: ${theme.modalBorderRadius};

    font-size: 24px;
    font-weight: bold;
    box-sizing: border-box;
  `};
`;

const Title = styled.div`
  flex: 1;
`;

const Close = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: ${theme.modalHeaderHeight};
    cursor: pointer;

    transition: all ${theme.animationTimeFast}s;
    opacity: 0.5;

    &:hover,
    &:focus {
      opacity: 1;
      outline: 0;
    }

    &::-moz-focus-inner {
      border: none;
    }
  `};
`;

export const Header: React.FunctionComponent<HeaderProps> = ({
  children,
  closable,
  closeIcon,
  onCancel,
  theme,
}) => {
  return (
    <Container theme={theme} className="rtk-modal-header">
      <Title>{children}</Title>
      {closable && (
        <Close onClick={onCancel} theme={theme} tabIndex={0}>
          {closeIcon ? closeIcon : <Icon.Times />}
        </Close>
      )}
    </Container>
  );
};

Header.displayName = 'ModalHeader';

Header.defaultProps = {
  closable: true,
};
