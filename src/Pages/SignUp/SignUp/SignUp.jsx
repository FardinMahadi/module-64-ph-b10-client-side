import bgTexture from "../../../assets/reservation/wood-grain-pattern-gray1x.png";
import authPng from "../../../assets/others/authentication2.png";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ExtraAuth from "../../../components/ExtraAuth/ExtraAuth";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            photoURL: data.photoURL,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User profile updated",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
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
                  Photo URL
                </label>
                <input
                  type="text"
                  {...register("photoURL")}
                  name="photoURL"
                  className="input bg-white text-black"
                  placeholder="Type your photo URL"
                />

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

            <ExtraAuth></ExtraAuth>

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
