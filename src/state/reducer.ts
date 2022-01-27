import { createReducer } from "@reduxjs/toolkit";
import { MAX_PRICE } from "@config";
import {
  IState,
  SetPriceRangeAction,
  SetCategoriesAction,
  CategoryTriggerAction,
  SetSizesAction,
  SizeTriggerAction,
  SetQueryAction,
  SortMode,
  SetSortModeAction,
} from "@my-types/state";
import actionNames from "./actions/names";

const {
  SET_PRICE_RANGE,
  SET_CATEGORIES,
  CATEGORY_TRIGGER,
  SET_SIZES,
  SIZE_TRIGGER,
  SET_SEARCH_QUERY,
  SET_SORT_MODE,
} = actionNames;

export const initialState: IState = {
  filters: {
    priceRange: [0, MAX_PRICE],
    categories: [],
    sizes: [],
  },
  searchQuery: "",
  sortMode: SortMode.PRICE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_PRICE_RANGE, (state, action: SetPriceRangeAction) => {
      state.filters.priceRange = action.payload;
    })
    .addCase(SET_CATEGORIES, (state, action: SetCategoriesAction) => {
      state.filters.categories = action.payload;
    })
    .addCase(CATEGORY_TRIGGER, (state, action: CategoryTriggerAction) => {
      const categoryItem = action.payload;
      const categoryItemIndex = state.filters.categories.indexOf(categoryItem);
      if (categoryItemIndex === -1) {
        state.filters.categories.push(categoryItem);
      } else {
        state.filters.categories.splice(categoryItemIndex, 1);
      }
    })
    .addCase(SET_SIZES, (state, action: SetSizesAction) => {
      state.filters.sizes = action.payload;
    })
    .addCase(SIZE_TRIGGER, (state, action: SizeTriggerAction) => {
      const sizeItem = action.payload;
      const sizeItemIndex = state.filters.sizes.indexOf(sizeItem);
      if (sizeItemIndex === -1) {
        state.filters.sizes.push(sizeItem);
      } else {
        state.filters.sizes.splice(sizeItemIndex, 1);
      }
    })
    .addCase(SET_SEARCH_QUERY, (state, action: SetQueryAction) => {
      state.searchQuery = action.payload;
    })
    .addCase(SET_SORT_MODE, (state, action: SetSortModeAction) => {
      state.sortMode = action.payload;
    });
});

export default reducer;
