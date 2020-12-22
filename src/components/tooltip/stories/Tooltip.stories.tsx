/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Tooltip } from '../Tooltip';
import { Menu } from '../../menu/Menu';
import { Placement } from '../placements';

import { Button } from '../../button/Button';

// @ts-ignore
import mdx from './Tooltip.mdx';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const positions: Placement[] = [
  'topLeft',
  'top',
  'topRight',
  'rightBottom',
  'right',
  'rightTop',
  'bottomRight',
  'bottom',
  'bottomLeft',
  'leftTop',
  'left',
  'leftBottom',
];

const Overlay = styled.div`
  height: 100px;
  width: 100px;
`;

const Current = styled.div`
  margin-top: 16px;
`;

const Spacer = styled.div`
  height: 16px;
`;

export const simple = () => {
  const [index, setPositionIndex] = React.useState(0);

  const handleClick = React.useCallback(() => {
    if (index === positions.length - 1) {
      setPositionIndex(0);
    } else {
      setPositionIndex(index + 1);
    }
  }, [index]);

  const position = positions[index];
  return (
    <>
      <Tooltip placement={position} overlay={<Overlay />}>
        <Button onClick={handleClick} ghost>
          Click to Change Position
        </Button>
      </Tooltip>
      <Current>Current Position: {positions[index]}</Current>
    </>
  );
};

export const visible = () => {
  const [visible, setVisible] = React.useState(false);

  const overlay = (
    <Menu onClick={(key) => console.log(key)} defaultSelectedItem="1">
      <Menu.Item itemKey="1">Item 1</Menu.Item>
      <Menu.Item itemKey="2">Item 2</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Button onClick={() => setVisible(!visible)}>
        Click to Show Tooltip
      </Button>
      <Spacer />
      <Tooltip placement={'bottom'} overlay={overlay} visible={visible}>
        <Button ghost>Tooltip Here</Button>
      </Tooltip>
    </>
  );
};
