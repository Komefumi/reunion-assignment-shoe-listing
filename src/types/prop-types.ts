import { ReactNode } from "react";
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
