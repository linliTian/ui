import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import Header from './Header';

import {
  ContentContainer,
  Content,
  ContentBody,
  ContentFooter,
} from './Content';

import { useAfterMountEffect } from '../../hooks';

import { useTheme } from '../../hooks';

export interface CollapseProps {
  /** If true, collapse expand state will not be able to change when header is clicked */
  disabled?: boolean;

  /** If true, collapse will be expanded */
  expanded?: boolean;

  /** Icon to show on the right to show the current collapse state */
  icon?: React.ReactNode;

  /** Content to show in the collapse */
  children?: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Determines if collapse should default to expanded */
  defaultExpanded?: boolean;

  /** When Collapse closes the content component will be unmounted */
  destroyOnClose?: boolean;

  /** Content to render in the header */
  header?: React.ReactNode;

  /** Content to render in the footer */
  footer?: React.ReactNode;

  /** Unique key to identify collapse. Used for Accordion */
  itemKey?: string | number;

  /** Function to handle when collapse state changes */
  onChange?: (itemKey?: string | number) => void;
}

const Container = styled.div<{ disabled?: boolean }>`
  ${({ disabled, theme }) => css<{ disabled?: boolean }>`
    ${disabled &&
      css`
        pointer-events: none;
      `}
    &:hover,
    :focus-within {
      .rtk-collapse-header {
        background: ${theme.collapseHeaderOpenBackground};
        border: 1px solid transparent;
        color: ${theme.collapseHeaderOpenColor};
      }
      .rtk-collapse-content-footer {
        background: ${theme.collapseContentFooterHoverColor};
      }
    }
  `};
  }
`;

export const Collapse: React.FunctionComponent<CollapseProps> = ({
  disabled,
  expanded,
  icon,
  className,
  children,
  defaultExpanded,
  destroyOnClose,
  header,
  footer,
  itemKey,
  onChange,
}) => {
  const [isExpanded, setExpanded] = React.useState<boolean | undefined>(
    defaultExpanded
  );

  const theme = useTheme();

  const onHeaderClick = React.useCallback(() => {
    // if external control of expanded state is not being used
    if (expanded === undefined) {
      setExpanded(!isExpanded);

      if (onChange) {
        onChange(itemKey);
      }
    } else if (onChange) {
      onChange(itemKey);
    }
  }, [expanded, isExpanded, itemKey, onChange]);

  // responsible for handling external control of the expanded state
  const handleSetExpanded = React.useCallback(() => {
    if (!disabled) {
      setExpanded(expanded);
    } else {
      setExpanded(false);
    }
  }, [disabled, expanded]);

  useAfterMountEffect(handleSetExpanded, [disabled, expanded]);

  return (
    <Container
      className={`${className} rtk-collapse`}
      disabled={disabled}
      theme={theme}
    >
      <Header
        disabled={disabled}
        expanded={isExpanded}
        icon={icon}
        onClick={onHeaderClick}
        theme={theme}
      >
        {header}
      </Header>
      <ContentContainer
        animate={isExpanded ? 'open' : 'closed'}
        destroyOnClose={destroyOnClose}
        theme={theme}
      >
        <Content theme={theme}>
          <ContentBody theme={theme} hasFooter={!!footer}>
            {children}
          </ContentBody>
          {footer && <ContentFooter theme={theme}>{footer}</ContentFooter>}
        </Content>
      </ContentContainer>
    </Container>
  );
};

Collapse.displayName = 'Collapse';

Collapse.defaultProps = {
  disabled: false,
  expanded: undefined,
  children: '',
  className: '',
  defaultExpanded: false,
  destroyOnClose: false,
  header: '',
  onChange: undefined,
  itemKey: '',
};
