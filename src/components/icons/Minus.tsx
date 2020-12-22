import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';

import { IconProps } from './types';

const Minus: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faMinus} {...props} />;
};

export default Minus;
