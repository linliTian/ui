import * as React from 'react';

import styled, { css } from 'styled-components';

import { MouseEventHandler } from 'react';

import { useTheme } from '../../hooks';
import { Typography } from '../typography/Typography';
import { GlobalTheme } from '../../theme/types';

export interface PanelProps {
  /** Content to show in the panel */
  children?: React.ReactNode;

  /** classname for the panel */
  className?: string;

  /** if true, the panel will have margin on all sides */
  hasMargin?: boolean;

  /** Function to handle click event */
  onClick?: MouseEventHandler<HTMLDivElement>;

  /** will display a border and title in the panel */
  title?: string;

  /** determines how big the title should be */
  titleLevel?: 3 | 5;
}

interface StyledContainerProps {
  hasMargin?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  hasTitle?: boolean;
  theme: GlobalTheme;
}

const Container = styled.div<StyledContainerProps>`
  position: relative;
  background: ${({ theme }) => theme.panelBackground};
  border: ${({ theme }) => theme.panelBorder};
  border-color: ${({ theme }) => theme.panelBorderColor};
  border-radius: ${({ theme }) => theme.panelBorderRadius};
  padding: ${({ theme }) => theme.panelPadding};
  margin: ${({ theme, hasMargin }) => (hasMargin ? theme.panelMargin : 0)};
  transition: all ${({ theme }) => theme.animationTimeFast}s;

  box-sizing: border-box;

  ${({ onClick, theme }) =>
    onClick &&
    css`
      &:hover {
        cursor: pointer;
        box-shadow: ${theme.panelHoverBoxShadow};
      }

      &:active {
        box-shadow: ${theme.panelActiveBoxShadow};
      }
    `}

  ${({ hasTitle, theme }) =>
    hasTitle &&
    css`
      border: ${theme.panelWithTitleBorder};
      border-color: ${theme.panelWithTitleBorderColor};
    `}
`;

const Title = styled(Typography.Title)<{ level?: number }>`
  position: absolute;
  background: inherit;

  ${({ level }) =>
    level === 3 &&
    css`
      top: -15px;
    `}

  ${({ level }) =>
    level === 5 &&
    css`
      top: -10px;
    `}
  
  left: 8px;
  border-radius: ${({ theme }) => theme.panelBorderRadius};

  padding: 4px 8px;
`;

export const Panel: React.FunctionComponent<PanelProps> = ({
  children,
  className,
  hasMargin,
  onClick,
  title,
  titleLevel,
}) => {
  const theme = useTheme();

  return (
    <Container
      className={`${className} rtk-panel`}
      hasMargin={hasMargin}
      onClick={onClick}
      theme={theme}
      hasTitle={!(title == null)}
    >
      {title && (
        <Title theme={theme} level={titleLevel}>
          {title}
        </Title>
      )}
      {children}
    </Container>
  );
};

Panel.defaultProps = {
  hasMargin: true,
  titleLevel: 3,
};

Panel.displayName = 'Panel';
