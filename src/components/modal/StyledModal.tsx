import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { motion } from 'framer-motion';

import { GlobalTheme } from '../../theme/types';

interface StyledModalProps {
  theme: GlobalTheme;
}

export const ModalRoot = styled(motion.div)``;

export const ModalMask = styled(motion.div)<StyledModalProps>`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1999;
    height: 100%;
    width: 100%;

    background: ${theme.modalMaskBackground};

    @media (max-width: ${theme.mediaScreenSmall}) {
      visibility: hidden;
    }
  `};
`;

export const ModalWrapper = styled.div<StyledModalProps>`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
    overflow: auto;

    text-align: center;

    @media (max-width: ${theme.mediaScreenSmall}) {
      overflow: hidden;
    }

    &::before {
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
      content: '';
    }
  `};
`;

export const ModalContainer = styled(motion.div)<StyledModalProps>`
  ${({ theme }) => css`
    display: inline-block;
    vertical-align: middle;
    text-align: left;

    min-height: ${theme.modalMinHeight};
    min-width: ${theme.modalMinWidth};

    margin: 0 auto;

    outline: 0;

    @media (max-width: ${theme.mediaScreenSmall}) {
      height: 100%;
      width: 100%;

      min-width: 0;
    }
  `};
`;

export const ModalBody = styled(motion.div)<StyledModalProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.modalBackground};
    border: ${theme.modalBorder};
    border-color: ${theme.modalBorderColor};
    border-radius: ${theme.modalBorderRadius};

    box-shadow: ${theme.modalBoxShadow};

    outline: 0;

    @media (max-width: ${theme.mediaScreenSmall}) {
      height: 100%;

      border-radius: 0;
      box-shadow: none;
    }
  `};
`;

export const ModalSentinel = styled.div<StyledModalProps>`
  width: 0;
  height: 0;
  overflow: hidden;

  &:focus {
    outline: 0;
  }
`;
