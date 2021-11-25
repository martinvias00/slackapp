import * as React from "react";
import { useState, useEffect } from "react";
import { Navigate, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import LoginModal from "./Components/LoginModal";

import { method } from "./ClientSessionHandler";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
function App() {
  const [Client, setClient] = useState(null);
  const [onRegister, setonRegister] = useState(false);
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Login setClient={setClient} setonRegister={setonRegister} />
          }
        ></Route>
        <Route exact path="/home" element={<Home setClient={setClient} />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
