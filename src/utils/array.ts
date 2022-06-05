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
