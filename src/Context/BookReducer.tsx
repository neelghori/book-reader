/* eslint-disable no-case-declarations */
import { toast } from "sonner";
import {
  BookReducerAction,
  InitialValueProps,
  ReducerActionType,
  UserDataProps,
} from "../Types/Context/BookReducer";

import { SetLocalStorage, getLocalStorageData } from "../utils/helper";

export const initialValue: InitialValueProps = {
  user_data: [
    {
      name: "",
      email: "",
      password: "",
      token: "",
    },
  ],
  error: false,
  book: [
    {
      title: "",
      author: "",
      publication_year: "",
      genre: "",
    },
  ],
};

const ReducerFunction = (
  state: InitialValueProps,
  action: BookReducerAction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  history: any
): InitialValueProps => {
  const { type, payload } = action;
  switch (type) {
    case ReducerActionType.REGISTER:
      const getRegister = getLocalStorageData("bookData");
      const stateDuplicate = getRegister ? [...getRegister.user_data] : [];
      const isExist =
        stateDuplicate &&
        stateDuplicate.length > 0 &&
        stateDuplicate.find(
          (ele) => ele.email == (payload as UserDataProps).email
        );
      if (isExist) {
        toast.error("Email Already Exist in System");
        SetLocalStorage("bookData", state);
        return state;
      }
      stateDuplicate.push(payload as UserDataProps);
      state.user_data = stateDuplicate;
      SetLocalStorage("bookData", state);
      toast.success("Account Created SuccessFully");
      history.push("/login");
      return state;
    case ReducerActionType.LOGIN:
      const getLocalData = getLocalStorageData("bookData");
      const stateDuplicateForLogin = getLocalData
        ? [...getLocalData.user_data]
        : [];
      const findUserExist =
        stateDuplicateForLogin &&
        stateDuplicateForLogin.length > 0 &&
        stateDuplicateForLogin.find(
          (ele) =>
            ele.email == (payload as UserDataProps).email &&
            ele.password == (payload as UserDataProps).password
        );
      if (!findUserExist) {
        toast.error("Invalid Email or Password");
        SetLocalStorage("bookData", state);
        return state;
      }
      state.loginUser = payload as UserDataProps;
      SetLocalStorage("bookData", state);
      toast.success("Login Success");
      history.push("/");
      return state;

    case ReducerActionType.SETINITIALVALUE:
      return initialValue;
    default:
      return state;
  }
};

export default ReducerFunction;
