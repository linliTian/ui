import * as React from 'react';

import { useTheme } from '../../hooks';

import { Description, Container, Label, StyledInput } from './StyledInput';

import { FormItemContext } from '../formItem/FormItemContext';

export type BorderType = 'full' | 'bottom' | 'none';
export type InputSize = 'small' | 'default' | 'large';
export type HtmlType = 'text' | 'textarea' | 'number' | 'password';

export interface InputProps {
  /** Type of border for the input */
  borderType?: BorderType;

  /** classname for the input */
  className?: string;

  /** Default value of the input */
  defaultValue?: string;

  /** Description of the input */
  description?: React.ReactNode;

  /** Disabled state of the input */
  disabled?: boolean;

  /** HTML input type attribute */
  htmlType?: HtmlType;

  /** id of the input to be used with Formik */
  id?: string;

  /** Label of the input */
  label?: React.ReactNode;

  /** Function to handle blur event */
  onBlur?: React.EventHandler<React.SyntheticEvent>;

  /** Function to handle click event */
  onClick?: React.EventHandler<React.SyntheticEvent>;

  /** Function to handle change event */
  onChange?: React.EventHandler<React.SyntheticEvent>;

  /** Function to handle focus event */
  onFocus?: React.EventHandler<React.SyntheticEvent>;

  /** Placeholder for the input */
  placeholder?: string;

  /** name of the input to be used with Formik */
  name?: string;

  /** Size of input */
  size?: InputSize;

  /** Ref to be passed to the input */
  ref?: React.Ref<any> | null;

  /** Height of textarea. Only applies to text area */
  rows?: number;

  /** If true, the input will be marked as required in the label */
  required?: boolean;

  /** Disables typing in the input but keeps focus */
  readOnly?: boolean;

  /** value of the input */
  value?: string;
}

export const Input: React.FunctionComponent<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    className,
    disabled,
    defaultValue,
    description,
    htmlType,
    id,
    label,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    placeholder,
    size,
    borderType,
    readOnly,
    required,
    rows,
    value,
  } = props;

  const theme = useTheme();

  const { status } = React.useContext(FormItemContext);

  return (
    <Container className={`${className} rtk-input`}>
      {label && (
        <Label required={required} theme={theme}>
          {label}
        </Label>
      )}
      {description && <Description theme={theme}>{description}</Description>}
      <StyledInput
        label={null}
        disabled={disabled}
        defaultValue={defaultValue}
        type={htmlType}
        id={id}
        name={name}
        onBlur={onBlur}
        onClick={onClick}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        borderType={borderType}
        inputSize={size}
        ref={ref}
        rows={rows}
        readOnly={readOnly}
        theme={theme}
        value={value}
        status={status}
      />
    </Container>
  );
});

Input.displayName = 'Input';

Input.defaultProps = {
  borderType: 'full',
  className: '',
  disabled: false,
  defaultValue: undefined,
  htmlType: undefined,
  id: undefined,
  name: undefined,
  label: '',
  onBlur: undefined,
  onClick: undefined,
  onChange: undefined,
  onFocus: undefined,
  placeholder: '',
  size: 'default',
  readOnly: false,
  required: false,
  value: undefined,
};
