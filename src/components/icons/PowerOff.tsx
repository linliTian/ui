import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff';

import { IconProps } from './types';

const PowerOff: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faPowerOff} {...props} />;
};

export default PowerOff;
