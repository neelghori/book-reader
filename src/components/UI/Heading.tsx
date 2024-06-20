import React from "react";
import { HeadingProps } from "../../Types/components/UI/Heading";

//common heading element component h1,h2,h3

const Heading: React.FC<HeadingProps> = (props) => {
  switch (props.heading) {
    case "h1":
      return <h1 {...props}>{props.children}</h1>;
    case "h2":
      return (
        <h2
          className={`mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900 ${
            props.classnames ?? ""
          } `}
          {...props}
        >
          {props.children}
        </h2>
      );
    case "h3":
      return <h3 {...props}>{props.children}</h3>;
  }
};

export default Heading;
