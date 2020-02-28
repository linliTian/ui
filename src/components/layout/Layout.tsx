import * as React from 'react';

import styled, { css } from 'styled-components';

import { Header, HeaderProps } from './Header';

import { Content, ContentProps } from './Content';

import { Footer, FooterProps } from './Footer';

export { HeaderProps, ContentProps, FooterProps };

export interface LayoutComponent<T> extends React.FunctionComponent<T> {
  Header: React.FunctionComponent<HeaderProps>;
  Content: React.FunctionComponent<ContentProps>;
  Footer: React.FunctionComponent<FooterProps>;
}

export interface LayoutProps {
  className?: string;
}

const Container = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;

export const Layout: LayoutComponent<LayoutProps> = ({
  children,
  className,
}) => {
  return (
    <Container className={`${className} rtk-layout`}>{children}</Container>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
