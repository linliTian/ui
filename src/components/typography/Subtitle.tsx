import * as React from 'react';

import styled from '@emotion/styled';
/** @jsx jsx */
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';

import { useTheme } from '../../hooks';
import { Theme } from '../../theme/types';

export interface SubtitleProps {
  className?: string;
}

const StyledSubtitle = styled.div<Theme>`
  ${({ theme }) => css`
    user-select: none;

    color: ${theme.typographySubtitleColor};
    font-family: ${theme.typographySubtitleFontFamily};
    font-size: ${theme.typographySubtitleFontSize};
    font-weight: ${theme.typographySubtitleFontWeight};
    letter-spacing: ${theme.typographySubtitleLetterSpacing};
    line-height: ${theme.typographySubtitleLineHeight};
  `}
`;

export const Subtitle: React.FunctionComponent<SubtitleProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <StyledSubtitle className={`${className} rtk-type-subtitle`} theme={theme}>
      {children}
    </StyledSubtitle>
  );
};

Subtitle.displayName = 'Subtitle';
