import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';
import { IconProps } from './types';

const TrashAlt: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faTrashAlt} {...props} />;
};

export default TrashAlt;
