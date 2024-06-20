import * as Yup from "yup";
export const GetValidationSchema = (key: string) => {
  switch (key) {
    case "login":
      return Yup.object().shape({
        email: Yup.string()
          .trim()
          .email("Invalid Email")
          .required("Please Enter Your Email"),
        password: Yup.string()
          .trim()
          .min(8, "Please Enter Miniumum 8 Character")
          .required("Please Enter Your Password"),
      });
    case "register":
      return Yup.object().shape({
        name: Yup.string().trim().required("Please Enter Your Name"),
        email: Yup.string()
          .trim()
          .email("Invalid Email")
          .required("Please Enter Your Email"),
        password: Yup.string()
          .trim()
          .min(8, "Please Enter Miniumum 8 Character")
          .required("Please Enter Your Password"),
      });
    default:
      return null;
  }
};

export const getBookSchema = () => {
  return Yup.object().shape({
    title: Yup.string().trim().required("Please Enter Book Title"),
    author: Yup.string().trim().required("Please Enter Book Author"),
    publication_year: Yup.string()
      .trim()
      .required("Please Enter Public Year")
      .max(2025),
    genre: Yup.string().trim().required("Please Enter Genre"),
  });
};
