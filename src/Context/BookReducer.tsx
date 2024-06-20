/* eslint-disable no-case-declarations */
import { toast } from "sonner";
import {
  BookProps,
  BookReducerAction,
  InitialValueProps,
  ReducerActionType,
  SortbyProps,
  UserDataProps,
} from "../Types/Context/BookReducer";

import { SetLocalStorage, getLocalStorageData } from "../utils/helper";
import { DummyBookData } from "../Data/constants";

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
  book: DummyBookData,
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
      state = {
        ...state,
        user_data: stateDuplicate,
      };
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
      state = {
        ...state,
        loginUser: payload as UserDataProps,
      };
      SetLocalStorage("bookData", state);
      toast.success("Login Success");
      history.push("/");
      return state;

    case ReducerActionType.SETINITIALVALUE:
      return initialValue;
    case ReducerActionType.ADDBOOK:
      const bookDataLocal = getLocalStorageData("bookData");
      const DuplicateArray = bookDataLocal ? [...bookDataLocal.book] : [];
      DuplicateArray.push(payload);
      state = {
        ...state,
        book: DuplicateArray.sort((a, b) => b.id - a.id),
      };
      SetLocalStorage("bookData", state);
      return state;
    case ReducerActionType.EDITBOOK:
      const bookEditDataLocal = getLocalStorageData("bookData");
      const DuplicatEditBookData = bookEditDataLocal
        ? [...bookEditDataLocal.book]
        : [];
      const FindThatExist =
        DuplicatEditBookData &&
        DuplicatEditBookData.length > 0 &&
        DuplicatEditBookData.find((ele) => ele.id == (payload as BookProps).id);
      if (FindThatExist) {
        const editbookData = DuplicatEditBookData.map((element) => {
          if (element.id == (payload as BookProps).id) {
            return {
              ...payload,
            };
          } else {
            return element;
          }
        });
        state = {
          ...state,
          book: editbookData,
        };
        SetLocalStorage("bookData", state);
        return state;
      }
      return state;
    case ReducerActionType.DELETEBOOK:
      const bookDeleteLocal = getLocalStorageData("bookData");
      const DuplicatDeletebook = bookDeleteLocal
        ? [...bookDeleteLocal.book]
        : [];
      state = {
        ...state,
        book: DuplicatDeletebook.filter(
          (ele) => ele.id !== (payload as BookProps).id
        ),
      };
      SetLocalStorage("bookData", state);
      return state;
    case ReducerActionType.GETLISTDATA:
      const getLocalStorages = getLocalStorageData("bookData");
      state = getLocalStorages
        ? getLocalStorages && getLocalStorages?.book?.length > 0
          ? {
              ...getLocalStorages,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              book: getLocalStorages.book.sort((a: any, b: any) => b.id - a.id),
            }
          : initialValue
        : initialValue;
      return state;
    case ReducerActionType.SETLISTDATA:
      SetLocalStorage("bookData", state);
      return state;
    case ReducerActionType.SORTTABLEDATA:
      const getSortLocalData = getLocalStorageData("bookData");
      state = {
        ...state,
        book:
          getSortLocalData?.book && getSortLocalData?.book.length > 0
            ? getSortLocalData?.book.sort(
                (a: { [x: string]: number }, b: { [x: string]: number }) => {
                  if ((payload as SortbyProps)?.orderbyAsc == "desc") {
                    return a[`${(payload as SortbyProps)?.field}`] <
                      b[`${(payload as SortbyProps)?.field}`]
                      ? -1
                      : a[`${(payload as SortbyProps)?.field}`] >
                        b[`${(payload as SortbyProps)?.field}`]
                      ? 1
                      : 0;
                  } else if ((payload as SortbyProps)?.orderbyAsc == "asc") {
                    return a[`${(payload as SortbyProps)?.field}`] >
                      b[`${(payload as SortbyProps)?.field}`]
                      ? -1
                      : a[`${(payload as SortbyProps)?.field}`] <
                        b[`${(payload as SortbyProps)?.field}`]
                      ? 1
                      : 0;
                  }
                  return 0;
                }
              )
            : initialValue,
      };
      SetLocalStorage("bookData", state);
      return state;
    case ReducerActionType.LOGOUT:
      state.loginUser = initialValue.user_data[0];
      SetLocalStorage("bookData", state);
      return state;
    default:
      return state;
  }
};

export default ReducerFunction;
