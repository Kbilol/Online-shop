import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "primary" | "second" | "warning" | "fourth";
}

export const Input: React.FC<InputProps> = ({ variant, ...props }) => {
  const base =
    "w-full py-2 px-4 rounded-lg transition-all outline-none border text-sm";

  const variants = {
    primary:
      "bg-blue-500/10 border-blue-500 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300",
    second:
      "bg-gray-500/10 border-gray-500 focus:ring-2 focus:ring-gray-400 text-white placeholder-gray-300",
    warning:
      "bg-yellow-500/10 border-yellow-500 focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300",
    fourth:
      "bg-pink-500/10 border-pink-500 focus:ring-2 focus:ring-pink-400 text-white placeholder-gray-300",
  };

  const className = `${base} ${variants[variant]}`;

  return <input className={className} {...props} />;
};
