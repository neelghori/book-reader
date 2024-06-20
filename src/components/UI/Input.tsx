import React from "react";
import { InputProps } from "../../Types/components/UI/Input";

const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      {props.label ? (
        <label
          htmlFor={props.id}
          className={`block text-sm cursor-pointer font-medium leading-6 text-gray-900 ${props.labelClassName}`}
        >
          {props.label}
        </label>
      ) : null}
      <div className="mt-2">
        <input
          {...props}
          className={`block w-full pl-3 rounded-md border-0 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
            props.classNames ?? ""
          } ${
            props.error
              ? "ring-red-600 placeholder:text-red-600"
              : "focus:ring-blue-500"
          }`}
        />
      </div>
      {props?.error && (
        <small className="text-xs text-red-600/75 select-none !font-medium">
          {props.error}
        </small>
      )}
    </div>
  );
};

export default Input;
