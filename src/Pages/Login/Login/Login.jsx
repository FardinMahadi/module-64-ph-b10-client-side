import bgTexture from "../../../assets/reservation/wood-grain-pattern-gray1x.png";
import authPng from "../../../assets/others/authentication2.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
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
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-white text-black"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
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
                ref={captchaRef}
                name="captcha"
                className="input bg-white text-black"
                placeholder="Type The Captcha Above"
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-2"
              >
                Validate
              </button>

              <input
                type="submit"
                className={`btn btn-primary mt-4 shadow-yellow-500 ${
                  disabled ? "btn-disabled text-gray-400" : "bg-yellow-500"
                }`}
                value="Login"
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
