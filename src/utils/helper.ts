import { InitialValueProps } from "../Types/Context/BookReducer";

export const SetLocalStorage = (key: string, data: InitialValueProps) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorageData = (key: string) => {
  const getLocalData = localStorage.getItem(key);
  if (getLocalData) {
    return JSON.parse(localStorage.getItem(key) ?? "");
  } else {
    return null;
  }
};
