import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons/faChevronCircleDown';

import { IconProps } from './types';

const ChevronCircleDown: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faChevronCircleDown} {...props} />;
};

export default ChevronCircleDown;
