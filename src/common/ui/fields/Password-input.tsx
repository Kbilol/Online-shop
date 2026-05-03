import React, { useState } from "react";

import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { Input } from "./input";

interface InputPasswordProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  variant: "primary" | "second" | "warning" | "fourth";
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  variant,
  ...props
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        type={show ? "text" : "password"}
        variant={variant}
        {...props}
        className={`pr-10 ${props.className || ""}`}
      />

      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-300 hover:text-white"
      >
        {show ? <EyeClosedIcon/> : <EyeIcon/>}
      </button>
    </div>
  );
};
