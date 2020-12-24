import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks';
import { GlobalTheme } from '../../theme/types';

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps {
  className?: string;
  level?: Level;
}

type Theme = { theme: GlobalTheme };

type TitleStyleProps = TitleProps & Theme;

// styles for h1
export const h1Styles = ({ theme }: Theme) => css`
  font-family: ${theme.typographyTitleFontFamily};
  color: ${theme.typographyTitle1Color};
  font-size: ${theme.typographyTitle1FontSize};
  font-weight: ${theme.typographyTitle1FontWeight};
  letter-spacing: ${theme.typographyTitle1LetterSpacing};
  line-height: ${theme.typographyTitle1LineHeight};
  user-select: none;
`;

// styles for h2
export const h2Styles = ({ theme }: Theme) => css`
  font-family: ${theme.typographyTitleFontFamily};
  color: ${theme.typographyTitle2Color};
  font-size: ${theme.typographyTitle2FontSize};
  font-weight: ${theme.typographyTitle2FontWeight};
  letter-spacing: ${theme.typographyTitle2LetterSpacing};
  line-height: ${theme.typographyTitle2LineHeight};
  user-select: none;
`;

// styles for h3
export const h3Styles = ({ theme }: Theme) => css`
  font-family: ${theme.typographyTitleFontFamily};
  color: ${theme.typographyTitle3Color};
  font-size: ${theme.typographyTitle3FontSize};
  font-weight: ${theme.typographyTitle3FontWeight};
  letter-spacing: ${theme.typographyTitle3LetterSpacing};
  line-height: ${theme.typographyTitle3LineHeight};
  user-select: none;
`;

// styles for h4
export const h4Styles = ({ theme }: Theme) => css`
  font-family: ${theme.typographyTitleFontFamily};
  color: ${theme.typographyTitle4Color};
  font-size: ${theme.typographyTitle4FontSize};
  font-weight: ${theme.typographyTitle4FontWeight};
  letter-spacing: ${theme.typographyTitle4LetterSpacing};
  line-height: ${theme.typographyTitle4LineHeight};
  user-select: none;
`;

// styles for h5
export const h5Styles = ({ theme }: Theme) => css`
  font-family: ${theme.typographyTitleFontFamily};
  color: ${theme.typographyTitle5Color};
  font-size: ${theme.typographyTitle5FontSize};
  font-weight: ${theme.typographyTitle5FontWeight};
  letter-spacing: ${theme.typographyTitle5LetterSpacing};
  line-height: ${theme.typographyTitle5LineHeight};
  user-select: none;
`;

// styles for h6
export const h6Styles = ({ theme }: Theme) => css`
  font-family: ${theme.typographyTitleFontFamily};
  color: ${theme.typographyTitle6Color};
  font-size: ${theme.typographyTitle6FontSize};
  font-weight: ${theme.typographyTitle6FontWeight};
  letter-spacing: ${theme.typographyTitle6LetterSpacing};
  line-height: ${theme.typographyTitle6LineHeight};
  user-select: none;
`;

const getTitleStyle = ({ level, theme }: TitleStyleProps) => {
  switch (level) {
    case 1:
      return h1Styles({ theme });
    case 2:
      return h2Styles({ theme });
    case 3:
      return h3Styles({ theme });
    case 4:
      return h4Styles({ theme });
    case 5:
      return h5Styles({ theme });
    case 6:
      return h6Styles({ theme });

    default:
      break;
  }
};

const StyledTitle = styled.div<TitleStyleProps>`
  ${getTitleStyle}
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
