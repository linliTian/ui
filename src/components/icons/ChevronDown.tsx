import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

import { IconProps } from './types';

const ChevronDown: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faChevronDown} {...props} />;
};

export default ChevronDown;
