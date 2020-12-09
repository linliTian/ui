import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';
import { GlobalTheme } from '../../theme/types';

export interface BodyProps {
  /** className of the body text */
  className?: string;

  /** If true, the style of the text will change */
  disabled?: boolean;

  /** Reference to the body element */
  ref?: React.Ref<HTMLDivElement>;
}

interface StyledBodyProps {
  disabled?: boolean;
  theme: GlobalTheme;
}

export const bodyStyles = css<StyledBodyProps>`
  color: ${({ theme }) => theme.typographyBodyColor};
  font-family: ${({ theme }) => theme.typographyBodyFontFamily};
  font-size: ${({ theme }) => theme.typographyBodyFontSize};
  font-weight: ${({ theme }) => theme.typographyBodyFontWeight};
  letter-spacing: ${({ theme }) => theme.typographyBodyLetterSpacing};
  line-height: ${({ theme }) => theme.typographyBodyLineHeight};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.typographyBodyDisabledColor};
    `}
`;

const StyledBody = styled.div<StyledBodyProps>`
  ${bodyStyles};
`;

export const Body: React.FunctionComponent<BodyProps> = React.forwardRef<
  HTMLDivElement,
  BodyProps
>((props, ref) => {
  const { className, disabled, children } = props;

  const theme = useTheme();

  return (
    <StyledBody
      className={`${className} rtk-type-body`}
      theme={theme}
      disabled={disabled}
      ref={ref}
    >
      {children}
    </StyledBody>
  );
});

Body.displayName = 'Body';
