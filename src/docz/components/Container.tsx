import * as React from 'react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const PlayGroundContainer: React.FunctionComponent = ({ children }) => {
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

export const Spacer = styled.span`
  height: 1px;
  padding: 5px;
`;
