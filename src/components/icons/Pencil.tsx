import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';

import { IconProps } from './types';

const Pencil: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faPencilAlt} {...props} />;
};

export default Pencil;
