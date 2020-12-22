import * as React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks';
import { GlobalTheme } from '../../theme/types';

export interface CheckboxProps {
  /** if true, the checkbox will be checked */
  checked?: boolean;

  /** if true, the checkbox will not be intractable */
  disabled?: boolean;

  /** Name of the checkbox. Usually used in forms */
  name?: string;

  /** Callback that is called when the checkbox value changes */
  onChange?: (attrs: { name?: string; checked: boolean }) => void;
}

interface ContainerProps {
  disabled?: boolean;
}

const Container = styled.div<ContainerProps>`
  ${({ disabled }: ContainerProps) => {
    if (disabled) {
      return css`
        pointer-events: none;
        opacity: 0.6;
      `;
    }
  }}
`;

const StyledLabel = styled.label`
  ${({ theme }: { theme: GlobalTheme }) => css`
    position: relative;
    display: inline-block;

    line-height: ${theme.checkboxLineHeight};
    margin: ${theme.checkboxMargin};

    font-family: 'Lato', sans-serif;

    input {
      display: none;
    }

    span {
      font-size: ${theme.checkboxFontSize};
      color: ${theme.checkboxFontColor};
      transition: all ${theme.animationTimeVeryFast}s ease-in-out;
      padding-left: 24px;

      &::before {
        content: '';

        position: absolute;
        display: block;
        top: 0;
        left: 0;

        height: 16px;
        width: 16px;
        border: ${theme.checkboxBorder};
        border-radius: ${theme.checkboxBorderRadius};
        box-sizing: border-box;
        transition: all ${theme.animationTimeVeryFast}s ease-in-out;
      }

      &::after {
        content: '';

        position: absolute;
        display: block;
        left: 5px;
        top: 2px;
        width: 3px;
        height: 7px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);

        transition: all ${theme.animationTimeVeryFast}s ease-in-out;
        visibility: hidden;
      }
    }

    input[type='checkbox']:hover + span {
      &::before {
        border: ${theme.checkboxHoverBorder};
      }
    }

    input[type='checkbox']:checked + span {
      &::before {
        background: ${theme.checkboxCheckedBackground};
        border-color: ${theme.checkboxCheckedBorderColor};
      }

      &::after {
        visibility: visible;
      }
    }
  `}
`;

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  checked,
  children,
  disabled,
  name,
  onChange,
}) => {
  const theme = useTheme() as GlobalTheme;

  const handleChange = React.useCallback(
    (e) => {
      const { name, checked } = e.target;

      if (onChange) {
        onChange({ name, checked });
      }
    },
    [onChange]
  );

  const isChecked = React.useMemo(() => {
    if (checked) {
      return checked;
    }

    return undefined;
  }, [checked]);

  return (
    <Container disabled={disabled}>
      <StyledLabel theme={theme}>
        <input
          type="checkbox"
          name={name}
          onChange={handleChange}
          checked={isChecked}
        />
        <span>{children}</span>
      </StyledLabel>
    </Container>
  );
};

Checkbox.displayName = 'Checkbox';
