import * as React from 'react';

import styled from '@emotion/styled';

import { RadioContext } from './context';

import { RadioItem, RadioItemProps } from './RadioItem';

export type { RadioItemProps } from './RadioItem';

export interface RadioFunctionComponent<T = {}>
  extends React.FunctionComponent<T> {
  Item: React.FunctionComponent<RadioItemProps>;
}

export interface RadioProps {
  /** className of the Radio component */
  className?: string;

  /** name of the radio items */
  name: string;

  /** called when an item is selected */
  onSelect?: (itemKey: string | number) => void;
}

const Container = styled.div``;

export const Radio: RadioFunctionComponent<RadioProps> = ({
  children,
  className,
  name,
  onSelect,
}) => (
  <Container className={`${className} rtk-radio`}>
    <RadioContext.Provider
      value={{
        name,
        onSelect,
      }}
    >
      {children}
    </RadioContext.Provider>
  </Container>
);

Radio.Item = RadioItem;

Radio.displayName = 'Radio';
