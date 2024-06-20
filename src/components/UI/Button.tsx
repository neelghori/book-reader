import React from "react";
import { ButtonProps } from "../../Types/components/UI/Button";

//common button element component
const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
        props.classnames ?? ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
