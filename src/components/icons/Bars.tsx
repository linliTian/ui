import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

import { IconProps } from './types';

const Bars: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faBars} {...props} />;
};

export default Bars;
