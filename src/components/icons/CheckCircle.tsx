import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';

import { IconProps } from './types';

const CheckCircle: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faCheckCircle} {...props} />;
};

export default CheckCircle;
