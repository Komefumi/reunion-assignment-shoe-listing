import { CategoryValues } from "./defined";
import {
  generateRandomPhrase,
  selectRandomElementFromArray,
  generateRandomPrice,
} from "@utils/rand";
import { COUNT_OF_GENERATED_PRODUCT_ITEMS } from "@config";
import type { IProduct } from "@my-types/structure";
import imgOne from "@assets/dummy/one.png";
import imgTwo from "@assets/dummy/two.png";
import imgThree from "@assets/dummy/three.png";
import imgFour from "@assets/dummy/four.png";
import imgFive from "@assets/dummy/five.png";
import imgSix from "@assets/dummy/six.png";

export const plxImages = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];

export const generatedProducts: IProduct[] = (() => {
  const productItemsItx: IProduct[] = [];
  for (let i = 0; i < COUNT_OF_GENERATED_PRODUCT_ITEMS; i++) {
    productItemsItx.push({
      name: generateRandomPhrase(3),
      subtitle: generateRandomPhrase(5),
      category: selectRandomElementFromArray(CategoryValues),
      imageData: {
        main: selectRandomElementFromArray(plxImages),
        front: selectRandomElementFromArray(plxImages),
        back: selectRandomElementFromArray(plxImages),
      },
      price: generateRandomPrice(),
    } as IProduct);
  }
  return productItemsItx;
})();
