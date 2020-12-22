import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

import { IconProps } from './types';

const Search: React.FunctionComponent<IconProps> = (props) => {
  return <FontAwesomeIcon icon={faSearch} {...props} />;
};

export default Search;
