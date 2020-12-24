import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';
import { faSortUp } from '@fortawesome/free-solid-svg-icons/faSortUp';

import { useTheme } from '../../hooks/useTheme';

export type SortState = 'none' | 'asc' | 'dsc';

export interface SortProps {
  state: SortState;
}

const Container = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const UpContainer = styled.span``;

const DownContainer = styled.span`
  margin-top: -1.5em;
`;

export const Sort: React.FunctionComponent<SortProps> = ({ state }) => {
  const {
    colors: { primary, description },
  } = useTheme();

  return (
    <Container>
      <UpContainer>
        <FontAwesomeIcon
          icon={faSortUp}
          color={state === 'asc' ? primary : description}
        />
      </UpContainer>
      <DownContainer>
        <FontAwesomeIcon
          icon={faSortDown}
          color={state === 'dsc' ? primary : description}
        />
      </DownContainer>
    </Container>
  );
};

Sort.displayName = 'Sort';

export default Sort;
