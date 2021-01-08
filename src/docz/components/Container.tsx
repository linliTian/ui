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

export const StyledCollapseContent = styled.div`
  min-height: 200px;
`;

export const CollapseContent = ({ children }: any) => (
  <StyledCollapseContent>{children}</StyledCollapseContent>
);

export const AccordionContainer = styled.div`
  width: 400px;
  padding: 10px;
`;
