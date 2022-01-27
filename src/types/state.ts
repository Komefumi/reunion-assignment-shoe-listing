// import { Action } from "@reduxjs/toolkit";
import { IPriceRange, Size, SearchQuery, ActionType } from "./alias";

export enum Category {
  FLIP_FLOPS = "Flip Flops",
  SNEAKERS = "Sneakers",
  LACE_UP_SHOES = "Lace-Up Shoes",
  SHOE_ACCESSORIES = "Shoe Accessories",
}

export enum SortMode {
  PRICE = "Price",
  SIZE = "Size",
}

export interface IState {
  filters: {
    priceRange: IPriceRange;
    categories: Category[];
    sizes: Size[];
  };
  searchQuery: SearchQuery;
  sortMode: SortMode;
}

export interface IPayloadObject<T> {
  payload: T;
}

export interface PayloadAction<T> extends IPayloadObject<T> {
  type: ActionType;
}

