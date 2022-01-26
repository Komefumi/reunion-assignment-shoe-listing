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

export interface FilterListerProps extends WrapperProps {
  className?: ClassName;
  title: string;
}

export interface ProductCardProps {
  className?: ClassName;
  product: IProduct;
}
