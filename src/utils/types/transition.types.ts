import { UseModifiers } from './modifier.types';
import { ArbitraryValue } from './shared.types';

export const TransitionProperty = [
  'none',
  'all',
  'base',
  'colors',
  'opacity',
  'shadow',
  'transform'
] as const;
export type TransitionProperty = typeof TransitionProperty[number];

export const TransitionTime = [75, 100, 150, 200, 300, 500, 700, 1000] as const;
export type TransitionTime = typeof TransitionTime[number];

export const TransitionEase = ['linear', 'in', 'out', 'in-out'] as const;
export type TransitionEase = typeof TransitionEase[number];

export const Animation = ['none', 'spin', 'ping', 'pulse', 'bounce'] as const;
export type Animation = typeof Animation[number];

export interface TransitionProps {
  transitionProperty?: UseModifiers<TransitionProperty | ArbitraryValue>;
  transitionDuration?: UseModifiers<TransitionTime | ArbitraryValue>;
  transitionEase?: UseModifiers<TransitionEase | ArbitraryValue>;
  transitionDelay?: UseModifiers<TransitionTime | ArbitraryValue>;
  animation?: UseModifiers<Animation | ArbitraryValue>;
}
