import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';

import { IconProps } from './types';

const SortDown: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faSortDown} {...props} />;
};

export default SortDown;
