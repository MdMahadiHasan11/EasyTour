/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export function removeNullValues<T extends object>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== null && value !== undefined,
    ),
  ) as Partial<T>;
}
// utils/removeEmptyObjects.ts
export const removeEmptyObjects = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) return [];

  return arr
    .map((item) => removeNullValues(item)) // remove null/undefined inside each object
    .filter(
      (item) =>
        item && Object.keys(item).length > 0 && item.constructor === Object,
    ); // remove empty objects
};
