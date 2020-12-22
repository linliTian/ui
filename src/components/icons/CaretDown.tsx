import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';

import { IconProps } from './types';

const CaretDown: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faCaretDown} {...props} />;
};

export default CaretDown;
