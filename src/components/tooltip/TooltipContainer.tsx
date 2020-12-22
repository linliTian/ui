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
  ${({ placement, gap, theme }: TooltipContentProps) => css`
    position: relative;

    ${placement === 'top' || placement === 'topLeft' || placement === 'topRight'
      ? css`
          padding-bottom: ${`calc(${theme.tooltipArrowSize} / 2)`};
          margin-bottom: ${gap == null ? theme.tooltipMargin : gap};
        `
      : null}

    ${placement === 'right' ||
    placement === 'rightTop' ||
    placement === 'rightBottom'
      ? css`
          padding-left: ${`calc(${theme.tooltipArrowSize} / 2)`};
          margin-left: ${gap == null ? theme.tooltipMargin : gap};
        `
      : null}

    ${placement === 'bottom' ||
    placement === 'bottomRight' ||
    placement === 'bottomLeft'
      ? css`
          padding-top: ${`calc(${theme.tooltipArrowSize} / 2)`};
          margin-top: ${gap == null ? theme.tooltipMargin : gap};
        `
      : null}

    ${placement === 'left' ||
    placement === 'leftTop' ||
    placement === 'leftBottom'
      ? css`
          padding-right: ${`calc(${theme.tooltipArrowSize} / 2)`};
          margin-right: ${gap == null ? theme.tooltipMargin : gap};
        `
      : null}
  `}
`;

export const OverlayContainer = styled.div<OverlayContainerProps>`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBackground};
    box-shadow: ${theme.tooltipBoxShadow};
    border-radius: ${theme.tooltipBorderRadius};
    border: ${theme.tooltipBorder};
    border-color: ${theme.tooltipBorderColor};
  `}
`;

const getArrowPointingStyle = ({ placement, theme }: ArrowProps) => {
  /* Arrow pointing down */
  if (
    placement === 'top' ||
    placement === 'topLeft' ||
    placement === 'topRight'
  ) {
    return css`
      border-right: ${theme.tooltipBorder};
      border-bottom: ${theme.tooltipBorder};
      border-color: ${theme.tooltipBorderColor};
    `;
  }

  /* Arrow pointing left */
  if (
    placement === 'right' ||
    placement === 'rightTop' ||
    placement === 'rightBottom'
  ) {
    return css`
      border-bottom: ${theme.tooltipBorder};
      border-left: ${theme.tooltipBorder};
      border-color: ${theme.tooltipBorderColor};
    `;
  }

  /* Arrow pointing up */
  if (
    placement === 'bottom' ||
    placement === 'bottomRight' ||
    placement === 'bottomLeft'
  ) {
    return css`
      border-top: ${theme.tooltipBorder};
      border-left: ${theme.tooltipBorder};
      border-color: ${theme.tooltipBorderColor};
    `;
  }

  /* Arrow pointing right */
  if (
    placement === 'left' ||
    placement === 'leftTop' ||
    placement === 'leftBottom'
  ) {
    return css`
      border-top: ${theme.tooltipBorder};
      border-right: ${theme.tooltipBorder};
      border-color: ${theme.tooltipBorderColor};
    `;
  }
};

const getArrowPlacements = ({ placement }: { placement: Placement }) => {
  switch (placement) {
    case 'top':
      return css`
        bottom: 0px;
        left: calc(50% - 8px);
      `;
    case 'topLeft':
      return css`
        bottom: 0px;
        left: 20%;
      `;
    case 'topRight':
      return css`
        bottom: 0px;
        right: 20%;
      `;
    case 'rightTop':
      return css`
        top: 10%;
        left: 0px;
      `;
    case 'right':
      return css`
        top: calc(50% - 8px);
        left: 0px;
      `;
    case 'rightBottom':
      return css`
        bottom: 10%;
        left: 0px;
      `;
    case 'bottomRight':
      return css`
        top: 0px;
        right: 20%;
      `;
    case 'bottom':
      return css`
        top: 0px;
        left: calc(50% - 8px);
      `;
    case 'bottomLeft':
      return css`
        top: 0px;
        left: 20%;
      `;
    case 'leftBottom':
      return css`
        bottom: 10%;
        right: 0px;
      `;
    case 'left':
      return css`
        top: calc(50% - 8px);
        right: 0px;
      `;
    case 'leftTop':
      return css`
        top: 10%;
        right: 0px;
      `;

    default:
      break;
  }
};

export const Arrow = styled.div<ArrowProps>`
  ${({ placement, theme }) => css`
    position: absolute;
    width: ${theme.tooltipArrowSize};
    height: ${theme.tooltipArrowSize};
    background: ${theme.colors.primaryBackground};
    transform: rotate(45deg);

    ${getArrowPointingStyle({ placement, theme })}
    ${getArrowPlacements({ placement })}
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
