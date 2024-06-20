import { Dispatch } from "react";

export interface InitialValueProps {
  user_data: UserDataProps[];
  book: BookProps[];
  error?: boolean;
  loginUser?: UserDataProps;
}

export interface BookProps {
  title: string;
  author: string;
  publication_year: string;
  genre: string;
}

export interface UserDataProps {
  name?: string;
  email: string;
  password: string;
  token?: string;
}

export enum ReducerActionType {
  REGISTER = "register",
  LOGIN = "login",
  ADDBOOK = "add_book",
  SETINITIALVALUE = "set_initialValue",
}
export type PayloadProps = UserDataProps | BookProps;
export interface BookReducerAction {
  type: ReducerActionType;
  payload?: PayloadProps;
}

export interface BookCreateContextProps {
  state: InitialValueProps;
  dispatch: Dispatch<BookReducerAction>;
}
