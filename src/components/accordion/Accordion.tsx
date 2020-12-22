import * as React from 'react';
import styled from '@emotion/styled';

import { AccordionItem, AccordionItemProps } from './AccordionItem';

import { AccordionContext } from './context';

import { ExpandedItemsType, ItemGapType, ItemKeyType } from './types';

export interface AccordionFunctionComponent<T = {}>
  extends React.FunctionComponent<T> {
  Item: React.FunctionComponent<AccordionItemProps>;
}

export interface AccordionProps {
  /** Accordion Item. See Collapse for supported props. */
  children: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Use classic accordion where a single item is open at a time */
  classic?: boolean;

  /** Determines which collapses should be expanded on initial render */
  defaultExpandedItems?: ExpandedItemsType;

  /** Vertical gap between items */
  itemGap?: ItemGapType;

  /** Function to handle when collapse state changes */
  onChange?: (key: ItemKeyType) => void;

  /** Determines which collapses should be expanded */
  expandedItems?: ExpandedItemsType;
}

const Container = styled.div``;

export const Accordion: AccordionFunctionComponent<AccordionProps> = ({
  children,
  classic,
  className,
  defaultExpandedItems,
  itemGap,
  onChange,
  expandedItems: customExpandedItems,
}) => {
  const [expandedItems, setExpandedItems] = React.useState<ExpandedItemsType>(
    defaultExpandedItems || []
  );

  const onCollapseChange = React.useCallback(
    (key) => {
      // if there is no external control of items
      if (customExpandedItems == null) {
        function getItems(key: ItemKeyType) {
          return expandedItems.includes(key)
            ? expandedItems.filter((i: ItemKeyType) => i !== key)
            : expandedItems.concat(key);
        }

        function getClassicItems(key: ItemKeyType) {
          return expandedItems.includes(key) ? [] : [key];
        }

        const newItems = classic ? getClassicItems(key) : getItems(key);
        setExpandedItems(newItems);
      }

      if (onChange) {
        onChange(key);
      }
    },
    [expandedItems, customExpandedItems, onChange, classic]
  );

  return (
    <AccordionContext.Provider
      value={{
        itemGap,
        expandedItems: customExpandedItems || expandedItems,
        onChange: onCollapseChange,
      }}
    >
      <Container className={className}>{children}</Container>
    </AccordionContext.Provider>
  );
};

Accordion.defaultProps = {
  children: '',
  classic: false,
  className: '',
  defaultExpandedItems: [],
  itemGap: 20,
  onChange: undefined,
};

Accordion.Item = AccordionItem;

Accordion.displayName = 'Accordion';

export default Accordion;
