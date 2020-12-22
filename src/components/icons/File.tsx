import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';

import { IconProps } from './types';

const File: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faFile} {...props} />;
};

export default File;
