import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { Header, HeaderProps } from './Header';

import { Content, ContentProps } from './Content';

import { Footer, FooterProps } from './Footer';

import { Sider, SiderProps } from './Sider';

export { HeaderProps, ContentProps, FooterProps, SiderProps };

export interface LayoutComponent<T> extends React.FunctionComponent<T> {
  Header: React.FunctionComponent<HeaderProps>;
  Content: React.FunctionComponent<ContentProps>;
  Footer: React.FunctionComponent<FooterProps>;
  Sider: React.FunctionComponent<SiderProps>;
}

export interface LayoutProps {
  /** classname for the Layout */
  className?: string;

  /** Set to true to tell the layout component that a sider component is being used */
  hasSider?: boolean;
}

interface StyledLayoutProps {
  hasSider?: boolean;
}

const StyledLayout = styled.div<StyledLayoutProps>`
  ${({ hasSider }) => css`
    display: flex;

    flex: auto;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 0px;

    ${hasSider &&
      css`
        flex-direction: row;
      `}
  `}
`;

export const Layout: LayoutComponent<LayoutProps> = ({
  children,
  className,
  hasSider,
}) => {
  return (
    <StyledLayout className={`${className} rtk-layout`} hasSider={hasSider}>
      {children}
    </StyledLayout>
  );
};

Layout.displayName = 'Layout';

Layout.defaultProps = {
  hasSider: false,
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;
