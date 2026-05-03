import React from "react";
import { Input } from "./input";


interface InputEmailProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  variant: "primary" | "second" | "warning" | "fourth";
}

export const InputEmail: React.FC<InputEmailProps> = (props) => {
  return <Input type="email" {...props} />;
};
