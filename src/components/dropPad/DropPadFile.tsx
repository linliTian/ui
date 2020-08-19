import * as React from 'react';
import styled from 'styled-components';

import { Typography } from '../typography/Typography';
import { useTheme } from '../../hooks/useTheme';
import { useUploadOnMountEffect } from '../../hooks/useUploadOnMountEffect';

import File from '../icons/File';
import TrashAlt from '../icons/TrashAlt';

export interface DropPadFileProps {
  uploadUrl: string;
  itemKey: string | number;
  file: File;
  onDelete: (itemKey: string | number, isError: boolean) => void;
  onFileUploaded?: (itemKey: string | number, response: any) => void;
}

const Container = styled.div<{ isError: boolean }>`
  padding: 8px;
  background: ${({ theme, isError }) =>
    isError ? theme.dropPadFileErrorBackground : theme.dropPadBackground};
  border-radius: ${({ theme }) => theme.dropPadBorderRadius};

  margin-top: 8px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFileIcon = styled(File)`
  margin-right: 8px;
`;

const StyledTrashIcon = styled(TrashAlt)<{ isError: boolean }>`
  color: ${({ theme, isError }) =>
    isError ? theme.colors.red : theme.colors.primary};
  margin: 4px;
  cursor: pointer;
`;

const LoadingBarContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.dropPadFileLoadingBackground};
  height: 4px;
  border-radius: 2px;

  margin-top: 8px;
`;

const LoadingBar = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.dropPadFileLoadingBarBackground};
  height: 4px;
  border-radius: 2px;
`;

export const DropPadFile: React.FunctionComponent<DropPadFileProps> = ({
  file,
  itemKey,
  // onDelete,
  onFileUploaded,
  uploadUrl,
}) => {
  const theme = useTheme();

  const { percentUploaded, error } = useUploadOnMountEffect({
    file,
    uploadUrl,
    itemKey,
    onFileUploaded,
  });

  const hasError = !(error == null);

  return (
    <Container key={itemKey} theme={theme} isError={hasError}>
      <ContentContainer>
        <TextContainer>
          <StyledFileIcon
            size={'lg'}
            color={hasError ? theme.colors.red : theme.colors.primary}
          />
          <Typography.Body>
            <strong>{file.name}</strong>
          </Typography.Body>
        </TextContainer>
        <StyledTrashIcon
          // onClick={onDelete}
          size={'1x'}
          theme={theme}
          isError={hasError}
          inverse
        />
      </ContentContainer>
      <LoadingBarContainer theme={theme}>
        <LoadingBar style={{ width: `${percentUploaded}%` }} theme={theme} />
      </LoadingBarContainer>
    </Container>
  );
};
