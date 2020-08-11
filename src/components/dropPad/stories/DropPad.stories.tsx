/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { DropPad, DroppedFile } from '../DropPad';

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
  const [files, setFiles] = React.useState<DroppedFile[]>([]);

  const handleDrop = React.useCallback(recentFiles => {
    const newFiles = recentFiles.map(file => {
      return {
        file,
        percentUploaded: 0,
        itemKey: file.lastModified,
      };
    });

    setFiles([...files, ...newFiles]);
  }, []);

  return (
    <DropPad
      files={files}
      onDrop={handleDrop}
      onDelete={key => console.log(key)}
    />
  );
};
