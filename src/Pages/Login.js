import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../Components/Fieldset/Input";
import { method } from "../ClientSessionHandler";
import React from "react";
const axios = require("axios").default;
const URL = process.env.REACT_APP_URL;
const Login = ({ setClient, setonRegister }) => {
  const history = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [userHeaders, setuserHeaders] = useState({
    id: "",
    accessToken: "",
    client: "",
    expiry: "",
    uid: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/api/v1/auth/sign_in`, {
        email: username,
        password: password,
      })
      .then(function (response) {
        const userId = response.data.data.id;
        const accessToken = response.headers["access-token"];
        const { client, expiry, uid } = response.headers;
        const userHeader = {
          id: userId,
          accessToken: accessToken,
          client: client,
          expiry: expiry,
          uid: uid,
        };
        alert(`${client} ${expiry}  ${uid} ${accessToken}`);
        method.setLocalClient(userHeader);
        setClient(method.getLocalClient());
        history("/home", { replace: true });
      })
      .catch(function (error) {
        alert(error.response);
      });
    setusername("");
    setpassword("");
  };

  return (
    <div style={ContainerStyle}>
      <header style={{ height: "100px" }}></header>

      <div style={leftSideContainer}>
        <h1>Slack App</h1>
      </div>

      <div style={LoginContainerStyle}>
        <form style={loginStyle}>
          <Input
            name="Username"
            placeholder="Username"
            value={username}
            setState={setusername}
            type="text"
            errorMessage=""
          />
          <Input
            name="password"
            placeholder="Password"
            value={password}
            setState={setpassword}
            type="password"
            errorMessage=""
          />
          <div style={btnWrapper}>
            <button style={loginBtnStyle} onClick={(e) => handleLogin(e)}>
              Log In
            </button>
            <button
              style={signupBtnStyle}
              onClick={() => history("/register", { replace: true })}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <footer style={{ height: "100px" }}></footer>
    </div>
  );
};
export default Login;
const ContainerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
};
const leftSideContainer = {
  width: "50vw",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const LoginContainerStyle = {
  width: "inherit",
  height: "500px",
  display: "flex",
  alignItems: "center",
  fontFamily: "'Open Sans', sans-serif",
  fontSize: "20px",
};
const loginStyle = {
  margin: "auto",
  padding: "10px",
  borderRadius: "5px",
  background: "#f5f5f5",
  height: "315px",
  width: "396px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const btnWrapper = {
  height: "50%",
  width: "85%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

const signupBtnStyle = {
  paddingTop: "20px",
  border: "none",
  backgroundColor: "transparent",
  resize: "none",
  outline: "none",
  color: "#2d3038",
  fontWeight: "bold",
};
const loginBtnStyle = {
  width: "100%",
  height: "50px",
  borderRadius: "4px",
  backgroundColor: "#2d3038",
  color: "white",
  fontWeight: "bold",
};
