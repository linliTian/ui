import * as React from 'react';
import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 400px;
  padding: 10px;
`;

const StyledCollapseContentBody = styled.div<any>`
  height: 200px;
`;

export const CollapseContent = ({ children, previewing }: any) => (
  <StyledCollapseContentBody previewing={previewing}>
    {children}
  </StyledCollapseContentBody>
);

export const TestContent = () => {
  return <CollapseContent />;
};
