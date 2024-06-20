import { Link } from "react-router-dom";
import useLoginRegister from "../../hooks/useRegister";
import CommonImageSidebar from "../CommonImageSidebar/CommonImageSidebar";
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import Input from "../UI/Input";
import Logo from "../UI/Logo";

export default function LoginComp() {
  const { formik } = useLoginRegister(true);
  const { handleBlur, handleChange, handleSubmit, touched, values, errors } =
    formik;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <Logo />
            <div>
              <Heading heading="h2">Log In</Heading>
            </div>

            <div className="mt-8">
              <div>
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="space-y-6"
                >
                  <Input
                    type="text"
                    label="Email address"
                    id="email"
                    onChange={handleChange}
                    value={values?.email}
                    error={errors.email}
                    onBlur={handleBlur}
                    touched={touched.email}
                  />
                  <Input
                    type="password"
                    label="Password"
                    id="password"
                    onChange={handleChange}
                    value={values?.password}
                    error={errors.password}
                    onBlur={handleBlur}
                    touched={touched.password}
                  />
                  <div>
                    <Link to="/register">
                      <p className="text-sm font-medium text-blue-500 text-right">
                        Create a Account?
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Button type="submit">Log In</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <CommonImageSidebar />
      </div>
    </>
  );
}
