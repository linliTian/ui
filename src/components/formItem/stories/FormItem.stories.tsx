/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Button } from '../../button/Button';
import { Input } from '../../input/Input';
import { FormItem } from '../FormItem';

// @ts-ignore
import mdx from './FormItem.mdx';

const Checkbox = styled.input``;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
`;

export default {
  title: 'Components/FormItem',
  component: FormItem,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const [status, setStatus] = React.useState<
    'error' | 'success' | 'warning' | 'loading' | undefined
  >();

  const handleCheck = React.useCallback(
    type => {
      if (type === status) {
        setStatus(undefined);
      } else {
        setStatus(type);
      }
    },
    [status]
  );

  return (
    <React.Fragment>
      <FlexContainer>
        <label>
          <Checkbox
            checked={status === 'error'}
            type="checkbox"
            onClick={() => handleCheck('error')}
          />
          error
        </label>
        <label>
          <Checkbox
            checked={status === 'warning'}
            type="checkbox"
            onClick={() => handleCheck('warning')}
          />
          warning
        </label>
        <label>
          <Checkbox
            checked={status === 'loading'}
            type="checkbox"
            onClick={() => handleCheck('loading')}
          />
          loading
        </label>
        <label>
          <Checkbox
            checked={status === 'success'}
            type="checkbox"
            onClick={() => handleCheck('success')}
          />
          success
        </label>
      </FlexContainer>
      <FormItem
        label="Label"
        status={status}
        message={`This is a ${status} message`}
      >
        <Input />
      </FormItem>
      <FormItem
        label="Label"
        status={status}
        message={`This is a ${status} message`}
      >
        <Input htmlType="textarea" />
      </FormItem>
    </React.Fragment>
  );
};
