/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Radio } from '../Radio';

// @ts-ignore
import mdx from './Radio.mdx';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => (
  <Radio name="radio">
    <Radio.Item itemKey="item1">Item 1</Radio.Item>
    <Radio.Item itemKey="item2">Item 2</Radio.Item>
    <Radio.Item itemKey="item3" disabled>
      Item 3
    </Radio.Item>
  </Radio>
);
