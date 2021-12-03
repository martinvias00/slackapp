import * as React from "react";
import { useState, useEffect } from "react";
import { Navigate, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Channel from "./Components/Channel";
import ChannelSettings from "./Components/ChannelSettings";
function App() {
  const [Client, setClient] = useState(null);
  const [onRegister, setonRegister] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={NavigateToLogin} />
        <Route
          path="/login"
          exact
          element={
            <Login setClient={setClient} setonRegister={setonRegister} />
          }
        />
        <Route path="/home" exact element={<Home setClient={setClient} />}>
          <Route path=":channelid" element={<Channel />} />
          <Route path=":/settings" element={<ChannelSettings />} />
        </Route>
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App
const NavigateToLogin = <Navigate to="/login" />;
