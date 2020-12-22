import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import { IconProps } from './types';

const TimesCircle: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faTimesCircle} {...props} />;
};

export default TimesCircle;
