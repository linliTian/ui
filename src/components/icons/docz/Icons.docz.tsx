/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Icon as WolfIcon } from '../';
import { Typography } from '../../typography/Typography';

import { useTheme } from '../../../hooks';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
`;

export const CardContainer = styled.div`
  padding: 16px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Label = styled(Typography.Body)`
  text-align: center;
`;

export const AllIcons = () => {
  const theme = useTheme();
  return (
    <Container>
      {Object.entries(WolfIcon).map(([name, Icon]) => (
        <CardContainer>
          <IconContainer>
            <Icon state={'none'} color={theme.colors.primary} />
          </IconContainer>
          <Label>{name}</Label>
        </CardContainer>
      ))}
    </Container>
  );
};
