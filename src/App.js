import * as React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home2";
import Channel from "./Components/Channel";
import ChannelSettings from "./Components/ChannelSettings";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={NavigateToLogin} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/home" exact element={<Home />}>
          <Route path=":channelid" element={<Channel />} />
          <Route path=":/settings" element={<ChannelSettings />} />
        </Route>
        <Route path="/home/directmessages" exact element={<Home2 />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
const NavigateToLogin = <Navigate to="/login" />;
