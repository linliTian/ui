import * as React from 'react';
import styled from '@emotion/styled';

import {
  h1Styles,
  h2Styles,
  h3Styles,
  h4Styles,
  h5Styles,
  h6Styles,
} from '../typography/Title';

import { bodyStyles } from '../typography/Body';
import { useTheme } from '../../hooks';

export type MarkdownProps = {
  children?: React.ReactNode;
};

const Span = styled.span`
  h1 {
    ${h1Styles};
  }

  h2 {
    ${h2Styles};
  }

  h3 {
    ${h3Styles};
  }

  h4 {
    ${h4Styles};
  }

  h5 {
    ${h5Styles};
  }

  h6 {
    ${h6Styles};
  }

  p {
    ${bodyStyles};
  }

  code {
    color: ${({ theme }) => theme.colors.code};
    padding: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.tertiaryBackground};
  }
`;

declare function require(name: string);

export const Markdown = ({ children }: MarkdownProps) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const md = require('markdown-it')();

  const theme = useTheme();

  return (
    <div className="markdown">
      {React.Children.map(children, child => {
        if (typeof child === 'string') {
          return (
            <Span
              theme={theme}
              dangerouslySetInnerHTML={{ __html: md.render(child) }}
            />
          );
        } else {
          return child;
        }
      })}
    </div>
  );
};
