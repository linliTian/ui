/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Select, OptionType } from '../Select';

// @ts-ignore
import mdx from './Select.mdx';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const largeList = () => {
  const options: OptionType[] = [];
  for (let i = 0; i < 10000; i += 1) {
    options.push({
      label: `Option ${i}`,
      value: i.toString(),
    });
  }

  return (
    <Select
      selectProps={{
        options,
        menuPortalTarget: document.body,
      }}
    />
  );
};

export const simple = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Select
      selectProps={{
        options,
        menuPortalTarget: document.body,
      }}
    />
  );
};

export const multi = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Select
      selectProps={{
        options,
        isMulti: true,
        menuPortalTarget: document.body,
      }}
    />
  );
};

export const disabled = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Select
      selectProps={{
        options,
        isMulti: true,
        isDisabled: true,
        menuPortalTarget: document.body,
      }}
    />
  );
};
