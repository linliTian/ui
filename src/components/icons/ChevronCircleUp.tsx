import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons/faChevronCircleUp';

import { IconProps } from './types';

const ChevronCircleUp: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faChevronCircleUp} {...props} />;
};

export default ChevronCircleUp;
