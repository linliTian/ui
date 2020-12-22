import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

import { IconProps } from './types';

const AngleRight: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faAngleRight} {...props} />;
};

export default AngleRight;
