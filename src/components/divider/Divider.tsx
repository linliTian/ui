import * as React from 'react';
import { StyledDivider } from './StyledDivider';
import { useTheme } from '../../hooks';

export type Component = 'li' | '';
export type Orientation = 'vertical' | 'horizontal';

export interface DividerProps {
  /** HTML parent of the divider */
  component?: Component;

  /** makes the divider vertical or horizontal **/
  orientation?: Orientation;

  /** classname for the divider */
  className?: string;

  /** thickness of the divider */
  thickness?: string;

  /** if orientation is vertical, it applies margins on left and right
   * if if orientation is horizontal, it applies margins on top and bottom */
  margin?: string;

  /** shows text on top of the divider */
  text?: string;

  /** aligns the text */
  textAlign?: 'right' | 'left' | 'center';

  /** In case there is need to match the bg color with the parent */
  bgColor?: string;

  /** font size for the text */
  fontSize?: number;
}

export const Divider: React.FunctionComponent<DividerProps> = (props) => {
  const {
    component,
    orientation,
    className,
    margin,
    thickness,
    text,
    textAlign,
    bgColor,
    fontSize,
    ...rest
  } = props;

  const theme = useTheme();

  const DividerWrapper = component === 'li' ? 'li' : React.Fragment;

  return (
    <DividerWrapper>
      <StyledDivider
        height={fontSize}
        customProps={{
          component,
          orientation,
          margin,
          thickness,
          text,
          textAlign,
          bgColor,
          fontSize,
        }}
        className={`${className} rtk-divider`}
        theme={theme}
        data-content={text}
        {...rest}
      />
    </DividerWrapper>
  );
};

Divider.displayName = 'Divider';

Divider.defaultProps = {
  component: '',
  orientation: 'horizontal',
  className: '',
  margin: '',
  thickness: '1px',
  text: '',
  textAlign: 'center',
  bgColor: '',
  fontSize: 1,
};
