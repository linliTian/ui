import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSortUp } from '@fortawesome/free-solid-svg-icons/faSortUp';

import { IconProps } from './types';

const SortUp: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faSortUp} {...props} />;
};

export default SortUp;
