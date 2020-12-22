import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';

import { IconProps } from './types';

const Lock: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faLock} {...props} />;
};

export default Lock;
