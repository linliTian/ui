import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShareSquare } from '@fortawesome/free-solid-svg-icons/faShareSquare';

import { IconProps } from './types';

const ShareSquare: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faShareSquare} {...props} />;
};

export default ShareSquare;
