import * as React from 'react';
import styled from '@emotion/styled';

const StyledTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const SectionTitle: React.FunctionComponent = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
);
