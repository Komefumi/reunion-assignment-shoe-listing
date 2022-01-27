import clsx from "clsx";
import { ProductCardProps } from "@my-types/prop-types";
import classes from "./classes.module.scss";

export default function ProductCard({
  className,
  product,
  sideHandleMode,
}: ProductCardProps) {
  const { imageData } = product;
  return (
    <div className={clsx(classes.product_card, className)}>
      <header className={classes.header}>
        <span
          className={clsx(
            classes.visual_side_handle,
            classes[`visual_side_handle_${sideHandleMode.toLowerCase()}`]
          )}
        ></span>
        <h6 className={clsx("crisp-light-text", classes.subtitle)}>
          {product.subtitle}
        </h6>
        <h5 className={classes.name}>{product.name}</h5>
        <div className={classes.main_display}>
          <img src={imageData.main} alt="A main display for the product" />
        </div>
        <footer className={classes.footer}>
          <div className={classes.price_display}>
            <label className={clsx("crisp-light-text", classes.price_label)}>
              Price
            </label>
            <div className={classes.price_value}>
              <span className={classes.price_currency_symbol}>&#36;</span>
              <span className={classes.price_amount}>{product.price}</span>
            </div>
          </div>
          <div className={classes.secondary_display}>
            <div className={classes.image_holder}>
              <img src={imageData.front} alt="Front view of the product" />
            </div>
            <div className={classes.image_holder}>
              <img src={imageData.front} alt="Back view of the product" />
            </div>
          </div>
        </footer>
      </header>
    </div>
  );
}
