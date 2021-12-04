import * as React from "react";
import { useState, useEffect } from "react";
import "../App.css";

import Search from "../Components/Search";
import DirectMessages from "../Components/DirectMessages/DirectMessages";

import { FaSearch } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Home2 = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const nav = useNavigate();
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

        <details
          onClick={() => {
            nav("/home", { replace: true });
          }}
          className="flex justify-center text-left pl-2 text-white cursor-pointer ml-3"
        >
          <summary className="">Channels</summary>
          <p></p>
        </details>

        <DirectMessages />
      </aside>

      {searchModalOpen && <Search setOpenSearchModal={setSearchModalOpen} />}
    </div>
  );
};

export default Home2;
