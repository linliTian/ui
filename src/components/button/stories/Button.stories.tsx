import * as React from 'react';
import styled from '@emotion/styled';

import { Button, SizeType } from '../Button';

// @ts-ignore
import mdx from './Button.mdx';

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Spacer = styled.span`
  height: 1px;
  padding: 5px;
`;

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const types = () => (
  <Container>
    <Button type="primary">Primary</Button>
    <Spacer />
    <Button type="secondary">Secondary</Button>
    <Spacer />
    <Button type="tertiary">Tertiary</Button>
    <Spacer />
    <Button type="danger">Danger</Button>
    <Spacer />
    <Button type="link">Link</Button>
  </Container>
);

export const ghost = () => (
  <Container>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Spacer />
    <Button type="secondary" ghost>
      Secondary
    </Button>
    <Spacer />
    <Button type="tertiary" ghost>
      Tertiary
    </Button>
    <Spacer />
    <Button type="danger" ghost>
      Danger
    </Button>
    <Spacer />
    <Button type="link" ghost>
      Link
    </Button>
  </Container>
);

export const disabled = () => (
  <Container>
    <Button type="primary" disabled>
      Primary
    </Button>
    <Spacer />
    <Button type="primary" ghost disabled>
      Ghost
    </Button>
    <Spacer />
    <Button type="danger" disabled>
      Danger
    </Button>
    <Spacer />
    <Button type="danger" ghost disabled>
      Ghost
    </Button>
    <Spacer />
    <Button type="link" disabled>
      Link
    </Button>
  </Container>
);

export const loading = () => {
  const [loading, toggleLoading] = React.useState(false);

  const handleToggle = React.useCallback(() => {
    toggleLoading(!loading);
  }, [loading, toggleLoading]);

  return (
    <React.Fragment>
      <div style={{ marginBottom: '15px' }}>
        <Button onClick={handleToggle}>
          {loading ? 'Cancel Loading' : 'Start Loading'}
        </Button>
      </div>
      <Container>
        <Button type="primary" onClick={handleToggle} loading={loading}>
          Primary
        </Button>
        <Spacer />
        <Button type="primary" onClick={handleToggle} loading={loading} ghost>
          Ghost
        </Button>
        <Spacer />
        <Button type="danger" onClick={handleToggle} loading={loading}>
          Danger
        </Button>
        <Spacer />
        <Button type="danger" onClick={handleToggle} loading={loading} ghost>
          Danger
        </Button>
        <Spacer />
        <Button type="link" onClick={handleToggle} loading={loading}>
          Link
        </Button>
      </Container>
    </React.Fragment>
  );
};

export const shape = () => (
  <Container>
    <Button shape="circle" type="primary">
      P
    </Button>
    <Spacer />
    <Button shape="circle" type="danger">
      D
    </Button>
    <Spacer />
    <Button shape="circle" type="primary" ghost>
      G
    </Button>
    <Spacer />
    <Button shape="circle" loading type="primary">
      P
    </Button>
  </Container>
);

export const size = () => {
  const [size, setSize] = React.useState<SizeType>('default');
  return (
    <React.Fragment>
      <Container>
        <Button onClick={() => setSize('small')}>Small</Button>
        <Spacer />
        <Button onClick={() => setSize('default')}>Default</Button>
        <Spacer />
        <Button onClick={() => setSize('large')}>Large</Button>
      </Container>
      <Container>
        <Button size={size} type="primary">
          Primary
        </Button>
        <Spacer />
        <Button size={size} shape="circle" ghost>
          G
        </Button>
      </Container>
    </React.Fragment>
  );
};
