import React from "react";
import { cn } from "@/utils/cn";

export interface TextProps {
  type?: "title" | "subtitle" | "body";
  label: React.ReactNode;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Text({ as = "p", type, label, ...props }: TextProps) {
  return React.createElement(
    as,
    {
      className: cn("storybook-text", `storybook-text--${type}`),
      ...props,
    },
    label
  );
}
