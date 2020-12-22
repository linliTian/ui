/* eslint-disable */

import * as React from 'react';
import styled from '@emotion/styled';

import { Accordion } from '../Accordion';

import { Button, Input } from '../../..';

// @ts-ignore
import mdx from './Accordion.mdx';

import { ItemKeyType } from '../types';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const StyledCollapseContent = styled.div`
  min-height: 200px;
`;

const CollapseContent = ({ children }: any) => (
  <StyledCollapseContent>{children}</StyledCollapseContent>
);

const AccordionContainer = styled.div`
  width: 400px;
  padding: 10px;
`;

export const standard = () => (
  <AccordionContainer>
    <Accordion classic={false} defaultExpandedItems={['1', '3']} itemGap={20}>
      <Accordion.Item itemKey="1" footer={<Button>Submit</Button>}>
        <CollapseContent>
          <Input label={'First Name'} />
          <Input label={'Last Name'} />
          <Input label={'Email'} />
          <Input label={'Phone Number'} />
        </CollapseContent>
      </Accordion.Item>
      <Accordion.Item itemKey="2">
        <CollapseContent />
      </Accordion.Item>
      <Accordion.Item itemKey="3">
        <CollapseContent />
      </Accordion.Item>
    </Accordion>
  </AccordionContainer>
);

export const classic = () => (
  <AccordionContainer>
    <Accordion itemGap={20} classic>
      <Accordion.Item itemKey="1">
        <CollapseContent />
      </Accordion.Item>
      <Accordion.Item itemKey="2">
        <CollapseContent />
      </Accordion.Item>
      <Accordion.Item itemKey="3">
        <CollapseContent />
      </Accordion.Item>
    </Accordion>
  </AccordionContainer>
);

export const external = () => {
  const itemKeys = ['1', '2', '3'];
  const [selectedItems, setSelectedItems] = React.useState<any>([]);

  const handleOnChange = React.useCallback(
    (key) => {
      const items = selectedItems.includes(key)
        ? selectedItems.filter((i: ItemKeyType) => i !== key)
        : selectedItems.concat(key);

      setSelectedItems(items);
    },
    [selectedItems]
  );

  const handleOnClick = React.useCallback(() => {
    if (selectedItems.length === itemKeys.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(itemKeys);
    }
  }, [selectedItems]);

  const isFullyExpanded = selectedItems.length === itemKeys.length;

  return (
    <AccordionContainer>
      <Button onClick={handleOnClick}>
        {isFullyExpanded ? 'Close All' : 'Expand All'}
      </Button>
      <div style={{ height: '20px' }} />
      <Accordion
        itemGap={20}
        expandedItems={selectedItems}
        defaultExpandedItems={selectedItems}
        onChange={handleOnChange}
      >
        <Accordion.Item itemKey={itemKeys[0]} footer={<div>A footer</div>}>
          <CollapseContent />
        </Accordion.Item>
        <Accordion.Item itemKey={itemKeys[1]} disabled>
          <CollapseContent />
        </Accordion.Item>
        <Accordion.Item itemKey={itemKeys[2]}>
          <CollapseContent />
        </Accordion.Item>
      </Accordion>
    </AccordionContainer>
  );
};
