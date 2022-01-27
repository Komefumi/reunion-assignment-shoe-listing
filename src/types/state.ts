// import { Action } from "@reduxjs/toolkit";
import { Category } from "@data/defined";
import { IPriceRange, Size, SearchQuery, ActionType } from "./alias";

export interface IState {
  priceRange: IPriceRange;
  categories: Category[];
  sizes: Size[];
  query: SearchQuery;
}

export interface IPayloadObject<T> {
  payload: T;
}

export interface PayloadAction<T> extends IPayloadObject<T> {
  type: ActionType;
}

export type SetPriceRangeAction = PayloadAction<IPriceRange>;
export type SetCategoriesAction = PayloadAction<Category[]>;
export type SetSizesAction = PayloadAction<Size[]>;
export type SetQueryAction = PayloadAction<SearchQuery>;
