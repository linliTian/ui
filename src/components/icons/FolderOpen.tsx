import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';

import { IconProps } from './types';

const FolderOpen: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faFolderOpen} {...props} />;
};

export default FolderOpen;
