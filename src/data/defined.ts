export enum Category {
  FLIP_FLOPS = "Flip Flops",
  SNEAKERS = "Sneakers",
  LACE_UP_SHOES = "Lace-Up Shoes",
  SHOE_ACCESSORIES = "Shoe Accessories",
}

export enum SortMode {
  PRICE = "PRICE",
  SIZE = "SIZE",
}

export const sizes: number[] = (() => {
  const sizesGenerated = [];
  for (let i = 35; i <= 49; i++) {
    sizesGenerated.push(i);
  }
  return sizesGenerated;
})();
