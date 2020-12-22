import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';

import { IconProps } from './types';

const Clock: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faClock} {...props} />;
};

export default Clock;
