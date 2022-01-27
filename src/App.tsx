import { ChangeEvent, MouseEvent } from "react";
import { Provider } from "react-redux";
import clsx from "clsx";
import store from "@state/store";
import { useAppSelector, useAppDispatch } from "@state/hooks";
import {
  makeCategoryTrigger,
  makeSizeTrigger,
  setSearchQuery,
} from "@state/actions/creators";
import DimBackground from "@ui/DimBackground";
import Panel, { AsideForPanel } from "@ui/DisplayPanel";
import ProductCard from "@ui/ProductCard";
import { Category, sizes } from "@data/defined";
import { generatedProducts } from "@data/generated";
import { FilterListerProps } from "@app/types/prop-types";
import SearchIconSVG from "@assets/search-icon.svg";
import classes from "./App.module.scss";

const FilterLister = ({ className, title, children }: FilterListerProps) => {
  return (
    <div className={clsx(classes.filters_lister, className)}>
      <h4 className={classes.title}>{title}</h4>
      <main className={classes.body}>{children}</main>
    </div>
  );
};

function App() {
  const dispatch = useAppDispatch();
  const { filters, searchQuery } = useAppSelector((state) => state);

  const filteredProducts = generatedProducts.filter((currentProduct) => {
    const { categories, sizes, priceRange } = filters;
    const [minPrice, maxPrice] = priceRange;

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
        !currentProduct.name.includes(searchQuery) &&
        !currentProduct.subtitle.includes(searchQuery)
      )
        return false;
    }

    return true;
  });

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextSearchQuery = e.target.value;
    dispatch(setSearchQuery(nextSearchQuery));
  };

  return (
    <div className={classes.app}>
      <DimBackground className={classes.background}>
        <Panel
          className={classes.panel}
          headerChildren={
            <div className={classes.panel_header_content}>
              <h4 className={classes.title}>Shoe</h4>

              <div className={classes.search_bar}>
                <SearchIconSVG className={classes.search_icon} />
                <input
                  className={classes.search_input}
                  type="text"
                  onChange={handleSearchQueryChange}
                  value={searchQuery}
                />
              </div>
            </div>
          }
        >
          <div className={classes.panel_body_content}>
            <AsideForPanel className={classes.panel_body_filters}>
              <FilterLister title="Categories">
                {Object.keys(Category).map((key) => {
                  // @ts-ignore
                  const categoryString = Category[key];
                  const isChecked = filters.categories.includes(categoryString);
                  const onChange = (_event: ChangeEvent<HTMLInputElement>) => {
                    dispatch(makeCategoryTrigger(categoryString));
                  };
                  return (
                    <div
                      className={classes.category_select_with_label}
                      key={key as string}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        value={categoryString}
                        onChange={onChange}
                      />
                      <label>{categoryString}</label>
                    </div>
                  );
                })}
              </FilterLister>
              <FilterLister title="Price Range">b</FilterLister>
              <FilterLister title="Size">
                {sizes.map((currentSize) => {
                  const sizeIsSelected = filters.sizes.includes(currentSize);
                  const triggerForOnClick = (
                    _event: MouseEvent<HTMLButtonElement>
                  ) => {
                    dispatch(makeSizeTrigger(currentSize));
                  };
                  return (
                    <button
                      key={currentSize}
                      className={clsx(
                        sizeIsSelected && classes.size_is_selected
                      )}
                      onClick={triggerForOnClick}
                    >
                      {currentSize}
                    </button>
                  );
                })}
              </FilterLister>
            </AsideForPanel>
            <main className={classes.panel_body_item_listing}>
              <header className={classes.header}>
                <h4 className={classes.title}>New Arrivals</h4>
                <div className={classes.sort_select}>Sort by Price</div>
              </header>
              <main>
                {filteredProducts.map((productData, index) => (
                  <ProductCard key={index} product={productData} />
                ))}
              </main>
            </main>
          </div>
        </Panel>
      </DimBackground>
    </div>
  );
}

export default function AppPrepared() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
