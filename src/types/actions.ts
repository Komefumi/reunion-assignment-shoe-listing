import { IPriceRange, Size, SearchQuery } from "./alias";
import { PayloadAction, Category, SortMode } from "./state";

export type SetPriceRangeAction = PayloadAction<IPriceRange>;
export type SetCategoriesAction = PayloadAction<Category[]>;
export type CategoryTriggerAction = PayloadAction<Category>;
export type SetSizesAction = PayloadAction<Size[]>;
export type SizeTriggerAction = PayloadAction<Size>;
export type SetQueryAction = PayloadAction<SearchQuery>;
export type SetSortModeAction = PayloadAction<SortMode>;
