/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Toggle } from '../Toggle';

// @ts-ignore
import mdx from './Toggle.mdx';
import { Button } from '../../button/Button';

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Spacer = styled.span`
  height: 1px;
  padding: 5px;
`;

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const [isOn, setIsOn] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsOn(!isOn);
  }, [setIsOn, isOn]);

  return <Toggle onClick={handleClick} isOn={isOn} />;
};

export const isLoading = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [isOn, setIsOn] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsOn(!isOn);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setIsOn, isOn, setLoading]);

  return <Toggle onClick={handleClick} isLoading={isLoading} isOn={isOn} />;
};

export const isOn = () => {
  const [isOn, setIsOn] = React.useState(true);

  const handleClickOn = React.useCallback(() => setIsOn(true), [setIsOn]);
  const handleClickOff = React.useCallback(() => setIsOn(false), [setIsOn]);

  return (
    <React.Fragment>
      <Container>
        <Button onClick={handleClickOff}>Toggle Off</Button>
        <Spacer />
        <Button onClick={handleClickOn}>Toggle On</Button>
      </Container>
      <Container>
        <Toggle isOn={isOn} />
      </Container>
    </React.Fragment>
  );
};

export const disabled = () => <Toggle disabled />;
