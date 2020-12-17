import * as React from 'react';

import styled from '@emotion/styled';

import { Floater } from '../floater/Floater';

import { placements, Placement } from './placements';

import { TooltipContainer } from './TooltipContainer';

export interface TooltipProps {
  /** className of the dropdown component */
  className?: string;

  /** distance the tooltip will render from the anchor element (in pixels) */
  gap?: string;

  /** if true, the arrow on the tooltip will be removed */
  hideArrow?: boolean;

  /** content to show in the dropdown */
  overlay?: React.ReactNode;

  /** the placement of the tooltip with respect to the trigger node */
  placement: Placement;

  /** trigger to show the dropdown item. (click to come later) */
  trigger?: 'hover' | 'click';

  /** if true, the tooltip will be shown. Use this to customize the tooltips behaviour */
  visible?: boolean;
}

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
`;

export const Tooltip: React.FunctionComponent<TooltipProps> = ({
  children,
  className,
  gap,
  hideArrow,
  placement,
  overlay,
  trigger,
  visible,
}) => {
  const [, forceRerender] = React.useState<object>({});
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef(null);

  const handleMouseEnter = React.useCallback(() => {
    if (trigger !== undefined && trigger === 'hover') {
      setOpen(true);
    }
  }, [trigger]);

  const handleMouseLeave = React.useCallback(() => {
    setOpen(false);
  }, []);

  const handleOnClick = React.useCallback(() => {
    if (trigger !== undefined && trigger === 'click') {
      setOpen(true);
    }
  }, [trigger]);

  const isOpen = visible == null ? open && triggerRef !== null : visible;

  // If the initial visibility is set, force a rerender to cause the
  // ref anchorElement ref to be refetched by the floater
  // This is specifically useful for tests but also if user wants to control
  // the visibilty of a tooltip on their own
  React.useEffect(() => {
    if (visible == null) {
      return;
    }

    setTimeout(() => {
      forceRerender({});
    }, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      ref={triggerRef}
      className={`${className} rtk-tooltip`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      {children}
      <Floater
        anchorElement={triggerRef.current}
        position={placements[placement]}
        open={isOpen}
        style={{ zIndex: 99999 }}
      >
        <TooltipContainer placement={placement} gap={gap} hideArrow={hideArrow}>
          {overlay}
        </TooltipContainer>
      </Floater>
    </Container>
  );
};

Tooltip.defaultProps = {
  trigger: 'hover',
};

Tooltip.displayName = 'Tooltip';
