import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks';

export interface DescriptionProps {
  className?: string;
  otherProps?: any;
}

const StyledDescription = styled.div`
  ${({ theme }) => css`
    user-select: none;

    color: ${theme.typographyDescriptionColor};
    font-family: ${theme.typographyDescriptionFontFamily};
    font-size: ${theme.typographyDescriptionFontSize};
    font-weight: ${theme.typographyDescriptionFontWeight};
    letter-spacing: ${theme.typographyDescriptionLetterSpacing};
    line-height: ${theme.typographyDescriptionLineHeight};
  `}
`;

export const Description: React.FunctionComponent<DescriptionProps> = ({
  children,
  className,
  otherProps,
}) => {
  const theme = useTheme();

  return (
    <StyledDescription
      className={`${className} rtk-type-description`}
      theme={theme}
      {...otherProps}
    >
      {children}
    </StyledDescription>
  );
};

Description.displayName = 'Description';
