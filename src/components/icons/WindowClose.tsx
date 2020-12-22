import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWindowClose } from '@fortawesome/free-solid-svg-icons/faWindowClose';

import { IconProps } from './types';

const WindowClose: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faWindowClose} {...props} />;
};

export default WindowClose;
