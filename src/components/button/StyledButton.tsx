import * as React from 'react';
import { MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ButtonType, ShapeType, SizeType } from './Button';
import { GlobalTheme } from '../../theme/types';

interface CustomProps {
  loading?: boolean;
  ghost?: boolean;
  shape?: ShapeType;
  size?: SizeType;
}

interface StyledButtonProps {
  buttonType?: ButtonType;
  children?: React.ReactNode;
  className?: string;
  customProps: CustomProps;
  disabled?: boolean;
  type?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ref?: React.Ref<HTMLButtonElement>;
  theme?: GlobalTheme;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ buttonType, customProps, disabled, theme }) => css<StyledButtonProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: ${theme.buttonBorderRadius};
    cursor: pointer;
    font-size: ${theme.buttonDefaultFontSize};
    font-weight: ${theme.buttonFontWeight};
    font-family: Lato, sans-serif;
    height: ${theme.buttonDefaultHeight};
    line-height: 1;
    padding: ${theme.buttonPadding};
    white-space: nowrap;
    outline: 0;
    user-select: none;
    touch-action: manipulation;

    transition: all ${theme.animationTimeFast}s;
    
   -webkit-tap-highlight-color: transparent;
   
   /* // ----------- Size Small --------- // */
    ${customProps.size === 'small' &&
      css`
        font-size: ${theme.buttonSmallFontSize};
        height: ${theme.buttonSmallHeight};
      `}
    
   /* // ----------- Size Large --------- // */
    ${customProps.size === 'large' &&
      css`
        font-size: ${theme.buttonLargeFontSize};
        height: ${theme.buttonLargeHeight};
      `}

    /* // ----------- Primary --------- // */
    ${buttonType === 'primary' &&
      css`
        background: ${theme.buttonPrimaryBackground};
        color: ${theme.buttonPrimaryColor};
        border: ${theme.buttonPrimaryBorder};
        border-color: ${theme.buttonPrimaryBorderColor};

        &:hover,
        &:focus {
          background: ${theme.buttonPrimaryHoverBackground};
          color: ${theme.buttonPrimaryHoverColor};
        }

        &:active {
          background: ${theme.buttonPrimaryActiveBackground};
          color: ${theme.buttonPrimaryActiveColor};
        }

        ${customProps.ghost &&
          css<StyledButtonProps>`
            background: ${theme.buttonGhostBackground};
            border: ${theme.buttonGhostBorder};
            border-color: ${theme.buttonPrimaryBackground};
            color: ${theme.buttonPrimaryBackground};

            &:hover,
            &:focus {
              background: ${theme.buttonPrimaryBackground};
              border: ${theme.buttonGhostBorder};
              border-color: transparent;
            }

            ${customProps.loading &&
              css`
                &:hover,
                &:focus {
                  background: ${theme.buttonGhostBackground};
                  border: ${theme.buttonGhostBorder};
                  border-color: ${theme.buttonPrimaryBackground};
                  color: ${theme.buttonPrimaryBackground};
                }
              `}

            &:active {
              border: ${theme.buttonGhostBorder};
              border-color: transparent;
            }
          `}
      `};

      /* // ----------- Secondary --------- // */
      ${buttonType === 'secondary' &&
        css<StyledButtonProps>`
          background: ${theme.buttonSecondaryBackground};
          color: ${theme.buttonSecondaryColor};
          border: ${theme.buttonSecondaryBorder};
          border-color: ${theme.buttonSecondaryBorderColor};

          &:hover,
          &:focus {
            background: ${theme.buttonSecondaryHoverBackground};
            color: ${theme.buttonSecondaryHoverColor};
          }

          &:active {
            background: ${theme.buttonSecondaryActiveBackground};
            color: ${theme.buttonSecondaryActiveColor};
          }

          ${customProps.ghost &&
            css`
              background: ${theme.buttonGhostBackground};
              border: ${theme.buttonGhostBorder};
              border-color: ${theme.buttonSecondaryBackground};
              color: ${theme.buttonSecondaryBackground};

              &:hover,
              &:focus {
                background: ${theme.buttonSecondaryBackground};
                border: ${theme.buttonGhostBorder};
                border-color: transparent;
              }

              &:active {
                border: ${theme.buttonGhostBorder};
                border-color: transparent;
              }
            `}
        `};

      /* ----------- Tertiary --------- */
      ${buttonType === 'tertiary' &&
        css<StyledButtonProps>`
          background: ${theme.buttonTertiaryBackground};
          color: ${theme.buttonTertiaryColor};
          border: ${theme.buttonTertiaryBorder};
          border-color: ${theme.buttonTertiaryBorderColor};

          &:hover,
          &:focus {
            background: ${theme.buttonTertiaryHoverBackground};
            color: ${theme.buttonTertiaryHoverColor};
          }

          &:active {
            background: ${theme.buttonTertiaryActiveBackground};
            color: ${theme.buttonTertiaryActiveColor};
          }

          ${customProps.ghost &&
            css`
              background: ${theme.buttonGhostBackground};
              border: ${theme.buttonGhostBorder};
              border-color: ${theme.buttonTertiaryBackground};
              color: ${theme.buttonTertiaryBackground};

              &:hover,
              &:focus {
                background: ${theme.buttonTertiaryBackground};
                border: ${theme.buttonGhostBorder};
                border-color: transparent;
              }

              &:active {
                border: ${theme.buttonGhostBorder};
                border-color: transparent;
              }
            `}
        `};
    
    /* // ----------- Danger --------- // */
    ${buttonType === 'danger' &&
      css<StyledButtonProps>`
        background: ${theme.buttonDangerBackground};
        border: ${theme.buttonDangerBorder};
        border-color: ${theme.buttonDangerBorderColor};
        color: ${theme.buttonDangerColor};

        &:hover,
        &:focus {
          background: ${theme.buttonDangerHoverBackground};
          color: ${theme.buttonDangerHoverColor};
        }

        &:active {
          background: ${theme.buttonDangerActiveBackground};
          color: ${theme.buttonDangerActiveColor};
        }

        ${customProps.ghost &&
          css`
            background: ${theme.buttonGhostBackground};
            border: ${theme.buttonGhostBorder};
            border-color: ${theme.buttonDangerBackground};
            color: ${theme.buttonDangerBackground};

            &:hover,
            &:focus {
              background: ${theme.buttonDangerBackground};
              border: ${theme.buttonGhostBorder};
              border-color: transparent;
            }

            &:active {
              border: ${theme.buttonGhostBorder};
              border-color: transparent;
            }
          `};
      `};
    
    /* // ----------- Link --------- // */
    ${buttonType === 'link' &&
      css<StyledButtonProps>`
        background: ${theme.buttonLinkBackground};
        border: ${theme.buttonLinkBorder};
        border-color: ${theme.buttonLinkBorderColor};
        color: ${theme.buttonLinkColor};

        &:hover,
        &:focus {
          background: ${theme.buttonLinkHoverBackground};
          color: ${theme.buttonLinkHoverColor};
          text-decoration: underline;
        }

        &:active {
          background: ${theme.buttonLinkActiveBackground};
          color: ${theme.buttonLinkActiveColor};
          text-decoration: underline;
        }
      `};

    ${(disabled || customProps.loading) &&
      css`
        pointer-events: none;
        opacity: 0.5;
      `};

    /* // ----------- Circle --------- // */
    ${customProps.shape === 'circle' &&
      css<StyledButtonProps>`
      padding: 0;
      min-width: ${theme.buttonDefaultHeight};
      text-align: center;
      border-radius: 50%;
      
      // ----------- Size Small --------- //
      ${customProps.size === 'small' &&
        css`
          min-width: ${theme.buttonSmallHeight};
        `}
      
     // ----------- Size Large --------- //
      ${customProps.size === 'large' &&
        css`
          min-width: ${theme.buttonLargeHeight};
        `}

      ${customProps.loading &&
        css`
          span {
            display: none;
          }
        `};
    `}
    
    span {
      pointer-events: none;
    }   

    &::-moz-focus-inner {
      border: none;
    }
  `};
`;
