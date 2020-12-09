import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps {
  className?: string;
  level?: Level;
}

// styles for h1
export const h1Styles = css`
  font-family: ${({ theme }) => theme.typographyTitleFontFamily};
  color: ${({ theme }) => theme.typographyTitle1Color};
  font-size: ${({ theme }) => theme.typographyTitle1FontSize};
  font-weight: ${({ theme }) => theme.typographyTitle1FontWeight};
  letter-spacing: ${({ theme }) => theme.typographyTitle1LetterSpacing};
  line-height: ${({ theme }) => theme.typographyTitle1LineHeight};
  user-select: none;
`;

// styles for h2
export const h2Styles = css`
  font-family: ${({ theme }) => theme.typographyTitleFontFamily};
  color: ${({ theme }) => theme.typographyTitle2Color};
  font-size: ${({ theme }) => theme.typographyTitle2FontSize};
  font-weight: ${({ theme }) => theme.typographyTitle2FontWeight};
  letter-spacing: ${({ theme }) => theme.typographyTitle2LetterSpacing};
  line-height: ${({ theme }) => theme.typographyTitle2LineHeight};
  user-select: none;
`;

// styles for h3
export const h3Styles = css`
  font-family: ${({ theme }) => theme.typographyTitleFontFamily};
  color: ${({ theme }) => theme.typographyTitle3Color};
  font-size: ${({ theme }) => theme.typographyTitle3FontSize};
  font-weight: ${({ theme }) => theme.typographyTitle3FontWeight};
  letter-spacing: ${({ theme }) => theme.typographyTitle3LetterSpacing};
  line-height: ${({ theme }) => theme.typographyTitle3LineHeight};
  user-select: none;
`;

// styles for h4
export const h4Styles = css`
  font-family: ${({ theme }) => theme.typographyTitleFontFamily};
  color: ${({ theme }) => theme.typographyTitle4Color};
  font-size: ${({ theme }) => theme.typographyTitle4FontSize};
  font-weight: ${({ theme }) => theme.typographyTitle4FontWeight};
  letter-spacing: ${({ theme }) => theme.typographyTitle4LetterSpacing};
  line-height: ${({ theme }) => theme.typographyTitle4LineHeight};
  user-select: none;
`;

// styles for h5
export const h5Styles = css`
  font-family: ${({ theme }) => theme.typographyTitleFontFamily};
  color: ${({ theme }) => theme.typographyTitle5Color};
  font-size: ${({ theme }) => theme.typographyTitle5FontSize};
  font-weight: ${({ theme }) => theme.typographyTitle5FontWeight};
  letter-spacing: ${({ theme }) => theme.typographyTitle5LetterSpacing};
  line-height: ${({ theme }) => theme.typographyTitle5LineHeight};
  user-select: none;
`;

// styles for h6
export const h6Styles = css`
  font-family: ${({ theme }) => theme.typographyTitleFontFamily};
  color: ${({ theme }) => theme.typographyTitle6Color};
  font-size: ${({ theme }) => theme.typographyTitle6FontSize};
  font-weight: ${({ theme }) => theme.typographyTitle6FontWeight};
  letter-spacing: ${({ theme }) => theme.typographyTitle6LetterSpacing};
  line-height: ${({ theme }) => theme.typographyTitle6LineHeight};
  user-select: none;
`;

const StyledTitle = styled.div<TitleProps>`
  ${({ level }) =>
    level === 1 &&
    css`
      ${h1Styles};
    `}
  
  ${({ level }) =>
    level === 2 &&
    css`
      ${h2Styles};
    `}
  
  ${({ level }) =>
    level === 3 &&
    css`
      ${h3Styles};
    `}
  
  ${({ level }) =>
    level === 4 &&
    css`
      ${h4Styles};
    `}
  
  ${({ level }) =>
    level === 5 &&
    css`
      ${h5Styles};
    `}
      
  ${({ level }) =>
    level === 6 &&
    css`
      ${h6Styles};
    `}
`;

export const Title: React.FunctionComponent<TitleProps> = ({
  children,
  className,
  level,
}) => {
  const theme = useTheme();

  return (
    <StyledTitle
      className={`${className} rtk-type-title-h${level}`}
      theme={theme}
      level={level}
    >
      {children}
    </StyledTitle>
  );
};

Title.displayName = 'Title';

Title.defaultProps = {
  level: 1,
};
