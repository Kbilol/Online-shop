import { cn } from '@common/libs/cn';
import React from 'react';
import { COLS_MAP, GAP_MAP, LG_COLS_MAP, MD_COLS_MAP } from './variants';





type GridProps<T extends React.ElementType> = {
  as?: T;
  cols?: keyof typeof COLS_MAP;
  md?: keyof typeof MD_COLS_MAP;
  lg?: keyof typeof LG_COLS_MAP;
  gap?: keyof typeof GAP_MAP;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export const Grid = <T extends React.ElementType = 'div'>({
  as,
  cols = 1, 
  md,
  lg,
  gap = 6,  
  className,
  children,
  ...props
}: GridProps<T>) => {
  const Component = as || 'div';

  return (
    <Component
      className={cn(
        'grid',
        COLS_MAP[cols],
        md && MD_COLS_MAP[md],
        lg && LG_COLS_MAP[lg],
        GAP_MAP[gap],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
