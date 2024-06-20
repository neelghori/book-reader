import Input from "../UI/Input";
import Button from "../UI/Button";
import CommonImageSidebar from "../CommonImageSidebar/CommonImageSidebar";
import Heading from "../UI/Heading";
import useLoginRegister from "../../hooks/useRegister";
import { Link } from "react-router-dom";

const Register = () => {
  const { formik } = useLoginRegister(false);
  const { handleChange, handleSubmit, values, errors } = formik;

  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Heading heading="h2">Create New Account</Heading>
          </div>
          <div className="mt-8">
            <div>
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <Input
                  type="text"
                  label="Name"
                  id="name"
                  placeholder="Enter Your Name"
                  onChange={handleChange}
                  value={values.name}
                  error={errors.name}
                />
                <Input
                  type="text"
                  label="Email address"
                  id="email"
                  placeholder="Enter Your Email Address"
                  onChange={handleChange}
                  value={values.email}
                  error={errors.email}
                />
                <Input
                  type="password"
                  label="Password"
                  id="password"
                  placeholder="Enter your Password"
                  onChange={handleChange}
                  value={values.password}
                  error={errors.password}
                />
                <div>
                  <Link to="/login">
                    <p className="text-sm font-medium text-blue-500 text-right">
                      Log In?
                    </p>
                  </Link>
                </div>
                <div>
                  <Button type="submit">Create Account</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CommonImageSidebar />
    </div>
  );
};

export default Register;
