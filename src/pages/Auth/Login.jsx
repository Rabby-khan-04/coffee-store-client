import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const { loginUser } = useContext(AuthContext);

  const handleLoginUser = async (data) => {
    try {
      const email = data.email;
      const password = data.password;
      const loggedInUser = await loginUser(email, password);

      const updatedUser = {
        email: loggedInUser.user.email,
        lastSignInTime: loggedInUser.user?.metadata?.lastSignInTime,
      };

      const response = await axios.patch("/api/v1/users/user", updatedUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-32">
      <div className="">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-12 font-rancho text-dark_sienna text__shadow">
            Login now!
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-3xl mx-auto shrink-0 shadow-2xl">
          <form
            onSubmit={handleSubmit(handleLoginUser)}
            className="card-body space-y-6"
          >
            <div className="w-full space-y-4">
              <label className="input__label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input input-bordered block w-full"
                placeholder="Enter email address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 text-base font-raleway inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full space-y-4">
              <label className="input__label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input input-bordered block w-full"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600 text-base font-raleway inline-block">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="submit__btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
