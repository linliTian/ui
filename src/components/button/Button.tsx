import * as React from 'react';

import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';
import { StyledButton } from './StyledButton';

import { Icon } from '../icons';

import { useTheme } from '../../hooks';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'link';
export type ShapeType = 'circle' | 'default';
export type SizeType = 'small' | 'default' | 'large';

export interface ButtonProps {
  /** Type of the button */
  type?: ButtonType;

  /** Content to show in the button */
  children?: React.ReactNode;

  /** classname for the button */
  className?: string;

  /** Disabled state of the button */
  disabled?: boolean;

  /** Makes the background of button transparent */
  ghost?: boolean;

  /** HTML Type of the button */
  htmlType?: 'button' | 'submit' | 'reset';

  /** Loading state of the button */
  loading?: boolean;

  /** Function to handle click event */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /** Ref to be passed to the button */
  ref?: React.Ref<HTMLButtonElement>;

  /** Shape of the button */
  shape?: ShapeType;

  /** Size of the button */
  size?: SizeType;
}

function getTypeStyle(type, ghost, theme) {
  switch (type) {
    case 'primary': {
      if (ghost) {
        return theme.buttonPrimaryBackground;
      }
      return theme.buttonPrimaryColor;
    }
    case 'danger': {
      if (ghost) {
        return theme.buttonDangerBackground;
      }
      return theme.buttonDangerColor;
    }
    case 'link': {
      return theme.buttonLinkColor;
    }
  }
}

export const Button: React.FunctionComponent<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const {
    children,
    className,
    ghost,
    htmlType,
    loading,
    type,
    shape,
    size,
    ...rest
  } = props;

  const theme = useTheme();

  return (
    <StyledButton
      ref={ref}
      buttonType={type}
      className={`${className} rtk-button`}
      customProps={{
        loading,
        ghost,
        shape,
        size,
      }}
      type={htmlType}
      theme={theme}
      {...rest}
    >
      {loading && (
        <>
          <Icon.Loading color={getTypeStyle(type, ghost, theme)} />
          <motion.div
            key="loading"
            animate={{
              marginRight: shape === 'circle' ? 0 : 5,
              transition: { type: 'tween' },
            }}
            transition={{
              type: 'tween',
              duration: theme.animationTimeVeryFast,
            }}
          />
        </>
      )}
      <span>{children}</span>
    </StyledButton>
  );
});

Button.displayName = 'Button';

Button.defaultProps = {
  type: 'primary',
  children: '',
  className: '',
  disabled: false,
  ghost: false,
  loading: false,
  onClick: undefined,
  shape: 'default',
  size: 'default',
};
