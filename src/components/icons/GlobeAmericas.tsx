import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons/faGlobeAmericas';

import { IconProps } from './types';

const GlobeAmericas: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faGlobeAmericas} {...props} />;
};

export default GlobeAmericas;
