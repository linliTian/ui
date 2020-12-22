import * as React from 'react';
import styled from '@emotion/styled';

import { AnimatePresence, motion, MotionProps } from 'framer-motion';

import { Portal } from '../portal/Portal';

import { Position, getRelativePosition } from '../../utils/getRelativePosition';

import { CSSProperties } from 'react';

export interface FloaterProps {
  /** Element to anchor portal to */
  anchorElement: HTMLElement | null;

  /** Animation props for motion.div */
  animationProps?: MotionProps;

  /** Content to show in the floater */
  children?: React.ReactNode;

  /** Floater node to mount against (defaults to document.body) */
  container?: () => HTMLElement | null;

  /** Disables floater behaviour and returns node to Parents DOM hierarchy */
  disableFloater?: boolean;

  /** Unique key used for motion to know when the floater is unmounting */
  floaterKey?: string | number;

  /** Floater will match the anchor element width when true */
  matchAnchorWidth?: boolean;

  /** Whether or not to show floater */
  open?: boolean;

  /** Position of the floater with respect the the anchor element. See `utilities/getRelativePosition` for how this works. */
  position: string[];

  /** style of the motion div. Typically used for height/width transitions */
  style?: CSSProperties;
}

const Container = styled.div<{ portalVisibility: boolean }>`
  visibility: ${(props) => (props.portalVisibility ? 'visible' : 'hidden')};
`;

export const Floater: React.FunctionComponent<FloaterProps> = (props) => {
  const {
    anchorElement,
    animationProps,
    children,
    container,
    disableFloater,
    floaterKey,
    matchAnchorWidth,
    open,
    position,
    style,
  } = props;

  const [
    portalElement,
    setPortalElement,
  ] = React.useState<HTMLDivElement | null>(null);

  const [portalPosition, setPortalPosition] = React.useState<Position | null>(
    null
  );

  // set the ref when react calls it back
  const handleRef = React.useCallback(
    (ref) => {
      setPortalElement(ref);
    },
    [setPortalElement]
  );

  // get the container for floater to mount to
  const getContainer = React.useCallback<() => HTMLElement | null>(() => {
    if (typeof container === 'function') {
      return container();
    }

    return null;
  }, [container]);

  // update the portal position
  const updatePortalPosition = React.useCallback(() => {
    if (portalElement && anchorElement) {
      const container = getContainer();
      const portalPosition = getRelativePosition(
        anchorElement,
        portalElement,
        position,
        container ? container : undefined
      );
      setPortalPosition(portalPosition);
    }
  }, [getContainer, position, portalElement, anchorElement]);

  // subscribe to window size
  // const windowSize = useResizeEffect();

  // on open changes, update the portal position
  React.useEffect(() => {
    if (open) {
      updatePortalPosition();
    } else {
      setPortalPosition(null);
    }
  }, [open, updatePortalPosition]);

  const portalVisibility: boolean =
    portalElement !== null && portalPosition !== null;

  return (
    <AnimatePresence>
      {open && anchorElement && (
        <Portal container={getContainer} disablePortal={disableFloater}>
          <motion.div
            key={floaterKey}
            ref={handleRef}
            style={{
              position: 'absolute',
              width: matchAnchorWidth
                ? `${anchorElement.offsetWidth}px`
                : 'auto',
              top: -999, // default position before calc
              left: -999, // default position before calc
              ...portalPosition,
              ...style,
            }}
            {...animationProps}
          >
            <Container
              portalVisibility={portalVisibility}
              className="rtk-floater"
            >
              {children}
            </Container>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
};

Floater.displayName = 'Floater';

Floater.defaultProps = {
  animationProps: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.1 },
  },
  disableFloater: false,
  container: undefined,
  floaterKey: 'floater',
  matchAnchorWidth: false,
  open: false,
  position: ['bc', 'tc'],
};
