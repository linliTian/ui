/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Tooltip } from '../Tooltip';

export const positions = [
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

export const Overlay = styled.div`
  height: 100px;
  width: 100px;
`;

export const Current = styled.div`
  margin-top: 16px;
`;

export const Spacer = styled.div`
  height: 16px;
`;
