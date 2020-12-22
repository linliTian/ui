import * as React from 'react';
import styled from '@emotion/styled';

import { Collapse } from '../collapse/Collapse';

import { AccordionContext } from './context';

interface CollapseSpacerProps {
  itemGap?: number;
}

export interface AccordionItemProps {
  /** If true, accordion item expand state will not be able to change when header is clicked */
  disabled?: boolean;

  /** If true, accordion item will be expanded */
  expanded?: boolean;

  /** Icon to show on the right to show the current collapse state */
  icon?: React.ReactNode;

  /** Content to show in the collapse */
  children?: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** When Collapse closes the content component will be unmounted */
  destroyOnClose?: boolean;

  /** Content to render in the header */
  header?: React.ReactNode;

  /** Content to render in the footer */
  footer?: React.ReactNode;

  /** Unique key to identify collapse. Used for Accordion */
  itemKey: string | number;

  /** Function to handle when collapse state changes */
  onChange?: (itemKey?: string | number) => void;
}

const CollapseSpacer = styled.div<CollapseSpacerProps>`
  height: ${(props) => `${props.itemGap}px`};
`;

/** Accordion.Item */
export const AccordionItem: React.FunctionComponent<AccordionItemProps> = (
  props
) => (
  <AccordionContext.Consumer>
    {(value) => {
      const { itemKey } = props;

      const isExpanded = value.expandedItems.includes(itemKey);

      return (
        <React.Fragment>
          <Collapse
            {...props}
            defaultExpanded={isExpanded}
            expanded={isExpanded}
            onChange={value.onChange}
          />
          <CollapseSpacer itemGap={value.itemGap} />
        </React.Fragment>
      );
    }}
  </AccordionContext.Consumer>
);

AccordionItem.displayName = 'AccordionItem';
