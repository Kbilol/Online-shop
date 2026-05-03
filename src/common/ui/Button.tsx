interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "second" | "warning" | "fourth";
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  ...props
}) => {
  const base =
    "text-[var(--button-text)] font-bold py-2 px-4 rounded-lg transition-all hover:cursor-pointer";

  const variants = {
    primary: "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]",

    second: "bg-[var(--color-second)] hover:bg-[var(--color-second-hover)]",

    warning: "bg-[var(--color-warning)] hover:bg-[var(--color-warning-hover)]",

    fourth: "bg-[var(--color-fourth)] hover:bg-[var(--color-fourth-hover)]",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
