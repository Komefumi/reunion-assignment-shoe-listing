import clsx from "clsx";
import { PanelProps, WrapperWithClassNameProps } from "@app/types/prop-types";
import classes from "./classes.module.scss";

export function AsideForPanel({
  className,
  children,
}: WrapperWithClassNameProps) {
  return (
    <div className={clsx(classes.aside_for_panel, className)}>{children}</div>
  );
}

export default function CleanWhitePanel({
  className,
  headerChildren,
  children,
}: PanelProps) {
  return (
    <div className={clsx(classes.panel, className)}>
      <header className={classes.panel_header}>{headerChildren}</header>
      <main className={classes.panel_body}>{children}</main>
    </div>
  );
}
