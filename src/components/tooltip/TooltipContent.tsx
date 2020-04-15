import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks/useTheme';

import { placement } from './placements';

import { GlobalTheme } from '../../theme/types';

interface TooltipContainerProps {
  placement: placement;
  theme: GlobalTheme;
}

interface OverlayContainerProps {
  theme: GlobalTheme;
}

interface ArrowProps {
  placement: placement;
  theme: GlobalTheme;
}

interface FloaterContentProps {
  placement: placement;
}

export const TooltipContainer = styled.div`
  ${({ placement, theme }: TooltipContainerProps) => css`
    position: relative;

    ${(placement === 'top' ||
      placement === 'topLeft' ||
      placement === 'topRight') &&
      css`
        padding-bottom: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-bottom: 4px;
      `}

    ${(placement === 'right' ||
      placement === 'rightTop' ||
      placement === 'rightBottom') &&
      css`
        padding-left: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-left: 4px;
      `}

    ${(placement === 'bottom' ||
      placement === 'bottomRight' ||
      placement === 'bottomLeft') &&
      css`
        padding-top: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-top: 4px;
      `}

    ${(placement === 'left' ||
      placement === 'leftTop' ||
      placement === 'leftBottom') &&
      css`
        padding-right: ${`calc(${theme.tooltipArrowSize} / 2)`};
        margin-right: 4px;
      `}
  `}
`;

export const OverlayContainer = styled.div`
  ${({ theme }: OverlayContainerProps) => css`
    background: ${theme.colors.primaryBackground};
    box-shadow: ${theme.tooltipBoxShadow};
    border-radius: 5px;
    border: ${theme.tooltipBorder};
    border-color: ${theme.colors.border};
  `}
`;

export const Arrow = styled.div`
  ${({ placement, theme }: ArrowProps) => css`
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

export const TooltipContent: React.FunctionComponent<FloaterContentProps> = ({
  children,
  placement,
}) => {
  const theme = useTheme();

  return (
    <TooltipContainer placement={placement} theme={theme}>
      <Arrow placement={placement} theme={theme} />
      <OverlayContainer theme={theme}>{children}</OverlayContainer>
    </TooltipContainer>
  );
};
