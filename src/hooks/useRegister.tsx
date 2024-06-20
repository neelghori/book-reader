import { FormikHelpers, useFormik } from "formik";
import { useContext } from "react";
import { RegisterValue } from "../Types/Hooks/Register";
import { BookContextProvider } from "../Context/BookContext";
import { ReducerActionType } from "../Types/Context/BookReducer";
import { GetValidationSchema } from "../Schema/LoginRegister";
import { useHistory } from "react-router-dom";
import { getLocalStorageData } from "../utils/helper";
import { AuthContextProvider } from "../Context/AuthContext";

//formik custom hook to manage the login and register in one.
const useLoginRegister = (isLogin: boolean) => {
  const { dispatch } = useContext(BookContextProvider);
  const { setIsAuth } = useContext(AuthContextProvider);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: GetValidationSchema(isLogin ? "login" : "register"),
    onSubmit: (
      values: RegisterValue,
      { resetForm }: FormikHelpers<RegisterValue>
    ) => {
      dispatch({
        type: isLogin ? ReducerActionType.LOGIN : ReducerActionType.REGISTER,
        payload: values,
      });
      resetForm();
      const getRegister = getLocalStorageData("bookData");

      const stateDuplicateForLogin = getRegister
        ? [...getRegister.user_data]
        : [];
      const findUserExist =
        stateDuplicateForLogin &&
        stateDuplicateForLogin.length > 0 &&
        stateDuplicateForLogin.find(
          (ele) => ele.email == values.email && ele.password == values.password
        );
      if (isLogin && findUserExist) {
        setIsAuth(true);
        history.push("/");
      }
    },
  });
  return {
    formik,
  };
};

export default useLoginRegister;
