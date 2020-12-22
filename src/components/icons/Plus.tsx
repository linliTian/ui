import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

import { IconProps } from './types';

const Plus: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faPlus} {...props} />;
};

export default Plus;
