/**
 * Shallowly and strictly finds all items in the array that are duplicated.
 */
export function findDuplicateValues<T extends any>(arr: readonly T[]): T[] {
  const elements = new Map();
  const duplicated: T[] = [];

  for (const el of arr) {
    if (elements.has(el)) {
      duplicated.push(el);
    }

    elements.set(el, true);
  }

  return duplicated;
}

export function removeDuplicates<T>(arr: readonly T[]): T[] {
  return [...new Set(arr)];
}

/**
 * Returns an array containing numbers from `min` to `max` inclusive.
 */
export function range(max: number, min = 0, step = 1): number[] {
  const ret: number[] = [];

  if (max < min) {
    throw new RangeError("max must be greater than or equal to min");
  }

  for (let i = min; i <= max; i += step) {
    ret.push(i);
  }

  return ret;
}

function baseRandom(lower: number, upper: number) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 * credits: lodash
 */

export function shuffle(array: any[]) {
  let index = -1;
  const result = [...array];
  const length = result.length;
  const lastIndex = length - 1;

  while (++index < length) {
    const rand = baseRandom(index, lastIndex);
    const value = result[rand];

    result[rand] = result[index];
    result[index] = value;
  }
  return result;
}
