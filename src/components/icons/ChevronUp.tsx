import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';

import { IconProps } from './types';

const ChevronUp: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faChevronUp} {...props} />;
};

export default ChevronUp;
