import * as React from 'react';

import { useTheme } from '../../hooks';

import {
  Prefix,
  AffixContainer,
  Description,
  Container,
  Label,
  StyledInput,
} from './StyledInput';

import { Suffix } from './Suffix';
import { FormItemContext } from '../formItem/FormItemContext';

export type BorderType = 'full' | 'bottom' | 'none';
export type InputSize = 'small' | 'default' | 'large';

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
  htmlType?: 'text' | 'textarea' | 'number' | 'password';

  /** id of the input to be used with Formik */
  id?: string;

  /** Set to `true` to use validation message */
  hasFeedbackMessage?: boolean;

  /** Set to `true` to use validation icon */
  hasFeedbackIcon?: boolean;

  /** Content to show inside the input to the left */
  inputPrefix?: React.ReactNode;

  /** Content to show inside the input to the right */
  inputSuffix?: React.ReactNode;

  /** Label of the input */
  label?: React.ReactNode;

  /** Function to handle blur event */
  onBlur?: React.EventHandler<React.SyntheticEvent>;

  /** Function to handle click event */
  onClick?: React.EventHandler<React.SyntheticEvent>;

  /** Function to handle change event */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /** Function to handle focus event */
  onFocus?: React.EventHandler<React.SyntheticEvent>;

  /** Placeholder for the input */
  placeholder?: string;

  /** name of the input to be used with Formik */
  name?: string;

  /** Size of input */
  size?: InputSize;

  /** Ref to be passed to the input */
  ref?: React.Ref<HTMLInputElement> | null;

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
    hasFeedbackIcon,
    onBlur,
    onChange,
    onClick,
    onFocus,
    placeholder,
    size,
    inputPrefix,
    inputSuffix,
    borderType,
    readOnly,
    required,
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
      <AffixContainer>
        {inputPrefix && (
          <Prefix inputSize={size} theme={theme}>
            {inputPrefix}
          </Prefix>
        )}
        <Suffix
          validationStatus={status}
          theme={theme}
          inputSuffix={inputSuffix}
          size={size}
          hasFeedbackIcon={hasFeedbackIcon}
        />
      </AffixContainer>
      <StyledInput
        label={null}
        disabled={disabled}
        defaultValue={defaultValue}
        hasFeedbackIcon={hasFeedbackIcon}
        type={htmlType}
        as={htmlType === 'textarea' ? 'textarea' : undefined}
        id={id}
        name={name}
        onBlur={onBlur}
        onClick={onClick}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        borderType={borderType}
        inputSize={size}
        inputSuffix={inputSuffix}
        inputPrefix={inputPrefix}
        ref={ref}
        readOnly={readOnly}
        theme={theme}
        value={value}
        validationStatus={status}
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
  hasFeedbackMessage: true,
  hasFeedbackIcon: true,
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
