import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';

import { IconProps } from './types';

const ArrowDown: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faArrowDown} {...props} />;
};

export default ArrowDown;
