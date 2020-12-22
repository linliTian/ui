import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFolder } from '@fortawesome/free-regular-svg-icons/faFolder';

import { IconProps } from './types';

const FolderOutline: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faFolder} {...props} />;
};

export default FolderOutline;
