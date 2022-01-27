import { ReactNode } from "react";
import type { IProduct } from "./structure";
import type { ClassName } from "./alias";

export interface WrapperProps {
  children: ReactNode;
}

export interface WrapperWithClassNameProps extends WrapperProps {
  className?: ClassName;
}

export interface PanelProps extends WrapperWithClassNameProps {
  headerChildren: ReactNode;
}

export interface FilterControllerProps extends WrapperProps {
  className?: ClassName;
  title: string;
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
