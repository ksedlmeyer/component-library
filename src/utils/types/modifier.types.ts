export const Breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type Breakpoints = typeof Breakpoints[number];

export const BeforeAfter = ['before', 'after'] as const;
export type BeforeAfter = typeof BeforeAfter[number];

export const Modifiers = [
  ...Breakpoints,
  ...BeforeAfter,
  'active',
  'autofill',
  'backdrop',
  'checked',
  'contrast-less',
  'contrast-more',
  'dark',
  'default',
  'disabled',
  'empty',
  'enabled',
  'even',
  'file',
  'first',
  'first-letter',
  'first-line',
  'first-of-type',
  'focus',
  'focus-visible',
  'focus-within',
  'hover',
  'in-range',
  'indeterminate',
  'invalid',
  'landscape',
  'last',
  'last-of-type',
  'ltr',
  'marker',
  'motion-reduce',
  'motion-safe',
  'odd',
  'only',
  'only-of-type',
  'open',
  'out-of-range',
  'placeholder',
  'placeholder-shown',
  'portrait',
  'print',
  'read-only',
  'required',
  'rtl',
  'selection',
  'target',
  'valid',
  'visited'
] as const;

export type Modifiers = typeof Modifiers[number];

export type UseModifiers<T> = { [P in 'base' | Modifiers]?: T } | T;

export type UseBeforeAfter<T> = { [P in BeforeAfter]?: T } | T;
