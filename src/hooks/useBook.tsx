import { FormikHelpers, useFormik } from "formik";
import { useContext, useEffect } from "react";
import { BookContextProvider } from "../Context/BookContext";
import { BookProps, ReducerActionType } from "../Types/Context/BookReducer";
import { getBookSchema } from "../Schema/LoginRegister";
import { AddEditDialogProps } from "../Types/components/Modal/AddEditDialog";

//common hook for book adding and editing
const useBook = (
  open: AddEditDialogProps["open"],
  setOpen: AddEditDialogProps["setOpen"]
) => {
  const { dispatch } = useContext(BookContextProvider);
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publication_year: "",
      genre: "",
    },
    validationSchema: getBookSchema(),
    onSubmit: (values: BookProps, { resetForm }: FormikHelpers<BookProps>) => {
      if (open?.modal == "Edit") {
        dispatch({
          type: ReducerActionType.EDITBOOK,
          payload: {
            ...values,
          },
        });
      } else {
        dispatch({
          type: ReducerActionType.ADDBOOK,
          payload: {
            ...values,
            id: Date.now().toString(),
          },
        });
      }
      setOpen({
        ...open,
        modalStatus: !open.modalStatus,
        editData: {
          title: "",
          author: "",
          publication_year: "",
          genre: "",
        },
      });
      resetForm();
    },
  });
  useEffect(() => {
    if (open?.modal == "Edit") {
      formik.setValues({
        ...open?.editData,
      });
    }
  }, [open]);
  return {
    formik,
  };
};

export default useBook;
