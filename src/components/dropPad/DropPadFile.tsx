import * as React from 'react';
import styled from '@emotion/styled';

import { Typography } from '../typography/Typography';
import { useTheme } from '../../hooks/useTheme';

import File from '../icons/File';
import TrashAlt from '../icons/TrashAlt';
import { Theme } from '../../theme/types';

export interface DropPadFileProps {
  /** name of the file */
  name: React.ReactNode;

  /** unique identifier for the key */
  itemKey: string | number;

  /** percentage that the file is uploaded */
  percentUploaded: number;

  /** called when the delete icon is clicked */
  onDelete?: (key: string | number) => void;
}

const Container = styled.div<Theme>`
  padding: 8px;
  background: ${({ theme }) => theme.dropPadBackground};
  border-radius: ${({ theme }) => theme.dropPadBorderRadius};

  margin-top: 8px;
`;
Container.displayName = 'Container';

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFileIcon = styled(File)<Theme>`
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledTrashIcon = styled(TrashAlt)<Theme>`
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px;
  cursor: pointer;
`;
StyledTrashIcon.displayName = 'StyledTrashIcon';

const LoadingBarContainer = styled.div<Theme>`
  position: relative;
  background: ${({ theme }) => theme.dropPadFileLoadingBackground};
  height: 4px;
  border-radius: 2px;

  margin-top: 8px;
`;

const LoadingBar = styled.div<Theme>`
  position: absolute;
  background: ${({ theme }) => theme.dropPadFileLoadingBarBackground};
  height: 4px;
  border-radius: 2px;
`;

export const DropPadFile: React.FunctionComponent<DropPadFileProps> = ({
  name,
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
            <strong>{name}</strong>
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
