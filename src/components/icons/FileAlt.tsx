import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';

import { IconProps } from './types';

const FileAlt: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faFileAlt} {...props} />;
};

export default FileAlt;
