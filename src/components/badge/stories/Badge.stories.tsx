/* eslint-disable */

import * as React from 'react';

import { Badge } from '../Badge';

// @ts-ignore
import mdx from './Badge.mdx';
import { Icon } from '../../icons';
import { useTheme } from '../../../hooks';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Spacer = styled.span`
  height: 1px;
  padding: 5px;
`;

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const theme = useTheme();
  const exampleIcon = <Icon.Check color={theme.colors.white} />;
  const exampleIconDark = <Icon.Check color={theme.colors.label} />;

  return (
    <Container>
      <Badge leftChildren={exampleIcon}>v10.42</Badge>
      <Spacer />
      <Badge rightChildren={exampleIcon} backgroundColor="red">
        v10.42
      </Badge>
      <Spacer />
      <Badge
        leftChildren={exampleIconDark}
        rightChildren={exampleIconDark}
        backgroundColor="yellow"
      >
        v10.42
      </Badge>
    </Container>
  );
};

export const image = () => {
  const left = <Icon.Exclamation />;
  return (
    <Container>
      <Badge leftChildren={left} backgroundColor="gray">
        <Icon.InfoCircle />
      </Badge>
      <Spacer />
      <Badge backgroundColor="blue">
        <Icon.InfoCircle />
      </Badge>
    </Container>
  );
};

export const text = () => {
  return (
    <Container>
      <Badge backgroundColor="purple">Text Only</Badge>
      <Spacer />
      <Badge backgroundColor="orange">?</Badge>
    </Container>
  );
};
