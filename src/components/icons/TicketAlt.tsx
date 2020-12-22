import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTicketAlt } from '@fortawesome/free-solid-svg-icons/faTicketAlt';

import { IconProps } from './types';

const TicketAlt: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faTicketAlt} {...props} />;
};

export default TicketAlt;
