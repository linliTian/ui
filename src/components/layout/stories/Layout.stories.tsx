import * as React from 'react';
import styled from '@emotion/styled';

import { Layout } from '../Layout';

// @ts-ignore
import mdx from './Layout.mdx';

const Header = styled(Layout.Header)`
  background: lightblue;
`;

const Content = styled.div`
  height: 100px;
  width: 100%;

  background: lightgray;
`;

const Footer = styled(Layout.Footer)`
  background: lightblue;
`;

const Sider = styled(Layout.Sider)`
  background: lightyellow;
`;

const Spacer = styled.div`
  height: 32px;
`;

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  return (
    <div>
      <Layout>
        <Header></Header>
        <Layout.Content>
          <Content />
        </Layout.Content>
        <Footer></Footer>
      </Layout>
      <Spacer />
      <Layout hasSider>
        <Sider></Sider>
        <Layout>
          <Header></Header>
          <Layout.Content>
            <Content />
          </Layout.Content>
          <Footer></Footer>
        </Layout>
      </Layout>
      <Spacer />
      <Layout>
        <Header></Header>
        <Layout hasSider>
          <Sider></Sider>
          <Layout.Content>
            <Content />
          </Layout.Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    </div>
  );
};
