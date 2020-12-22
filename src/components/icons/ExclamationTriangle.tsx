import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

import { IconProps } from './types';

const ExclamationTriangle: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faExclamationTriangle} {...props} />;
};

export default ExclamationTriangle;
