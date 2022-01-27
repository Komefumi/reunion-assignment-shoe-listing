import { ChangeEvent, MouseEvent } from "react";
import { Provider } from "react-redux";
import clsx from "clsx";
import store from "@state/store";
import {
  useAppSelector,
  useAppDispatch,
  useGetFilteredProducts,
} from "@state/hooks";
import {
  makeCategoryTrigger,
  makeSizeTrigger,
  setSearchQuery,
  setPriceRange,
} from "@state/actions/creators";
import DimBackground from "@ui/DimBackground";
import Panel, { AsideForPanel } from "@ui/DisplayPanel";
import ProductCard from "@ui/ProductCard";
import RangeSlider from "@ui/RangeSlider";
import { Category, sizes } from "@data/defined";
import { IPriceRange } from "@my-types/alias";
import {
  VisualSideHandleMode,
  FilterControllerProps,
} from "@app/types/prop-types";
import SearchIconSVG from "@assets/search-icon.svg";
import classes from "./App.module.scss";

const FilterController = ({
  className,
  title,
  children,
}: FilterControllerProps) => {
  return (
    <div className={clsx(classes.filter_controller, className)}>
      <h4 className={classes.title}>{title}</h4>
      <main className={classes.body}>{children}</main>
    </div>
  );
};

function App() {
  const dispatch = useAppDispatch();
  const { filters, searchQuery } = useAppSelector((state) => state);
  const { priceRange } = filters;

  const filteredProducts = useGetFilteredProducts();

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
              <FilterController
                className={classes.categories}
                title="Categories"
              >
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
              </FilterController>
              <FilterController title="Price Range">
                <RangeSlider
                  lowerBound={0}
                  upperBound={2000}
                  currentLowerValue={priceRange[0]}
                  currentHigherValue={priceRange[1]}
                  setLowerAndHigherValues={(priceRange: IPriceRange) => {
                    dispatch(setPriceRange(priceRange));
                  }}
                />
              </FilterController>
              <FilterController className={classes.sizes} title="Size">
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
                        classes.size_selector,
                        sizeIsSelected && classes.size_is_selected
                      )}
                      onClick={triggerForOnClick}
                    >
                      {currentSize}
                    </button>
                  );
                })}
              </FilterController>
            </AsideForPanel>
            <main className={classes.panel_body_item_listing}>
              <header className={classes.header}>
                <h4 className={classes.title}>New Arrivals</h4>
                <div className={classes.sort_select}>Sort by Price</div>
              </header>
              <main className={classes.filtered_product_listing}>
                {filteredProducts.map((productData, index) => {
                  let chosenSideHandleMode = VisualSideHandleMode.ORANGE;
                  if (index > 0) {
                    if (index % 2 === 0) {
                      chosenSideHandleMode = VisualSideHandleMode.GREY;
                    } else {
                      chosenSideHandleMode = VisualSideHandleMode.BLACK;
                    }
                  }
                  return (
                    <ProductCard
                      className={classes.product_item}
                      key={index}
                      product={productData}
                      sideHandleMode={chosenSideHandleMode}
                    />
                  );
                })}
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
