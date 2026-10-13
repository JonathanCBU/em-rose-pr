import type { ReactNode } from "react";
import { ScrollBlock } from "./ScrollBlock";
import type { ScrollBlockProps } from "./ScrollBlock";
import classes from "./WindowImage.module.css";

export type WindowImageProps = Omit<
  ScrollBlockProps,
  "className" | "height"
> & {
  /** Usually an imported asset, e.g. `import mountains from '@/assets/images/mountains.jpg'`. */
  src: string;
  alt: string;
  caption?: ReactNode;
  /**
   * Minimum height of the window, any CSS length. The window grows if its
   * children are taller. Default 70vh.
   */
  height?: string;
  // `children` (from ScrollBlockProps) is rendered over the image, see below.
};

/**
 * A ScrollBlock that shows a viewport-fixed image through a full-width window.
 * Children are laid over the image and scroll with the page, so they stay put
 * in the window while the image moves behind them.
 */
export function WindowImage({
  src,
  alt,
  caption,
  height = "70vh",
  style,
  children,
  ...rest
}: WindowImageProps) {
  return (
    <ScrollBlock
      {...rest}
      className={classes.window}
      style={{ minHeight: height, ...style }}
    >
      <img className={classes.image} src={src} alt={alt} />
      {children && <div className={classes.content}>{children}</div>}
      {caption && <span className={classes.caption}>{caption}</span>}
    </ScrollBlock>
  );
}
