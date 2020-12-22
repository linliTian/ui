import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStickyNote } from '@fortawesome/free-solid-svg-icons/faStickyNote';

import { IconProps } from './types';

const StickyNote: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faStickyNote} {...props} />;
};

export default StickyNote;
