import * as React from 'react';
import cryptoRandomString from 'crypto-random-string';
import styled from 'styled-components';

import { useDropzone } from 'react-dropzone';

import PaperClip from '../icons/PaperClip';

import { useTheme } from '../../hooks/useTheme';
import { Typography } from '../typography/Typography';
import { DropPadFile } from './DropPadFile';

export interface DropPadProps {
  /** className for the DropPad component */
  className?: string;

  /** if true, the droppad will be hidden. Any dropped files will continue to be shown */
  hideDroppad?: boolean;

  /** called when the delete icon is clicked on a dropped file */
  // onDelete: (key: string | number) => Promise<any>;

  /** called with the itemKey and response from the server once the file has been uploaded. This is useful if there is meaningful info in the response that may be needed in order to delete the uploaded file. */
  onFileUploaded?: (itemKey: string | number, response: any) => void;

  /** if true, the droppad will be hidden. Any dropped files will continue to be shown */
  uploadUrl: string;
}

const Container = styled.div``;

const DropPadContainer = styled.div<{ isDragActive: boolean }>`
  min-height: 100px;
  background: ${({ theme, isDragActive }) =>
    isDragActive ? theme.dropPadHoverBackground : theme.dropPadBackground};
  padding: ${({ theme }) => theme.dropPadPadding};
  border-radius: ${({ theme }) => theme.dropPadBorderRadius};

  height: 3em;

  transition: background ${({ theme }) => theme.animationTimeVeryFast}s
    ease-in-out;

  cursor: pointer;
`;

const BorderContainer = styled.div<{ isDragActive: boolean }>`
  height: 100%;
  width: 100%;

  border: ${({ theme }) => theme.dropPadBorder};
  border-color: ${({ theme, isDragActive }) =>
    isDragActive ? theme.dropPadHoverBorderColor : theme.dropPadBorderColor};
  border-radius: ${({ theme }) => theme.dropPadBorderRadius};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPaperClip = styled(PaperClip)`
  margin-right: 8px;
`;

export const DropPad: React.FunctionComponent<DropPadProps> = ({
  className,
  hideDroppad,
  // onDelete,
  onFileUploaded,
  uploadUrl,
}) => {
  const [files, setFiles] = React.useState<
    {
      file: File;
      itemKey: string;
    }[]
  >([]);

  const handleDrop = React.useCallback(
    newFiles => {
      const newFilesWithId = newFiles.map(f => {
        return {
          file: f,
          // this is a necassary unique identifier
          itemKey: cryptoRandomString({ length: 5 }),
        };
      });
      setFiles([...files, ...newFilesWithId]);
    },
    [files]
  );

  const handleDelete = React.useCallback(
    itemKey => {
      const newFiles = files.filter(f => f.itemKey !== itemKey);
      setFiles(newFiles);

      // if there is an error it means the file wasn't uploaded so instead
      // we just filter it out. If there is no error than we execute the delete
      // queury
      // if (!isError) {
      //   try {
      //     await onDelete(itemKey);
      //     setFiles(newFiles);
      //   } catch (error) {
      //     console.warn(error);
      //   }
      // } else {
      //   setFiles(newFiles);
      // }
    },
    [files, setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  const theme = useTheme();

  return (
    <Container className={`${className} rtk-drop-pad`}>
      {!hideDroppad && (
        <DropPadContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          theme={theme}
        >
          <BorderContainer theme={theme} isDragActive={isDragActive}>
            <input
              {...getInputProps({
                multiple: false,
              })}
            />
            <Typography.Body>
              <StyledPaperClip />
              <strong>Choose a file</strong>&nbsp;to attach or drag it here.
            </Typography.Body>
          </BorderContainer>
        </DropPadContainer>
      )}
      {files.map(({ file, itemKey }) => {
        return (
          <DropPadFile
            uploadUrl={uploadUrl}
            onDelete={handleDelete}
            onFileUploaded={onFileUploaded}
            file={file}
            key={itemKey}
            itemKey={itemKey}
          />
        );
      })}
    </Container>
  );
};

DropPad.displayName = 'DropPad';
