interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "second" | "warning" | "fourth";
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  ...props
}) => {
  const base =
    "relative overflow-hidden text-[var(--button-text)] font-semibold py-2.5 px-5 rounded-2xl transition-all duration-300 hover:cursor-pointer active:scale-95 hover:scale-105 shadow-md hover:shadow-xl backdrop-blur-md";

  const variants = {
    primary:
      "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]",

    second:
      "bg-[var(--color-second)] hover:bg-[var(--color-second-hover)]",

    warning:
      "bg-[var(--color-warning)] hover:bg-[var(--color-warning-hover)]",

    fourth:
      "bg-[var(--color-fourth)] hover:bg-[var(--color-fourth-hover)]",
  };

  return (
    <button
      className={`${base} ${variants[variant]}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10" />

      
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
    </button>
  );
};