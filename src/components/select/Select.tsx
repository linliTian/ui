import * as React from 'react';

import { Props, ValueType } from 'react-select';
import styled from '@emotion/styled';

import { useTheme } from '../../hooks/useTheme';
import CaretDown from '../icons/CaretDown';
import Times from '../icons/Times';
import { GlobalTheme, Theme } from '../../theme/types';
import WindowedSelect from 'react-windowed-select';

export type OptionType = {
  label: string;
  value: string;
  customElement?: React.ReactNode;
  isDisabled?: boolean;
};

type GetNewValue = {
  <OT>(newValue: ValueType<OT>, isMulti: true): Array<OT> | null;
  <OT>(newValue: ValueType<OT>, isMulti: false): OT | null;
};

/**
 * A helper to simplify the complex single/multi-value return type of react-select's
 * onChange handler.  For a multi-valued select, returns array of options or null;
 * for single-value returns the option or null.
 * @param {GetNewValue} newValue - the value from the Select onChange handler
 * @param {boolean} isMulti - whether or not Select is set to multi-valued
 */
export const getNewValue: GetNewValue = <OT extends OptionType = OptionType>(
  newValue: ValueType<OT>,
  isMulti: boolean
) => {
  if (!newValue) {
    return null;
  }
  return (
    (isMulti && Array.isArray(newValue) && newValue) ||
    (!isMulti && !Array.isArray(newValue) && newValue) ||
    null // it should never get here, this is mostly to cover all possible paths to please TS
  );
};

export interface SelectProps {
  /** className of the Select component */
  className?: string;

  /** see https://react-select.com/props#api for documentation about these props */
  selectProps: Props;
}

// defines the list of styles from react-select that are overriden
const getCustomStyles = (theme: GlobalTheme) => ({
  control: (provided, state) => {
    const defaultStyles = {
      ...provided,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.selectControlBorderColor,
      background: theme.selectControlBackground,
      minHeight: theme.selectControlMinHeight,
    };

    if (state.isFocused) {
      return {
        ...defaultStyles,
        borderColor: theme.selectControlHoverBorderColor,
        boxShadow: 'none',
      };
    }

    if (state.isDisabled) {
      return {
        ...defaultStyles,
        background: theme.selectControlDisabledBackground,
        opacity: 0.8,
      };
    }

    return {
      ...defaultStyles,
    };
  },
  option: (provided, state) => {
    const defaultStyles = {
      fontSize: '14px',
      fontFamily: 'Lato',
      color: theme.selectOptionColor,
    };

    if (state.isSelected) {
      return {
        ...provided,
        ...defaultStyles,
        background: theme.selectOptionSelectedBackground,
        color: theme.selectOptionSelectedColor,
        fontWeight: 'bold',
      };
    } else if (state.isFocused) {
      return {
        ...provided,
        ...defaultStyles,
        backgroundColor: theme.selectOptionFocusedBackground,
      };
    }
    return {
      ...provided,
      ...defaultStyles,
    };
  },
  menu: (provided) => {
    return {
      ...provided,
      background: theme.selectMenuBackground,
    };
  },
  multiValueLabel: (provided) => {
    return {
      ...provided,
      color: theme.selectMultiValueLabelColor,
    };
  },
  multiValue: (provided) => {
    return {
      ...provided,
      background: theme.selectMultiValueBackground,
    };
  },
  singleValue: (provided) => {
    return {
      ...provided,
      color: theme.selectSingleValueColor,
      fontWeight: 'bold',
    };
  },
});

// some of the styles couldn't be overriden by the styles object
const Container = styled.div<Theme>`
  font-family: 'Lato';
  font-size: 14px;

  .rtk__control:hover {
    border-color: ${({ theme }) => theme.selectControlHoverBorderColor};
  }

  .rtk__input input {
    font-family: inherit;
  }

  .rtk__multi-value__remove:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.selectMultiValueRemoveHoverBackground};
  }

  .rtk__indicator-separator {
    display: none;
  }
`;

const SelectIcon = styled.span`
  padding: 8px;
`;

export const Select: React.FunctionComponent<SelectProps> = ({
  className,
  selectProps,
}) => {
  const {
    classNamePrefix, // eslint-disable-line @typescript-eslint/no-unused-vars,
    components,
    ...restOfSelectProps
  } = selectProps;

  const theme = useTheme();

  const styles = React.useMemo(() => getCustomStyles(theme), [theme]);

  return (
    <Container className={`${className} rtk-select`} theme={theme}>
      <WindowedSelect
        classNamePrefix="rtk"
        styles={styles}
        components={{
          ...components,
          DropdownIndicator: () => (
            <SelectIcon>
              <CaretDown color={theme.colors.body} />
            </SelectIcon>
          ),
          ClearIndicator: (props) => {
            return (
              <SelectIcon onClick={props.clearValue}>
                <Times color={theme.colors.body} />
              </SelectIcon>
            );
          },
          MultiValueRemove: (props) => {
            return (
              <span {...props.innerProps}>
                <Times color={theme.colors.tag} />
              </span>
            );
          },
        }}
        {...restOfSelectProps}
      />
    </Container>
  );
};

Select.displayName = 'Select';
