import { AssetPath } from "./alias";
import { Category } from "@data/defined";

interface IImageData {
  main: AssetPath;
  front: AssetPath;
  back: AssetPath;
}

export interface IProduct {
  subtitle: string;
  name: string;
  category: Category;
  imageData: IImageData;
  price: number;
}
