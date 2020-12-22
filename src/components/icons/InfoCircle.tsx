import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';

import { IconProps } from './types';

const InfoCircle: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faInfoCircle} {...props} />;
};

export default InfoCircle;
