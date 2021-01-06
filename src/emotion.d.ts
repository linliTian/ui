import '@emotion/react';
import { GlobalTheme } from './theme/types';

declare module '@emotion/react' {
  export interface Theme extends GlobalTheme {}
}
