import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 20px;
  overflow: scroll;
  height: 300px;
`;

export const StoryContainer: React.FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};
