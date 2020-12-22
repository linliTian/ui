import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';

import { IconProps } from './types';

const ArrowUp: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faArrowUp} {...props} />;
};

export default ArrowUp;
