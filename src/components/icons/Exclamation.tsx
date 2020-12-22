import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';

import { IconProps } from './types';

const Exclamation: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faExclamation} {...props} />;
};

export default Exclamation;
