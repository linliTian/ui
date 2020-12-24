import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks';
import { Theme } from '../../theme/types';

export interface LabelProps {
  className?: string;
}

const StyledLabel = styled.label<Theme>`
  ${({ theme }) => css`
    user-select: none;

    text-transform: ${theme.typographyLabelTextTransform};
    color: ${theme.typographyLabelColor};
    font-family: ${theme.typographyLabelFontFamily};
    font-size: ${theme.typographyLabelFontSize};
    font-weight: ${theme.typographyLabelFontWeight};
    letter-spacing: ${theme.typographyLabelLetterSpacing};
    line-height: ${theme.typographyLabelLineHeight};
  `}
`;

StyledLabel.displayName = 'StyledLabel';

export const Label: React.FunctionComponent<LabelProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <StyledLabel className={`${className} rtk-type-label`} theme={theme}>
      {children}
    </StyledLabel>
  );
};

Label.displayName = 'Label';
