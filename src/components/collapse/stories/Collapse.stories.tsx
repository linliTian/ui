import * as React from 'react';
import styled from '@emotion/styled';

import { Collapse } from '../Collapse';

// @ts-ignore
import mdx from './Collapse.mdx';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const Container = styled.div`
  max-width: 400px;
  padding: 10px;
`;

const StyledCollapseContentBody = styled.div<any>`
  height: 200px;
`;

const CollapseContent = ({ children, previewing }: any) => (
  <StyledCollapseContentBody previewing={previewing}>
    {children}
  </StyledCollapseContentBody>
);

const TestContent = () => {
  return <CollapseContent />;
};

export const simple = () => {
  return (
    <Container>
      <Collapse header="Click Me" itemKey="default" defaultExpanded>
        <CollapseContent />
      </Collapse>
    </Container>
  );
};

export const open = () => (
  <Container>
    <Collapse header="Click Me" defaultExpanded itemKey="default">
      <TestContent />
    </Collapse>
  </Container>
);

export const destroy = () => (
  <Container>
    <Collapse header="Click Me" itemKey="default" destroyOnClose>
      <TestContent />
    </Collapse>
  </Container>
);

export const disabled = () => (
  <Container>
    <Collapse header="Click Me" itemKey="default" disabled>
      <TestContent />
    </Collapse>
  </Container>
);

export const footer = () => (
  <Container>
    <Collapse
      header="Click Me"
      defaultExpanded
      itemKey="default"
      footer="Collapse Footer"
    >
      <CollapseContent>Collapse Body</CollapseContent>
    </Collapse>
  </Container>
);
