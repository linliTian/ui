// Hack to allow the ColumnProps to show in the documentation

import * as React from 'react';

import { ColumnProps } from '../Table';

interface T {}

export const DummyColumn: React.FunctionComponent<ColumnProps<T>> = () => {
  return null;
};
