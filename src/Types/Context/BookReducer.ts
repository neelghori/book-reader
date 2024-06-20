import { Dispatch } from "react";

export interface InitialValueProps {
  user_data: UserDataProps[];
  book: BookProps[];
  error?: boolean;
  loginUser?: UserDataProps;
  isAuth?: boolean;
}

export interface BookProps {
  title: string;
  author: string;
  publication_year: string;
  genre: string;
  id?: string;
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
  EDITBOOK = "edit_book",
  DELETEBOOK = "delete_book",
  SETINITIALVALUE = "set_initialValue",
  GETLISTDATA = "get_list_data",
  SETLISTDATA = "set_local_data",
  SORTTABLEDATA = "sort_local_data",
  LOGOUT = "logout",
}
export type PayloadProps = UserDataProps | BookProps | SortbyProps;
export interface BookReducerAction {
  type: ReducerActionType;
  payload?: PayloadProps;
}

export interface SortbyProps {
  field: string;
  orderbyAsc: string;
}

export interface BookCreateContextProps {
  state: InitialValueProps;
  dispatch: Dispatch<BookReducerAction>;
}
