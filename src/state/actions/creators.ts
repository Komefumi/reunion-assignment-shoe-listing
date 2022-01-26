import { createAction } from "@reduxjs/toolkit";
import { IPriceRange, Size, SearchQuery } from "@my-types/alias";
import { Category } from "@data/defined";
import { createPayloadObject } from "@utils/state";
import actionNames from "./names";

const { SET_PRICE_RANGE, SET_CATEGORIES, SET_SIZES, SET_QUERY } = actionNames;

export const setPriceRange = createAction(
  SET_PRICE_RANGE,
  (priceRange: IPriceRange) => createPayloadObject({ priceRange })
);
export const setCategories = createAction(
  SET_CATEGORIES,
  (categories: Category[]) => createPayloadObject({ categories })
);
export const setSizes = createAction(SET_SIZES, (sizes: Size[]) =>
  createPayloadObject({ sizes })
);
export const setQuery = createAction(SET_QUERY, (query: SearchQuery) =>
  createPayloadObject({ query })
);
