import * as React from 'react';
import styled from '@emotion/styled';

import Check from '../icons/Check';
import Loading from '../icons/Loading';

const ToggleCheck = styled(Check)`
  position: absolute;

  top: 2px;
  left: 4px;
`;

const ToggleLoadingOn = styled(Loading)`
  position: absolute;

  top: 2px;
  left: 4px;
`;

const ToggleLoadingOff = styled(Loading)`
  position: absolute;

  top: 2px;
  left: 17px;
`;

export const ToggleIcon = ({ isOn, isLoading, theme }) => {
  if (isOn) {
    if (isLoading) {
      return <ToggleLoadingOn color={theme.toggleOnIconColor} size="xs" />;
    } else {
      return <ToggleCheck color={theme.toggleOnIconColor} size="xs" />;
    }
  } else {
    if (isLoading) {
      return <ToggleLoadingOff color={theme.toggleOnIconColor} size="xs" />;
    } else {
      return null;
    }
  }
};
