import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';

import { IconProps } from './types';

const ExternalLinkAlt: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faExternalLinkAlt} {...props} />;
};

export default ExternalLinkAlt;
