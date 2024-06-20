import { HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  heading: "h1" | "h2" | "h3";
  classnames?: string;
}
