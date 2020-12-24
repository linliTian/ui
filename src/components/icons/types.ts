import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {}

export type SortState = 'none' | 'asc' | 'dsc';
