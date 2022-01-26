export type ClassName = string;
export type AssetPath = string;
export type SearchQuery = string;
export type Size = number;
export type ActionType = string;

export interface IPriceRange extends Array<number> {
  0: number;
  1: number;
}
