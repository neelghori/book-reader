import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classnames?: string;
  labelClassName?: string;
  label: string;
  touched?: boolean;
  error?: string;
}
