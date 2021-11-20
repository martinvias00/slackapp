import { useState } from "react";
import { useNavigate } from "react-router";

import Input from "../Components/Fieldset/Input";
import Loading from "../Components/Loadingscreen/Loading";
import Success from "../Components/Loadingscreen/Success";

const axios = require("axios").default;
const URL = process.env.React_App_URL;

const Register = ({ onRegister, setonRegister }) => {
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
      axios
        .post(`${URL}/auth/`, newAccount)
        .then(function (response) {
          console.log(response);
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
    <div style={registerContainer}>
      <main style={mainContainer}>
        <h1 style={formHeader}>Create your Account</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          style={formStyle}
        >
          {loading ? <Loading /> : null}
          {complete ? <Success /> : null}
          <Input
            name="Email"
            type="email"
            placeholder="Email"
            value={email}
            setState={setemail}
            inputStyle={{ width: "430px", height: "30px" }}
            errorMessage={emailError}
          />

          <Input
            name="Password"
            type="password"
            placeholder="Password"
            value={Password}
            setState={setPassword}
            errorMessage={passwordError}
          />
          <Input
            name="Confirm"
            type="password"
            placeholder="Confirm"
            value={confirm}
            setState={setconfirm}
            errorMessage={passwordError}
          />

          <div style={actionBtnWrappers}>
            <button
              style={signInWrapper}
              onClick={() => history("/", { replace: true })}
            >
              Sign in instead
            </button>

            <button type="submit" style={buttonSubmitStyle}>
              Create
            </button>
          </div>
        </form>
      </main>
      <footer
        style={{ width: "430px", display: "flex", justifyContent: "center" }}
      >
        <h5 style={{ flex: 1, textAlign: "left" }}>English</h5>
        <ul
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <li style={liFooterStyle}>Help</li>
          <li style={liFooterStyle}>Privacy</li>
          <li style={liFooterStyle}>Terms</li>
        </ul>
      </footer>
    </div>
  );
};

export default Register;
const liFooterStyle = {
  listStyleType: "none",
};
const registerContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const mainContainer = {
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "1px gray solid",
  borderRadius: "20px",
  padding: "20px",
};
const formHeader = {
  paddingBottom: "10px",
  textAlign: "center",
};
const formStyle = {
  width: "430px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const actionBtnWrappers = {
  width: "100%",
  display: "flex",
  alignItems: "center",
};
const buttonSubmitStyle = {
  width: "130px",
  height: "35px",
  borderRadius: "4px",
  backgroundColor: "#2d3038",
  color: "white",
  fontWeight: "bold",
  marginleft: "20px",
};

const signInWrapper = {
  width: "50%",
  border: "none",
  backgroundColor: "transparent",
  resize: "none",
  outline: "none",
  color: "#2d3038",
  fontWeight: "bold",
};
