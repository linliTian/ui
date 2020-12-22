import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSyncAlt } from '@fortawesome/free-solid-svg-icons/faSyncAlt';

import { IconProps } from './types';

const SyncAlt: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faSyncAlt} {...props} />;
};

export default SyncAlt;
