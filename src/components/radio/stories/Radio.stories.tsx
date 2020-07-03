/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

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
    <Radio.Item>Item 1</Radio.Item>
    <Radio.Item>Item 2</Radio.Item>
    <Radio.Item disabled>Item 3</Radio.Item>
  </Radio>
);
