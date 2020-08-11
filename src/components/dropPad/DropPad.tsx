import * as React from 'react';
import styled from 'styled-components';

import { useDropzone } from 'react-dropzone';

import PaperClip from '../icons/PaperClip';

import { useTheme } from '../../hooks/useTheme';
import { Typography } from '../typography/Typography';
import { DropPadFile } from './DropPadFile';

export interface DroppedFile {
  itemKey: string | number;
  file: File;
  percentUploaded: number;
}

export interface DropPadProps {
  /** className for the DropPad component */
  className?: string;

  /** files that have been dropped */
  files: DroppedFile[];

  /** if true, the droppad will be hidden. Any dropped files will continue to be shown */
  hideDroppad?: boolean;

  /** called after a file has been dropped on the pad */
  onDrop?: (files: File[]) => void;

  /** called when the delete icon is clicked on a dropped file */
  onDelete?: (key: string | number) => void;
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
  onDrop,
  onDelete,
  files,
}) => {
  const handleDrop = React.useCallback(
    files => {
      if (onDrop) {
        onDrop(files);
      }
    },
    [onDrop]
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
            <input {...getInputProps()} />
            <Typography.Body>
              <StyledPaperClip />
              <strong>Choose a file</strong>&nbsp;to attach or drag it here.
            </Typography.Body>
          </BorderContainer>
        </DropPadContainer>
      )}
      {files.map(({ itemKey, file, percentUploaded }) => {
        return (
          <DropPadFile
            file={file}
            key={itemKey}
            itemKey={itemKey}
            percentUploaded={percentUploaded}
            onDelete={onDelete}
          />
        );
      })}
    </Container>
  );
};

DropPad.defaultProps = {
  files: [],
};

DropPad.displayName = 'DropPad';
