import React from "react";
import { ALIGN_MAP, GAP_MAP, JUSTIFY_MAP } from "./variants";
import { cn } from "@common/libs/cn";

type StackProps<T extends React.ElementType> = {
  as?: T;
  gap?: keyof typeof GAP_MAP;
  align?: keyof typeof ALIGN_MAP;
  justify?: keyof typeof JUSTIFY_MAP;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Stack = <T extends React.ElementType = "div">({
  as,
  gap = 4,
  align = "stretch",
  justify = "start",
  className,
  children,
  ...props
}: StackProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        "flex flex-col",
        GAP_MAP[gap],
        ALIGN_MAP[align],
        JUSTIFY_MAP[justify],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
