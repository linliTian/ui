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
  const [files, setFiles] = React.useState<
    { file: File; itemKey: string | number }[]
  >([]);

  const handleDrop = React.useCallback(recentFiles => {
    const newFiles = recentFiles.map(file => {
      return {
        file,
        itemKey: file.lastModified,
      };
    });

    setFiles([...files, ...newFiles]);
  }, []);

  const handleDelete = React.useCallback(itemKey => {
    setFiles(prevFiles => prevFiles.filter(f => f.itemKey !== itemKey));
  }, []);

  return (
    <DropPad onDrop={handleDrop}>
      {files.map(({ file, itemKey }) => (
        <DropPad.File
          name={file.name}
          percentUploaded={0}
          itemKey={itemKey}
          onDelete={handleDelete}
        />
      ))}
    </DropPad>
  );
};
