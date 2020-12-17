/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

// @ts-ignore
import mdx from './Icon.mdx';

import { Icon as WolfIcon } from '../';
import { Typography } from '../../typography/Typography';

import { useTheme } from '../../../hooks';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
`;

const CardContainer = styled.div`
  padding: 16px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const Label = styled(Typography.Body)`
  text-align: center;
`;

export default {
  title: 'Components/Icon',
  component: WolfIcon,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const theme = useTheme();
  return (
    <Container>
      {Object.entries(WolfIcon).map(([name, Icon]) => (
        <>
          <CardContainer>
            <IconContainer>
              <Icon state={'none'} color={theme.colors.primary} />
            </IconContainer>
            <Label>{name}</Label>
          </CardContainer>
        </>
      ))}
    </Container>
  );
};
