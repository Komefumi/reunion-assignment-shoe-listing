import clsx from "clsx";
import { WrapperWithClassNameProps } from "@app/types/prop-types";
import classes from "./classes.module.scss";

export default function DimBackground({
  children,
  className,
}: WrapperWithClassNameProps) {
  return (
    <div className={clsx(classes.dim_background, className)}>{children}</div>
  );
}
