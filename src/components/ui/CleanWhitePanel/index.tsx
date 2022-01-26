import clsx from "clsx";
import { PanelProps } from "@app/types/prop-types";
import classes from "./classes.module.scss";

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
