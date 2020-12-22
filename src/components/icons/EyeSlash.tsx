import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';

import { IconProps } from './types';

const EyeSlash: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faEyeSlash} {...props} />;
};

export default EyeSlash;
