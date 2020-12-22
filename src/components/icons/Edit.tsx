import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';

import { IconProps } from './types';

const Edit: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faEdit} {...props} />;
};

export default Edit;
