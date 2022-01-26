import { createReducer } from "@reduxjs/toolkit";
import { MAX_PRICE } from "@config";
import {
  IState,
  SetPriceRangeAction,
  SetCategoriesAction,
  SetSizesAction,
  SetQueryAction,
} from "@my-types/state";
import actionNames from "./actions/names";

const { SET_PRICE_RANGE, SET_CATEGORIES, SET_SIZES, SET_QUERY } = actionNames;

export const initialState: IState = {
  priceRange: [0, MAX_PRICE],
  categories: [],
  sizes: [],
  query: "",
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_PRICE_RANGE, (state, action: SetPriceRangeAction) => {
      state.priceRange = action.payload.priceRange;
    })
    .addCase(SET_CATEGORIES, (state, action: SetCategoriesAction) => {
      state.categories = action.payload.categories;
    })
    .addCase(SET_SIZES, (state, action: SetSizesAction) => {
      state.sizes = action.payload.sizes;
    })
    .addCase(SET_QUERY, (state, action: SetQueryAction) => {
      state.query = action.payload.query;
    });
});

export default reducer;
