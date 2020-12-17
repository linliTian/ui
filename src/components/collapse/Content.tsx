import * as React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { GlobalTheme } from '../../theme/types';

interface ContentContainerProps {
  animate: 'open' | 'closed';
  destroyOnClose?: boolean;
  theme: any;
}

export const ContentContainer: React.FunctionComponent<ContentContainerProps> = ({
  animate,
  children,
  destroyOnClose,
  theme,
}) => {
  const variants = {
    closed: {
      height: 0,
    },
    open: {
      height: 'auto',
    },
  };

  const content = (
    <motion.div
      key="content"
      style={{
        overflow: 'hidden',
      }}
      initial="closed"
      exit="closed"
      animate={animate}
      variants={variants}
      transition={{ duration: theme.animationTimeVeryFast, type: 'tween' }}
    >
      {children}
    </motion.div>
  );

  return (
    <AnimatePresence initial={false}>
      {destroyOnClose ? animate === 'open' && content : content}
    </AnimatePresence>
  );
};

interface ContentBodyProps {
  theme: GlobalTheme;
  hasFooter: boolean;
}

const StyledContentBody = styled.div<ContentBodyProps>`
  ${({ theme, hasFooter }) => css<ContentBodyProps>`
    padding: ${theme.collapseContentPadding};
    background: ${theme.collapseContentBackground};
    ${!hasFooter &&
      css`
        border-radius: 0 0 ${theme.collapseBorderRadius}
          ${theme.collapseBorderRadius};
      `}}
  `};
`;

export const ContentBody: React.FunctionComponent<ContentBodyProps> = props => {
  const { children } = props;

  return (
    <StyledContentBody className={'rtk-collapse-content-body'} {...props}>
      {children}
    </StyledContentBody>
  );
};

ContentBody.displayName = 'CollapseContentBody';

interface ContentFooterProps {
  theme: GlobalTheme;
}

const StyledFooter = styled.div<ContentFooterProps>`
  ${({ theme }) => css<ContentFooterProps>`
    background: ${theme.collapseContentBackground};
    padding: ${theme.collapseContentPadding};
    border-radius: 0 0 ${theme.collapseBorderRadius}
      ${theme.collapseBorderRadius};
  `};
`;

export const ContentFooter: React.FunctionComponent<ContentFooterProps> = props => {
  const { children } = props;

  return (
    <StyledFooter className={'rtk-collapse-content-footer'} {...props}>
      {children}
    </StyledFooter>
  );
};

ContentFooter.displayName = 'CollapseContentFooter';

interface ContentProps {
  theme: GlobalTheme;
}

const StyledContent = styled.div<ContentProps>`
  ${({ theme }) => css<ContentProps>`
    background: ${theme.collapseContentBackground};
    border: ${theme.collapseBorder};
    border-color: ${theme.collapseBorderColor};
    border-radius: ${theme.collapseBorderRadius};
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `};
`;

export const Content: React.FunctionComponent<ContentProps> = props => {
  const { children } = props;

  return (
    <StyledContent className={'rtk-collapse-content'} {...props}>
      {children}
    </StyledContent>
  );
};

Content.displayName = 'CollapseContent';
