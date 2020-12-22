import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTable } from '@fortawesome/free-solid-svg-icons/faTable';

import { IconProps } from './types';

const Table: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faTable} {...props} />;
};

export default Table;
