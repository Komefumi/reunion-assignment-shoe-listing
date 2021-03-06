import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./store";
import { generatedProducts } from "@data/generated";
import { IState, SortMode } from "@my-types/state";
import type { IProduct } from "@my-types/structure";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;

export const useGetFilteredProducts = (): IProduct[] => {
  const {
    filters,
    searchQuery,
    sortMode: activeSortMode,
  } = useAppSelector((state) => state);
  const filteredProducts = generatedProducts.filter((currentProduct) => {
    const { categories, sizes, priceRange } = filters;
    const [minPrice, maxPrice] = priceRange;
    const searchQueryLowercase = searchQuery.toLowerCase();

    if (categories.length) {
      if (!categories.includes(currentProduct.category)) return false;
    }

    if (sizes.length) {
      if (!sizes.includes(currentProduct.size)) return false;
    }

    const { price } = currentProduct;

    if (price < minPrice || price > maxPrice) {
      return false;
    }

    if (searchQuery.length) {
      if (
        !currentProduct.name.toLowerCase().includes(searchQueryLowercase) &&
        !currentProduct.subtitle.toLowerCase().includes(searchQueryLowercase)
      )
        return false;
    }

    return true;
  });
  const productsWithSorting = filteredProducts.slice();
  productsWithSorting.sort((productA: IProduct, productB: IProduct) => {
    if (activeSortMode === SortMode.SIZE) {
      return productA.size - productB.size;
    }

    if (activeSortMode === SortMode.PRICE) {
      return productA.price - productB.price;
    }

    return 0;
  });
  return productsWithSorting;
};
