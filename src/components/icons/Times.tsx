import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { IconProps } from './types';

const Times: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faTimes} {...props} />;
};

export default Times;
