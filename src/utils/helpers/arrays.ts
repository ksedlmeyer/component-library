import { SizingZeroToNinetySix } from '../types/shared.types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const CombineArrs = (
  arr1: any,
  arr2: any,
  str = '-',
  arr1AsValues = true
) => {
  const keys: string[] = [],
    values: string[] = [],
    results: { [x: string]: any } = {};
  arr2 = arr1AsValues ? ['', ...arr2] : arr2;
  arr1.forEach((x: any) => {
    arr2.forEach((y: string) => {
      keys.push(y === '' ? `${y}${x}` : `${y}${str}${x}`);
      values.push(`${y}${str}${x}`);
    });
  });
  keys.forEach((key, index) => {
    results[key] = values[index];
  });
  return { array: keys, obj: results };
};

export const SizingValuesArr = [...SizingZeroToNinetySix, 'px'] as const;

const corners = ['', 'x', 'y', 't', 'r', 'b', 'l'];

const MarginValuesArr = [...SizingValuesArr, 'auto'] as const;

const combineArrays = (arr1: any, arr2: any, str = '-') => {
  const keys: string[] = [],
    values: string[] = [],
    results: { [x: string]: any } = {};
  arr1.forEach((x: any) => {
    arr2.forEach((y: string) => {
      keys.push(y === '' ? `${y}${x}` : `${y}${str}${x}`);
      values.push(`${y}${str}${x}`);
    });
  });
  keys.forEach((key, index) => {
    results[key] = values[index];
  });
  return { keys, values, results };
};

export const { keys: MarginArray, results: MarginObject } = combineArrays(
  MarginValuesArr,
  corners
);

export const { keys: PaddingArray, results: PaddingObject } = combineArrays(
  SizingValuesArr,
  corners
);
