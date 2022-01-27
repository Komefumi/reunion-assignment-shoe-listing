import { Category, SortMode } from "@my-types/state";

export const CategoryKeys = Object.keys(Category) as string[];
export const CategoryValues = Object.values(Category) as Category[];

export const SortModeKeys = Object.keys(SortMode) as string[];
export const SortModeValues = Object.values(SortMode) as SortMode[];

export const sizes: number[] = (() => {
  const sizesGenerated = [];
  for (let i = 35; i <= 49; i++) {
    sizesGenerated.push(i);
  }
  return sizesGenerated;
})();

export { Category, SortMode };
