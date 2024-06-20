import { FormikHelpers, useFormik } from "formik";
import { useContext } from "react";
import { RegisterValue } from "../Types/Hooks/Register";
import { BookContextProvider } from "../Context/BookContext";
import { ReducerActionType } from "../Types/Context/BookReducer";
import { GetValidationSchema } from "../Schema/LoginRegister";

const useLoginRegister = (isLogin: boolean) => {
  const { dispatch } = useContext(BookContextProvider);
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
    },
  });
  return {
    formik,
  };
};

export default useLoginRegister;
