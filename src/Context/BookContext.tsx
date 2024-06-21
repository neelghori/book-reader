import React, { useReducer } from "react";
import ReducerFunction from "./BookReducer";
import {
  BookCreateContextProps,
  BookReducerAction,
  InitialValueProps,
} from "../Types/Context/BookReducer";
import { initialValue } from "../Data/constants";

export const BookContextProvider = React.createContext<BookCreateContextProps>({
  state: initialValue,
  dispatch: () => {},
});

// book context to share the data across whole project
const BookContext: React.FC<{ children: React.ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(
    (state: InitialValueProps, action: BookReducerAction) => {
      return ReducerFunction(state, action);
    },
    initialValue
  );
  return (
    <BookContextProvider.Provider value={{ state, dispatch }}>
      {props.children}
    </BookContextProvider.Provider>
  );
};

export default BookContext;
