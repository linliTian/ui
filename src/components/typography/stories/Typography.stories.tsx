import * as React from 'react';
import styled from '@emotion/styled';

import { Typography } from '../Typography';

// @ts-ignore
import mdx from './Typography.mdx';

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const Container = styled.div`
  max-width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  height: 16px;
`;

export const title = () => (
  <Container>
    <Typography.Title>Heading 1</Typography.Title>
    <Spacer />
    <Typography.Title level={2}>Heading 2</Typography.Title>
    <Spacer />
    <Typography.Title level={3}>Heading 3</Typography.Title>
    <Spacer />
    <Typography.Title level={4}>Heading 4</Typography.Title>
    <Spacer />
    <Typography.Title level={5}>Heading 5</Typography.Title>
    <Spacer />
    <Typography.Title level={6}>Heading 6</Typography.Title>
  </Container>
);

export const subtitle = () => (
  <Container>
    <Typography.Subtitle>Subtitle</Typography.Subtitle>
  </Container>
);

export const other = () => (
  <Container>
    <Typography.Description>Description</Typography.Description>
    <Typography.Label>Label</Typography.Label>
  </Container>
);

export const body = () => (
  <Typography.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique
    tincidunt augue, et elementum neque hendrerit et. Sed eu augue nec nunc
    scelerisque mattis non sit amet purus. Proin id ipsum porta, dictum enim
    porta, mattis velit. Vivamus viverra pharetra massa a placerat. Aliquam
    aliquet, purus eget mattis ultricies, est lacus gravida lectus, nec maximus
    nisl elit a ex. Phasellus lorem ante, molestie vitae elit vel, pharetra
    tincidunt arcu. Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Cras nisl nulla, aliquet id dapibus quis,
    dictum a ante. Vestibulum tristique sodales varius. Aliquam ornare nunc
    lectus, vitae blandit ex ultricies fermentum. Sed accumsan lorem eget
    euismod lacinia. Orci varius natoque penatibus et magnis dis parturient
    montes, nascetur ridiculus mus. Cras malesuada molestie nibh, in dapibus
    ante. Nam vel iaculis justo. Integer tortor nisi, placerat non rutrum ac,
    sagittis sed nunc. Morbi vitae orci purus.
  </Typography.Body>
);
