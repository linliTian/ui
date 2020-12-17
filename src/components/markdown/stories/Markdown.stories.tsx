/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Markdown } from '../Markdown';

// @ts-ignore
import mdx from './Markdown.mdx';

export default {
  title: 'Components/Markdown',
  component: Markdown,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => (
  <Markdown>
    {'# Heading'}
    {'## Sub-heading'}
    {'This is sample description'}
  </Markdown>
);
