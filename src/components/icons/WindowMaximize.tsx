import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons/faWindowMaximize';

import { IconProps } from './types';

const WindowMaximize: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faWindowMaximize} {...props} />;
};

export default WindowMaximize;
