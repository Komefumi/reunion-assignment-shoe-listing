import { ReactNode } from "react";
import type { IProduct } from "./structure";
import type { ClassName, IPriceRange } from "./alias";

export interface WrapperProps {
  children: ReactNode;
}

export interface WrapperWithClassNameProps extends WrapperProps {
  className?: ClassName;
}

export interface PanelProps extends WrapperWithClassNameProps {
  headerChildren: ReactNode;
}

export interface FilterControllerProps {
  className?: ClassName;
  title?: string;
  headerContent?: ReactNode;
  children?: ReactNode;
  bodyContent?: ReactNode;
}

export enum VisualSideHandleMode {
  ORANGE = "ORANGE",
  BLACK = "BLACK",
  GREY = "GREY",
}

export interface ProductCardProps {
  className?: ClassName;
  product: IProduct;
  sideHandleMode: VisualSideHandleMode;
}

export interface RangeSliderProps {
  lowerBound: number;
  upperBound: number;
  currentLowerValue: number;
  currentHigherValue: number;
  setLowerAndHigherValues: (priceRange: IPriceRange) => void;
}
