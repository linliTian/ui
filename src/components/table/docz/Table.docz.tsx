/* eslint-disable */
import * as React from 'react';
import styled from '@emotion/styled';

import { Table, ColumnProps } from '../Table';
import { Icon } from '../../icons/index';

export const IconSpacer = styled.span`
  margin-left: 16px;
`;

export const ButtonSpacer = styled.div`
  height: 16px;
`;

export const Actions = () => (
  <>
    <span>
      <Icon.Pencil />
    </span>
    <IconSpacer />
    <span>
      <Icon.Times />
    </span>
  </>
);

// Hack to allow the ColumnProps to show in the documentation
interface T {}

export const Column: React.FunctionComponent<ColumnProps<T>> = () => {
  return null;
};
