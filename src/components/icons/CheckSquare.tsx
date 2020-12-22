import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckSquare } from '@fortawesome/free-solid-svg-icons/faCheckSquare';

import { IconProps } from './types';

const CheckSquare: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faCheckSquare} {...props} />;
};

export default CheckSquare;
