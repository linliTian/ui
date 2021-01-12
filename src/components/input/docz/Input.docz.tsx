/* eslint-disable */
import * as React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  max-width: 350px;
`;

export const Container = ({ children }: any) => (
  <StyledContainer>{children}</StyledContainer>
);
