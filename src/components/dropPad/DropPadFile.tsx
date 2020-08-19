import * as React from 'react';
import styled from 'styled-components';

import { Typography } from '../typography/Typography';
import { useTheme } from '../../hooks/useTheme';

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
  onDelete,
  onFileUploaded,
  uploadUrl,
}) => {
  const [percentUploaded, setPercentUploaded] = React.useState<number>(0);
  const [inProgress, setInProgress] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);
  const theme = useTheme();

  // handles the deletion of the attachment from the list
  const handleDelete = React.useCallback(() => {
    onDelete(itemKey, isError);
  }, [onDelete, itemKey, isError]);

  React.useEffect(() => {
    const xhr = new XMLHttpRequest();

    // while the file is uploading provide updates to the progress
    function onProgressUpdate(e) {
      const percentUploaded = Math.round((e.loaded * 100) / e.total);
      setPercentUploaded(percentUploaded);
      setInProgress(true);
    }

    // when the file has finished uploading this function will be called
    function onLoad() {
      setInProgress(false);
      if (onFileUploaded) {
        onFileUploaded(itemKey, JSON.parse(xhr.responseText));
      }
    }

    // if there is an error during the upload, lets let the user know
    function onError() {
      setIsError(true);
    }

    const formData = new FormData();

    formData.append('file', file);

    xhr.open('POST', uploadUrl, true);
    xhr.send(formData);

    xhr.upload.addEventListener('progress', onProgressUpdate);
    xhr.addEventListener('load', onLoad);
    xhr.addEventListener('error', onError);

    // remove event listeners when the component unmounts;
    return () => {
      xhr.upload.removeEventListener('progress', onProgressUpdate);
      xhr.removeEventListener('load', onLoad);
      xhr.removeEventListener('error', onError);

      // if the upload is currently in progress abort it
      // when the component unmounts
      if (inProgress) {
        xhr.abort();
      }
    };

    //eslint-disable-next-line
  }, []);

  return (
    <Container key={itemKey} theme={theme} isError={isError}>
      <ContentContainer>
        <TextContainer>
          <StyledFileIcon
            size={'lg'}
            color={isError ? theme.colors.red : theme.colors.primary}
          />
          <Typography.Body>
            <strong>{file.name}</strong>
          </Typography.Body>
        </TextContainer>
        <StyledTrashIcon
          onClick={handleDelete}
          size={'1x'}
          theme={theme}
          isError={isError}
          inverse
        />
      </ContentContainer>
      <LoadingBarContainer theme={theme}>
        <LoadingBar style={{ width: `${percentUploaded}%` }} theme={theme} />
      </LoadingBarContainer>
    </Container>
  );
};
