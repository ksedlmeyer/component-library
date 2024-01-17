import { UseModifiers } from './modifier.types';

export const ScreenReaders = ['sr-only', 'not-sr-only'] as const;
export type ScreenReaders = typeof ScreenReaders[number];

export interface AccessibilityProps {
  screenReaders?: UseModifiers<ScreenReaders>;
}
