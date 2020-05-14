import * as React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import styled, { css } from 'styled-components';

import { Icon } from '../icons';

import { GlobalTheme } from '../../theme/types';

import { InputProps, InputSize } from './Input';

export const StyledSuffix = styled.div<{
  theme: GlobalTheme;
  inputSize?: InputSize;
}>`
  ${({ theme, inputSize }) => css`
    position: absolute;

    display: flex;
    align-items: center;

    height: ${theme.inputDefaultHeight};
    right: ${theme.inputSuffixRight};

    ${inputSize === 'small' &&
      css`
        height: ${theme.inputSmallHeight};
      `}

    ${inputSize === 'large' &&
      css`
        height: ${theme.inputLargeHeight};
      `}
  `};
`;

interface SuffixProps
  extends Pick<
    InputProps,
    'validationStatus' | 'inputSuffix' | 'size' | 'hasFeedbackIcon'
  > {
  theme: GlobalTheme;
}

export const Suffix: React.FunctionComponent<SuffixProps> = ({
  validationStatus,
  theme,
  inputSuffix,
  size,
  hasFeedbackIcon,
}) => {
  let suffixContent;
  switch (validationStatus) {
    case 'error': {
      suffixContent = <Icon.Times color={theme.colors.red} />;
      break;
    }
    case 'success': {
      suffixContent = <Icon.Check color={theme.colors.green} />;
      break;
    }
    case 'warning': {
      suffixContent = <Icon.Exclamation color={theme.colors.yellow} />;
      break;
    }
    case 'loading': {
      suffixContent = <Icon.Loading />;
      break;
    }
  }

  const hasFeedback = hasFeedbackIcon && validationStatus !== undefined;
  return (
    <StyledSuffix theme={theme} inputSize={size}>
      <motion.div
        key="suffix"
        style={{ position: 'relative' }}
        variants={{
          hasFeedback: {
            marginRight: '8px',
          },
          noFeedback: {
            marginRight: 0,
          },
        }}
        animate={hasFeedback ? 'hasFeedback' : 'noFeedback'}
        exit={'noFeedback'}
      >
        {inputSuffix}
      </motion.div>
      <AnimatePresence>
        {hasFeedback && (
          <motion.div
            key="feedback"
            style={{ position: 'relative' }}
            initial={{ opacity: 0, right: '-10px' }}
            animate={{ opacity: 1, right: '0px' }}
            exit={{ opacity: 0, right: '-10px' }}
            transition={{ duration: theme.animationTimeVeryFast }}
          >
            {suffixContent}
          </motion.div>
        )}
      </AnimatePresence>
    </StyledSuffix>
  );
};
