import bgTexture from "../../../assets/reservation/wood-grain-pattern-gray1x.png";
import authPng from "../../../assets/others/authentication2.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login successfull",
        icon: "success",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div
        className="hero bg-base-200 min-h-screen text-black"
        style={{ backgroundImage: `url(${bgTexture})` }}
      >
        <div className="hero-content flex-col lg:flex-row w-full lg:w-10/12 p-10 shadow-2xl">
          <div className="text-center lg:text-left">
            <img className="w-2/3 mx-auto" src={authPng} />
          </div>
          <div className="card w-full max-w-sm shrink-0">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold text-center">Login</h1>
              <fieldset className="fieldset">
                <label className="fieldset-label text-black font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input bg-white text-black"
                  placeholder="Email"
                />
                <label className="fieldset-label text-black font-bold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input bg-white text-black"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                {/* simple captcha */}
                <label className="fieldset-label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  className="input bg-white text-black"
                  placeholder="Type The Captcha Above"
                />

                <input
                  type="submit"
                  className={`btn btn-primary mt-4 shadow-yellow-500 ${
                    disabled ? "btn-disabled text-gray-400" : "bg-yellow-500"
                  }`}
                  value="Login"
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

            {/* Redirect to Sign In Page */}
            <div className="text-center mt-4">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
