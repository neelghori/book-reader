import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNames?: string;
  labelClassName?: string;
  label: string;
  error?: string;
}
