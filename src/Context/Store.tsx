import React from "react";
import BookContext from "./BookContext";

const Store: React.FC<{ children: React.ReactNode }> = (props) => {
  return <BookContext>{props.children}</BookContext>;
};

export default Store;
