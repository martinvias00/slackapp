import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import Input from "../Components/Input";
import ErrorMessage from "../Components/Alerts/ErrorMessage";

import request from "../util/request";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorUsername, seterrorUsername] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [IsError, setIsError] = useState(null);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      path: "/api/v1/auth/sign_in",
      data: {
        email: username,
        password: password,
      },
    };
    if (username === "") {
      seterrorUsername("! Username is required");
      if (password !== "") {
        seterrorPassword("");
      }
    } else {
      seterrorUsername("");
      if (password === "") {
        seterrorPassword("! Password is required");
      } else {
        seterrorPassword("");
        request
          .login(params)
          .then((response) => {
            if (response.status < 201) {
              nav("/home", { replace: true });
            }
          })
          .catch((error) => {
            setIsError(error.response.data.errors);
          });
      }
    }
  };
  return (
    <div className="mx-auto container flex items-center " id="nav">
      <div className="mx-auto md:p-6 md:w-1/2">
        <div className="w-full pt-2 p-4 ">
          <div className="flex flex-col justify-center ">
            <h1 className="text-2xl text-gray-700 font-semibold transition duration-500 p-4 flex justify-center">
              <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
              Sign in
            </h1>
            <h2 className="text-1xl text-gray-700 transition duration-500 flex justify-center">
              Enter your Email and Password
            </h2>
          </div>

          <div className=" rounded px-8 pt-6 pb-8 mb-4 ">
            <form onSubmit={handleSubmit}>
              <Input
                name="Username"
                icon={<AiOutlineUser />}
                errormessage={errorUsername}
                placeholder="you@example.com"
                setState={setusername}
                type="email"
                isRequired={true}
              />
              <Input
                name="Password"
                icon={<RiLockPasswordLine />}
                setState={setpassword}
                type="password"
                errormessage={errorPassword}
              />
              {IsError && <ErrorMessage title={"Error!"} message={IsError} />}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <label
                      className="block text-gray-500 font-bold"
                      for="remember"
                    >
                      <input
                        className="ml-2 leading-tight"
                        type="checkbox"
                        id="remember"
                        name="remember"
                      ></input>
                      <span className="text-sm">remember me</span>
                    </label>
                  </div>
                  <div>
                    <a className="font-bold text-sm text-gray-700 hover:text-gray-800">
                      forgot password
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8 text-center bg-gray-500 flex hover:bg-gray-700 ">
                <button
                  className="text-lg text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
              <hr />
              <div className="mt-8 flex">
                <p className="text-sm pr-4">No account</p>
                <a
                  className="font-bold text-sm text-gray-700 hover:text-gray-800 cursor-pointer"
                  onClick={() => nav("/register", { replace: true })}
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
