import * as React from 'react';
import styled from '@emotion/styled';

interface TitleProps {
  title: string;
  subtitle: string;
}

const Subtitle = styled.div<any>`
  color: grey;
  font-size: 18px;
  margin-bottom: 40px;
`;

const StyledTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Title: React.FunctionComponent<TitleProps> = ({
  title,
  subtitle,
}) => (
  <React.Fragment>
    <StyledTitle>{title}</StyledTitle>
    <Subtitle>{subtitle}</Subtitle>
  </React.Fragment>
);
