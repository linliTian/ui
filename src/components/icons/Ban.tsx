import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';

import { IconProps } from './types';

const Ban: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faBan} {...props} />;
};

export default Ban;
