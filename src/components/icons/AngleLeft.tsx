import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';

import { IconProps } from './types';

const AngleLeft: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faAngleLeft} {...props} />;
};

export default AngleLeft;
