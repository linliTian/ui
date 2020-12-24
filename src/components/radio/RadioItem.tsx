import * as React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { RadioContext } from './context';
import { useTheme } from '../../hooks';
import { Theme } from '../../theme/types';

export interface RadioItemProps {
  /** if true, the radio item will not be interactable */
  disabled?: boolean;

  /** unique identifier for the radio item */
  itemKey: string | number;
}

interface ContainerProps {
  disabled?: boolean;
}

const Container = styled.div<ContainerProps>`
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;

  line-height: ${({ theme }: Theme) => theme.radioItemLineHeight};
  margin: ${({ theme }) => theme.radioItemMargin};

  font-family: 'Lato', sans-serif;

  input {
    display: none;
  }

  span {
    font-size: ${({ theme }) => theme.radioItemFontSize};
    color: ${({ theme }) => theme.radioItemFontColor};
    transition: all ${({ theme }) => theme.animationTimeVeryFast}s ease-in-out;
    padding-left: 32px;

    &::before {
      content: '';

      position: absolute;
      display: block;
      top: 0;
      left: 0;

      height: 16px;
      width: 16px;
      border: ${({ theme }) => theme.radioItemBorder};
      box-sizing: border-box;

      transition: all ${({ theme }) => theme.animationTimeVeryFast}s ease-in-out;

      border-radius: 50%;
    }

    &::after {
      content: '';

      position: absolute;
      display: block;
      top: 5px;
      left: 5px;

      height: 6px;
      width: 6px;
      background: ${({ theme }) => theme.radioItemCheckedMiddleBackground};

      transition: all ${({ theme }) => theme.animationTimeVeryFast}s ease-in-out;

      border-radius: 50%;

      visibility: hidden;
    }
  }

  input[type='radio']:hover + span {
    color: ${({ theme }) => theme.radioItemHoverColor};

    &::before {
      border: ${({ theme }) => theme.radioItemHoverBorder};
    }
  }

  input[type='radio']:checked + span {
    &::before {
      background: ${({ theme }) => theme.radioItemCheckedBackground};
      border-color: ${({ theme }) => theme.radioItemCheckedBorderColor};
    }

    &::after {
      visibility: visible;
    }
  }
`;

export const RadioItem: React.FunctionComponent<RadioItemProps> = ({
  children,
  disabled,
  itemKey,
}) => {
  const { name, onSelect } = React.useContext(RadioContext);

  const theme = useTheme();

  const handleClick = React.useCallback(() => {
    if (onSelect) {
      onSelect(itemKey);
    }
  }, [onSelect, itemKey]);

  return (
    <Container disabled={disabled}>
      <StyledLabel theme={theme}>
        <input type="radio" name={name} onClick={handleClick} />
        <span>{children}</span>
      </StyledLabel>
    </Container>
  );
};

RadioItem.displayName = 'RadioItem';
