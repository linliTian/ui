/* eslint-disable */

import * as React from 'react';

import { DropPad } from '../DropPad';

// @ts-ignore
import mdx from './DropPad.mdx';

export default {
  title: 'Components/DropPad',
  component: DropPad,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  return <DropPad uploadUrl={'<your_file_upload_url_here>'} />;
};
