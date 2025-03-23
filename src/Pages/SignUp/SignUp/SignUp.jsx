import bgTexture from "../../../assets/reservation/wood-grain-pattern-gray1x.png";
import authPng from "../../../assets/others/authentication2.png";

import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div
        className="hero bg-base-200 min-h-screen text-black md:py-20"
        style={{ backgroundImage: `url(${bgTexture})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-10/12 p-10 shadow-2xl">
          <div className="text-center lg:text-left">
            <img className="w-2/3 mx-auto" src={authPng} alt="Authentication" />
          </div>
          <div className="card w-full max-w-sm shrink-0">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold text-center">Sign Up</h1>
              <fieldset className="fieldset">
                <label className="fieldset-label text-black font-bold">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  className="input bg-white text-black"
                  placeholder="Type your name"
                />
                {errors.name && (
                  <span className="text-red-500">Name required</span>
                )}

                <label className="fieldset-label text-black font-bold">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  className="input bg-white text-black"
                  placeholder="Type your email"
                />
                {errors.email && (
                  <span className="text-red-500">Email required</span>
                )}

                <label className="fieldset-label text-black font-bold">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    maxLength: {
                      value: 32,
                      message: "Password cannot exceed 32 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
                    },
                  })}
                  name="password"
                  className="input bg-white text-black"
                  placeholder="Enter your password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input
                  type="submit"
                  className={`btn btn-primary mt-4 shadow-yellow-500 bg-yellow-500`}
                  value="Sign Up"
                />
              </fieldset>
            </form>

            <div className="grid gap-2 grid-cols-3 w-11/12 mx-auto">
              {/* Google */}
              <button className="btn bg-white text-black border-[#e5e5e5] ">
                <FcGoogle />
              </button>

              {/* Facebook */}
              <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                <FaFacebookF />
              </button>

              {/* GitHub */}
              <button className="btn bg-black text-white border-black">
                <FaGithub />
              </button>
            </div>

            {/* Redirect to Login Page */}
            <div className="text-center mt-4">
              <p>
                Already registered?{" "}
                <Link to="/login" className="text-blue-500 underline">
                  Go to log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
