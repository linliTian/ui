import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

import { IconProps } from './types';

const ExclamationCircle: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faExclamationCircle} {...props} />;
};
ExclamationCircle.displayName = 'ExclamationCircle';
export default ExclamationCircle;
