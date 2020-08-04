import * as React from 'react';
import styled from 'styled-components';

// @ts-ignore
import mdx from './Panel.mdx';

import { Typography } from '../../typography/Typography';
import { Panel } from '../Panel';

const Parent = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  max-width: 400px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export default {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const standard = () => {
  return (
    <Parent>
      <Container>
        <Panel>
          <Content />
        </Panel>
      </Container>
    </Parent>
  );
};

export const clickable = () => {
  return (
    <Parent>
      <Container>
        <Panel onClick={() => console.log('clicked')}>
          <Content>Click Me!</Content>
        </Panel>
      </Container>
    </Parent>
  );
};

export const title = () => {
  return (
    <Parent>
      <Container>
        <Panel title="Title">
          <Content>Content!</Content>
        </Panel>

        <Panel title="Title" titleLevel={5}>
          <Content>Content!</Content>
        </Panel>
      </Container>
    </Parent>
  );
};
