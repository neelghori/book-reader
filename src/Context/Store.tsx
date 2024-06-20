import React from "react";
import BookContext from "./BookContext";
import AuthContext from "./AuthContext";

// common store for context api
const Store: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <AuthContext>
      <BookContext>{props.children}</BookContext>
    </AuthContext>
  );
};

export default Store;
