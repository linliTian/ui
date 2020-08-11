import * as React from 'react';
import styled from 'styled-components';

import { Typography } from '../typography/Typography';
import { useTheme } from '../../hooks/useTheme';

import File from '../icons/File';
import TrashAlt from '../icons/TrashAlt';

import { DroppedFile } from './DropPad';

export interface DropPadFileProps extends DroppedFile {
  itemKey: string | number;
  onDelete?: (key: string | number) => void;
}

const Container = styled.div`
  padding: 8px;
  background: ${({ theme }) => theme.dropPadBackground};
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
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledTrashIcon = styled(TrashAlt)`
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px;
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
  percentUploaded,
  onDelete,
}) => {
  const theme = useTheme();

  const handleDelete = React.useCallback(() => {
    if (onDelete) {
      onDelete(itemKey);
    }
  }, [onDelete, itemKey]);

  return (
    <Container key={itemKey} theme={theme}>
      <ContentContainer>
        <TextContainer>
          <StyledFileIcon theme={theme} size={'lg'} />
          <Typography.Body>
            <strong>{file.name}</strong>
          </Typography.Body>
        </TextContainer>
        <StyledTrashIcon
          onClick={handleDelete}
          theme={theme}
          size={'1x'}
          inverse
        />
      </ContentContainer>
      <LoadingBarContainer theme={theme}>
        <LoadingBar style={{ width: `${percentUploaded}%` }} theme={theme} />
      </LoadingBarContainer>
    </Container>
  );
};
