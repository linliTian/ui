import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks/useTheme';

import { Placement } from './placements';

import { GlobalTheme } from '../../theme/types';

interface TooltipContainerProps {
  gap?: string;
  placement: Placement;
  hideArrow?: boolean;
}

interface OverlayContainerProps {
  theme: GlobalTheme;
}

interface ArrowProps {
  placement: Placement;
  theme: GlobalTheme;
}

interface TooltipContentProps {
  gap?: string;
  placement: Placement;
  theme: GlobalTheme;
}

export const TooltipContent = styled.div`
  ${({ placement, gap, theme }: TooltipContentProps) => css<
    TooltipContentProps
  >`
    position: relative;

    ${(placement === 'top' ||
      placement === 'topLeft' ||
      placement === 'topRight') &&
      css`
        padding-bottom: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-bottom: ${gap == null ? theme.tooltipMargin : gap};
      `}

    ${(placement === 'right' ||
      placement === 'rightTop' ||
      placement === 'rightBottom') &&
      css`
        padding-left: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-left: ${gap == null ? theme.tooltipMargin : gap};
      `}

    ${(placement === 'bottom' ||
      placement === 'bottomRight' ||
      placement === 'bottomLeft') &&
      css`
        padding-top: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-top: ${gap == null ? theme.tooltipMargin : gap};
      `}

    ${(placement === 'left' ||
      placement === 'leftTop' ||
      placement === 'leftBottom') &&
      css`
        padding-right: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-right: ${gap == null ? theme.tooltipMargin : gap};
      `}
  `}
`;

export const OverlayContainer = styled.div<OverlayContainerProps>`
  ${({ theme }) => css<OverlayContainerProps>`
    background: ${theme.colors.primaryBackground};
    box-shadow: ${theme.tooltipBoxShadow};
    border-radius: ${theme.tooltipBorderRadius};
    border: ${theme.tooltipBorder};
    border-color: ${theme.tooltipBorderColor};
  `}
`;

export const Arrow = styled.div<ArrowProps>`
  ${({ placement, theme }) => css<ArrowProps>`
    position: absolute;
    width: ${theme.tooltipArrowSize};
    height: ${theme.tooltipArrowSize};
    background: ${theme.colors.primaryBackground};
    transform: rotate(45deg);

    /* Arrow pointing down */
    ${(placement === 'top' ||
      placement === 'topLeft' ||
      placement === 'topRight') &&
      css`
        border-right: ${theme.tooltipBorder};
        border-bottom: ${theme.tooltipBorder};
        border-color: ${theme.tooltipBorderColor};
      `}

    /* Arrow pointing left */
    ${(placement === 'right' ||
      placement === 'rightTop' ||
      placement === 'rightBottom') &&
      css`
        border-bottom: ${theme.tooltipBorder};
        border-left: ${theme.tooltipBorder};
        border-color: ${theme.tooltipBorderColor};
      `}

    /* Arrow pointing up */
    ${(placement === 'bottom' ||
      placement === 'bottomRight' ||
      placement === 'bottomLeft') &&
      css`
        border-top: ${theme.tooltipBorder};
        border-left: ${theme.tooltipBorder};
        border-color: ${theme.tooltipBorderColor};
      `}

    /* Arrow pointing right */
    ${(placement === 'left' ||
      placement === 'leftTop' ||
      placement === 'leftBottom') &&
      css`
        border-top: ${theme.tooltipBorder};
        border-right: ${theme.tooltipBorder};
        border-color: ${theme.tooltipBorderColor};
      `}

    /* top arrow placements */
    ${placement === 'top' &&
      css`
        bottom: 0px;
        left: calc(50% - 8px);
      `}

    ${placement === 'topLeft' &&
      css`
        bottom: 0px;
        left: 20%;
      `}

    ${placement === 'topRight' &&
      css`
        bottom: 0px;
        right: 20%;
      `}

    /* right arrow placements */
    ${placement === 'rightTop' &&
      css`
        top: 10%;
        left: 0px;
      `}

    ${placement === 'right' &&
      css`
        top: calc(50% - 8px);
        left: 0px;
      `}

    ${placement === 'rightBottom' &&
      css`
        bottom: 10%;
        left: 0px;
      `}

    /* bottom arrow placements */
    ${placement === 'bottomRight' &&
      css`
        top: 0px;
        right: 20%;
      `}

    ${placement === 'bottom' &&
      css`
        top: 0px;
        left: calc(50% - 8px);
      `}

    ${placement === 'bottomLeft' &&
      css`
        top: 0px;
        left: 20%;
      `}

    /* left arrow placements */
    ${placement === 'leftBottom' &&
      css`
        bottom: 10%;
        right: 0px;
      `}

    ${placement === 'left' &&
      css`
        top: calc(50% - 8px);
        right: 0px;
      `}

    ${placement === 'leftTop' &&
      css`
        top: 10%;
        right: 0px;
      `}
  `}
`;

export const TooltipContainer: React.FunctionComponent<TooltipContainerProps> = ({
  children,
  gap,
  hideArrow,
  placement,
}) => {
  const theme = useTheme();

  return (
    <TooltipContent placement={placement} gap={gap} theme={theme}>
      {!hideArrow && <Arrow placement={placement} theme={theme} />}
      <OverlayContainer theme={theme}>{children}</OverlayContainer>
    </TooltipContent>
  );
};
