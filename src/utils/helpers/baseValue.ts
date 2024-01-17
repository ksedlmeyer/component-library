export const BaseValue = (prop: unknown, defaultClass: string) => {
  const useDash = !['p', 'm', ''].includes(defaultClass);
  return `${
    prop === 'base'
      ? `${defaultClass}`
      : `${defaultClass}${useDash ? '-' : ''}${prop}`
  }`;
};
