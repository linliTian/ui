import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';

import { IconProps } from './types';

const ClipboardList: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faClipboardList} {...props} />;
};

export default ClipboardList;
