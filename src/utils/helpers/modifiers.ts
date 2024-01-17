/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseModifiers } from '../types';
import { BaseValue } from './baseValue';

export const calculateModifierClasses = (
  prop: UseModifiers<any>,
  defaultClass: string
) => {
  const results: string[] = [];
  Object.keys(prop).forEach((key) => {
    if (Array.isArray(prop[key])) {
      prop[key].map((value: string | number) => {
        const base = BaseValue(value, defaultClass);
        results.push(`${key === 'base' ? `${base}` : `${key}:${base}`}`);
      });
    } else {
      const base = BaseValue(prop[key], defaultClass);
      results.push(`${key === 'base' ? `${base}` : `${key}:${base}`}`);
    }
  });
  return results.join(' ');
};

export const ConvertObject = (
  prop: UseModifiers<any>,
  obj: { [x: string]: any }
) => {
  let results: { [x: string]: any } = {};
  if (typeof prop === 'object') {
    Object.keys(prop).forEach((key) => {
      if (Array.isArray(prop[key])) {
        const arr: string[] = [];
        prop[key].forEach((value: string | number) => {
          obj[value] == undefined ? arr.push(`${value}`) : arr.push(obj[value]);
        });
        results[key] = arr;
      } else {
        results[key] = obj[prop[key]] == undefined ? prop[key] : obj[prop[key]];
      }
    });
  } else {
    results = obj[prop];
  }
  return results;
};

export const Modifiers = <T>(
  prop: UseModifiers<T>,
  defaultClass: string,
  obj?: { [x: string]: any }
) => {
  if (Array.isArray(prop)) {
    return prop
      .map((item) => {
        return BaseValue(item, defaultClass);
      })
      .join(' ');
  } else {
    prop = obj ? ConvertObject(prop, obj) : prop;
    return typeof prop === 'object'
      ? calculateModifierClasses(prop, defaultClass)
      : BaseValue(prop, defaultClass);
  }
};
