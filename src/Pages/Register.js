import { useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import Input from "../Components/Input";
import Loading from "../Components/Loading";
import Success from "../Components/Loading/Success";
import request from "../util/request";

const Register = () => {
  const history = useNavigate();
  const [users] = useState([]);
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirm, setconfirm] = useState("");

  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [complete, setcomplete] = useState(false);
  const [loading, setloading] = useState(false);
  function handleSubmit() {
    const old = users;
    const newAccount = {
      email: email,
      password: Password,
      password_confirmation: confirm,
    };
    if (!ifError(newAccount)) {
      setloading(true);
      old.push(newAccount);
      console.log(newAccount);
      const params = {
        path: "/api/v1/auth/",
        data: newAccount,
      };
      request
        .register(params)
        .then(function (response) {
          setloading(false);
          setcomplete(true);
        })
        .catch(function (error) {
          setloading(false);
          alert(`Error: ${error.response.data.errors.full_messages}`);
        });

      setemail("");
      setPassword("");
      setconfirm("");

      setTimeout(() => {
        setcomplete(false);
        history("/", { replace: true });
      }, 1000);
    }
  }
  const ifError = ({ email }) => {
    let errorcount = 0;
    if (email === "") {
      setemailError("! Enter email address");
      errorcount++;
    } else if (users.find((user) => user.email === email)) {
      setemailError("! That email is taken. Try another.");
      errorcount++;
    } else if (/[!#$%^&*()_+]+/.test(email)) {
      setemailError(
        "! Sorry, only letters(a-z), numbers(0-9),and perids(.)are allowed."
      );
      errorcount++;
    } else {
      setemailError("");
    }
    if (Password !== confirm) {
      setpasswordError("! Those passwords didn’t match. Try again.");
      errorcount++;
    } else if (Password === "" || confirm === "") {
      setpasswordError("! Enter password");
      errorcount++;
    } else {
      setpasswordError("");
    }
    if (errorcount > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="mx-auto container flex items-center " id="nav">
      <div className="mx-auto md:p-6 md:w-1/2">
        <main className="w-full pt-2 p-4 ">
          <div className="flex flex-col justify-center ">
            <h1 className="text-2xl text-gray-700 font-semibold transition duration-500 p-4 flex justify-center">
              <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
              Create your Account
            </h1>
          </div>

          <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            {loading ? <Loading /> : null}
            {complete ? <Success /> : null}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <Input
                name="Email"
                type="email"
                placeholder="Email"
                setState={setemail}
                errormessage={emailError}
                icon={<AiOutlineUser />}
              />

              <Input
                name="Password"
                type="password"
                placeholder="Password"
                setState={setPassword}
                errormessage={passwordError}
                icon={<RiLockPasswordLine />}
              />
              <Input
                name="Confirm"
                type="password"
                placeholder="Confirm"
                setState={setconfirm}
                errormessage={passwordError}
                icon={<RiLockPasswordLine />}
              />

              <div className="mb-8 text-center bg-gray-500 flex hover:bg-gray-700 ">
                <button
                  className=" text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Create
                </button>
              </div>
              <hr />
              <div className="mt-8 flex">
                <button
                  className="font-bold text-sm text-gray-700 hover:text-gray-800 cursor-pointer"
                  onClick={() => history("/", { replace: true })}
                >
                  Sign in instead
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Register;
