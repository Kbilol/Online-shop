import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outline" | "ghost";
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  children,
  className = "",
  ...props
}) => {
  const base = "rounded-xl transition-all text-[var(--color-text-primary)]";

  const variants = {
    default:
      "bg-[var(--color-card-bg)] border border-[var(--color-card-border)]",

    elevated:
      "bg-[var(--color-card-bg)] border border-[var(--color-card-border)] shadow-lg",

    outline: "bg-transparent border border-[var(--color-card-border)]",

    ghost: "bg-transparent border-none",
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`p-4 border-b border-[var(--color-card-border)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`p-4 border-t border-[var(--color-card-border)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
