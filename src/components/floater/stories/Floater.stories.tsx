import * as React from 'react';
import styled from '@emotion/styled';

import { Button } from '../../button/Button';

import { Floater } from '../Floater';

// @ts-ignore
import mdx from './Floater.mdx';

export default {
  title: 'Components/Floater',
  component: Floater,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  background: white;
  height: 100px;

  border-radius: 7px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
`;

export const simple = () => {
  const [buttonRef, setRef] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [setOpen, open]);

  const handleRef = React.useCallback(
    (node) => {
      setRef(node);
    },
    [setRef]
  );

  return (
    <React.Fragment>
      <Button onClick={handleClick} ref={handleRef}>
        {open ? 'Hide' : 'Show'}
      </Button>
      <Floater
        anchorElement={buttonRef}
        position={['bc', 'tc']}
        open={open && buttonRef !== null}
      >
        I am the content
      </Floater>
    </React.Fragment>
  );
};

export const complex = () => {
  const [hasMountedFloater, setHasMountedFloater] = React.useState(false);
  const [anchorElement, setAnchorElement] = React.useState(null);
  const [floaterPosition, setFloaterPosition] = React.useState<string[]>([
    'bc',
    'tc',
  ]);

  const handleButtonClick = (e: any, position: string[]) => {
    const element = e.target;

    if (element === anchorElement) {
      setAnchorElement(null);
      setHasMountedFloater(false);
    } else if (anchorElement) {
      setAnchorElement(element);
      setFloaterPosition(position);
      setHasMountedFloater(true);
    } else {
      setAnchorElement(element);
      setFloaterPosition(position);
    }
  };

  return (
    <div>
      <ButtonContainer>
        <Button onClick={(e) => handleButtonClick(e, ['tc', 'bc'])}>
          Move to Top
        </Button>
        <span style={{ display: 'inline-block', width: '20px' }} />
        <Button onClick={(e) => handleButtonClick(e, ['bc', 'tc'])}>
          Move to Bottom
        </Button>
        <span style={{ display: 'inline-block', width: '20px' }} />
        <Button onClick={(e) => handleButtonClick(e, ['cr', 'cl'])}>
          Move to Right
        </Button>
      </ButtonContainer>
      <Floater
        position={floaterPosition}
        anchorElement={anchorElement}
        open={anchorElement !== null}
        animationProps={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          layout: hasMountedFloater,
        }}
        matchAnchorWidth
      >
        <Container />
      </Floater>
    </div>
  );
};
