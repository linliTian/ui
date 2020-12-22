import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

import { IconProps } from './types';

const Check: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faCheck} {...props} />;
};

export default Check;
