import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard';

import { IconProps } from './types';

const Clipboard: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faClipboard} {...props} />;
};

export default Clipboard;
