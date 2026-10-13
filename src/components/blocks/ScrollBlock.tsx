import type { ComponentPropsWithoutRef } from "react";
import classes from "./ScrollBlock.module.css";

export type ScrollBlockProps = ComponentPropsWithoutRef<"div"> & {
  /** Any CSS length. Omit to size to the content. */
  height?: string;
};

/**
 * The base block: a full-width band in the page's vertical stack. Extend it by
 * wrapping it in another component (see WindowImage) and passing props through.
 * Takes any <div> prop, so `id` works as an anchor target.
 */
export function ScrollBlock({
  height,
  className,
  style,
  ...rest
}: ScrollBlockProps) {
  return (
    <div
      {...rest}
      className={className ? `${classes.block} ${className}` : classes.block}
      style={height ? { height, ...style } : style}
    />
  );
}
