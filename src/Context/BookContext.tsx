import React, { useReducer } from "react";
import ReducerFunction, { initialValue } from "./BookReducer";
import {
  BookCreateContextProps,
  BookReducerAction,
  InitialValueProps,
} from "../Types/Context/BookReducer";
import { useHistory } from "react-router-dom";

export const BookContextProvider = React.createContext<BookCreateContextProps>({
  state: initialValue,
  dispatch: () => {},
});

const BookContext: React.FC<{ children: React.ReactNode }> = (props) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(
    (state: InitialValueProps, action: BookReducerAction) => {
      return ReducerFunction(state, action, history);
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
