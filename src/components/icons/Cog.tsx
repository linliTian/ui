import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';

import { IconProps } from './types';

const Cog: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faCog} {...props} />;
};

export default Cog;
