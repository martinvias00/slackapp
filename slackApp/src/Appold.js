import * as React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import Messages from "./Components/Messages";
import Message2 from "./Components/Message2";
import Search from "./Components/Search"

import {FaSearch} from "react-icons/fa"
import {AiOutlineHistory} from "react-icons/ai"
import {FiHelpCircle} from "react-icons/fi"
import {HiPencilAlt} from "react-icons/hi"
import LoginModal from "./Components/Login";


function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(true);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <AiOutlineHistory className="top_nav__Leftsidebar"/>
        <span className="search" onClick={()=>{ setSearchModalOpen(true)}} >
          <FaSearch id="FaSearch"/>
        </span>
        <FiHelpCircle className="top_nav__Rightsidebar"/>
      </header>
      <aside className="aside">
        <span className="workspaceWrapper"> 
          <span className="workspaceName">Workspace</span> 
          <HiPencilAlt className="pencilIcon"/>
        </span>
        <nav>
          <Link to="/about">Channels</Link>
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

      {loginModalOpen && <LoginModal setOpenLoginModal={setLoginModalOpen} />}
      {searchModalOpen && <Search setOpenSearchModal={setSearchModalOpen} />}
    </div>
  );
}

export default App;
