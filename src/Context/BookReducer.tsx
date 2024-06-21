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
import { initialValue } from "../Data/constants";

//initialvalue for context api

//reducer function for handling all login,register,adding book,editbook,delete book,setting initialvalue
const ReducerFunction = (
  state: InitialValueProps,
  action: BookReducerAction
): InitialValueProps => {
  const { type, payload } = action;
  const getRegister = getLocalStorageData("bookData");

  switch (type) {
    //user register case
    case ReducerActionType.REGISTER:
      const stateDuplicate =
        getRegister && getRegister?.user_data ? [...getRegister.user_data] : [];
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
      return state;

    //user login case
    case ReducerActionType.LOGIN:
      const stateDuplicateForLogin = getRegister
        ? [...getRegister.user_data]
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
        toast.error("Invalid Email or Password / Create a new Account");
        state = {
          ...getRegister,
        };
        SetLocalStorage("bookData", state);
        return state;
      }
      state = {
        ...state,
        user_data: getRegister?.user_data,
        loginUser: payload as UserDataProps,
        isAuth: true,
      };
      SetLocalStorage("bookData", state);
      toast.success("Login Success");
      return state;

    //set initialValue in state
    case ReducerActionType.SETINITIALVALUE:
      state = initialValue;
      return state;

    //Add book in state and localstorage
    case ReducerActionType.ADDBOOK:
      const DuplicateArray = getRegister ? [...getRegister.book] : [];
      DuplicateArray.push(payload);
      state = {
        ...state,
        book: DuplicateArray.sort((a, b) => b.id - a.id),
      };
      SetLocalStorage("bookData", state);
      return state;

    //Add Editbook in state and localstorage
    case ReducerActionType.EDITBOOK:
      const DuplicatEditBookData = getRegister ? [...getRegister.book] : [];
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
          book: editbookData.sort((a, b) => b.id - a.id),
        };
        SetLocalStorage("bookData", state);
        return state;
      }
      return state;

    //Delete book in state and localstorage
    case ReducerActionType.DELETEBOOK:
      const DuplicatDeletebook = getRegister ? [...getRegister.book] : [];
      state = {
        ...state,
        book: DuplicatDeletebook.filter(
          (ele) => ele.id !== (payload as BookProps).id
        ).sort((a, b) => b.id - a.id),
      };
      SetLocalStorage("bookData", state);
      return state;

    //Get List data from localstorage
    case ReducerActionType.GETLISTDATA:
      state = getRegister
        ? getRegister && getRegister?.book?.length > 0
          ? {
              ...getRegister,
              book: getRegister.book.sort(
                (a: { [x: string]: number }, b: { [x: string]: number }) =>
                  b.id - a.id
              ),
            }
          : initialValue
        : initialValue;
      return state;

    //Set List book in localstorage
    case ReducerActionType.SETLISTDATA:
      SetLocalStorage("bookData", state);
      return state;

    //Sort field wise table logic
    case ReducerActionType.SORTTABLEDATA:
      state = {
        ...state,
        book:
          getRegister?.book && getRegister?.book.length > 0
            ? getRegister?.book.sort(
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

    //Logout User
    case ReducerActionType.LOGOUT:
      state = {
        ...state,
        isAuth: false,
        loginUser: initialValue.user_data[0],
      };
      SetLocalStorage("bookData", state);
      return state;
    default:
      return state;
  }
};

export default ReducerFunction;
