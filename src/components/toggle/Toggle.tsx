import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { motion } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';

import { ToggleIcon } from './ToggleIcon';
import { GlobalTheme, Theme } from '../../theme/types';

export interface ToggleProps {
  /** className of the Toggle component */
  className?: string;

  /** If true, move the toggle to on, otherwise move the toggle to off */
  isOn?: boolean;

  /** If true, the toggle will not be clickable */
  disabled?: boolean;

  /** If true, the toggle will not be clickable and in a loading state */
  isLoading?: boolean;

  /** Function that is called when toggle is clicked */
  onClick?: () => void;
}

interface ContainerProps {
  isOn: boolean;
  disabled?: boolean;
  theme: GlobalTheme;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  height: ${({ theme }) => theme.toggleHeight};
  width: ${({ theme }) => theme.toggleWidth};
  min-width: ${({ theme }) => theme.toggleWidth};

  background: ${({ theme, isOn }) =>
    isOn ? theme.toggleOnBackground : theme.toggleOffBackground};
  border-radius: ${({ theme }) => theme.toggleBorderRadius};
  cursor: pointer;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      pointer-events: none;
      background: ${theme.toggleDisabledBackground};
    `}
`;
Container.displayName = 'Container';

const ToggleCircleContainer = styled(motion.div)<Theme>`
  position: absolute;
  top: ${({ theme }) => theme.toggleCircleTop};
`;
ToggleCircleContainer.displayName = 'ToggleCircleContainer';

const ToggleCircle = styled.div<Theme>`
  background: ${({ theme }) => theme.toggleCircleBackground};

  height: ${({ theme }) => theme.toggleCircleHeight};
  width: ${({ theme }) => theme.toggleCircleWidth};

  border-radius: 50%;
`;

export const Toggle: React.FunctionComponent<ToggleProps> = ({
  className,
  disabled,
  isLoading,
  onClick,
  isOn,
}) => {
  const theme = useTheme();

  return (
    <Container
      className={`${className} rtk-toggle`}
      theme={theme}
      onClick={onClick}
      isOn={isOn || false}
      disabled={disabled || isLoading}
    >
      <ToggleCircleContainer
        theme={theme}
        initial={'off'}
        variants={{
          on: {
            x: 18,
          },
          off: {
            x: 2,
          },
        }}
        animate={isOn ? 'on' : 'off'}
        transition={{ duration: theme.animationTimeVeryFast, type: 'tween' }}
      >
        <ToggleCircle theme={theme} />
      </ToggleCircleContainer>
      <ToggleIcon theme={theme} isLoading={isLoading} isOn={isOn} />
    </Container>
  );
};

Toggle.displayName = 'Toggle';
