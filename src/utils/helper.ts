import { InitialValueProps } from "../Types/Context/BookReducer";

//common function for set LocalStorage data
export const SetLocalStorage = (key: string, data: InitialValueProps) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

//common function for get LocalStorage data
export const getLocalStorageData = (key: string) => {
  const getLocalData = localStorage.getItem(key);
  if (getLocalData) {
    return JSON.parse(localStorage.getItem(key) ?? "");
  } else {
    return null;
  }
};
