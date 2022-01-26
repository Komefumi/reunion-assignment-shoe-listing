import clsx from "clsx";
import { ProductCardProps } from "@my-types/prop-types";

export default function ProductCard({ className, product }: ProductCardProps) {
  const { imageData } = product;
  return (
    <div className={clsx(className)}>
      <div>{product.category}</div>
      <header>
        <h6>{product.subtitle}</h6>
        <h5>{product.name}</h5>
        <div>
          <img src={imageData.main} alt="A main display for the product" />
        </div>
        <footer>
          <div>
            <h6>Price</h6>
            <span>$ {product.price}</span>
          </div>
          <div>
            <img src={imageData.front} alt="Front view of the product" />
            <img src={imageData.front} alt="Back view of the product" />
          </div>
        </footer>
      </header>
    </div>
  );
}
