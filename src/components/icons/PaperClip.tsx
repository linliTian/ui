import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPaperclip } from '@fortawesome/free-solid-svg-icons/faPaperclip';

import { IconProps } from './types';

const PaperClip: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faPaperclip} {...props} />;
};

export default PaperClip;
