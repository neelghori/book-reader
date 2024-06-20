import { FormikHelpers, useFormik } from "formik";
// import { useContext } from "react";
// import { BookContextProvider } from "../Context/BookContext";
import { BookProps } from "../Types/Context/BookReducer";
import { getBookSchema } from "../Schema/LoginRegister";
import { StateModalProps } from "../Types/components/Modal/AddEditDialog";

const useBook = (open: StateModalProps) => {
  //   const { dispatch } = useContext(BookContextProvider);
  console.log("open==>", open);
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publication_year: "",
      genre: "",
    },
    validationSchema: getBookSchema(),
    onSubmit: (values: BookProps, { resetForm }: FormikHelpers<BookProps>) => {
      //   dispatch({
      //     type: "login",
      //     payload: values,
      //   });
      resetForm();
    },
  });
  return {
    formik,
  };
};

export default useBook;
