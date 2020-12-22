import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClone } from '@fortawesome/free-solid-svg-icons/faClone';

import { IconProps } from './types';

const Clone: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faClone} {...props} />;
};

export default Clone;
