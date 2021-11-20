import * as React from "react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "../App.css";
import { method } from "../ClientSessionHandler";

import Messages from "../Components/Messages";
import Message2 from "../Components/Message2";
import Search from "../Components/Search";

import { FaSearch } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";

const Home = ({ setClient }) => {
  const navigate = useNavigate();
  const [searchModalOpen, setSearchModalOpen] = useState(true);
  const handleLogout = () => {
    method.rmLocalClient();
    navigate("/", { replace: true });
  };

  return (
    <div className="App">
      <header className="App-header">
        <AiOutlineHistory className="top_nav__Leftsidebar" />
        <span
          className="search"
          onClick={() => {
            setSearchModalOpen(true);
          }}
        >
          <FaSearch id="FaSearch" />
        </span>
        <FiHelpCircle className="top_nav__Rightsidebar" />
      </header>
      <aside className="aside">
        <span className="workspaceWrapper">
          <span className="workspaceName">Workspace</span>
          <HiPencilAlt className="pencilIcon" />
        </span>
        <nav>
          <Link to="/about">{}</Link>
          <nav>
            <Link to="/">Direct Messages</Link>
          </nav>
        </nav>
      </aside>
      <span id="messages">
        <Routes>
          <Route path="/" element={<Messages />} />
          <Route path="about" element={<Message2 />} />
        </Routes>
      </span>
      {searchModalOpen && <Search setOpenSearchModal={setSearchModalOpen} />}
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogout();
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Home;
