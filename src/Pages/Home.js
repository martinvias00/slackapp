import * as React from "react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "../App.css";
import { method } from "../ClientSessionHandler";
import { axios } from "axios";

import Messages from "../Components/Messages";
import Search from "../Components/Search";
import DirectMessages from "../Components/DirectMessages/DirectMessages";

import Channel from "../Components/Channel";
import { FaSearch } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";

const Home = ({ setClient }) => {
  const navigate = useNavigate();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const handleLogout = () => {
    method.rmLocalClient();
    navigate("/", { replace: true });
  };

  const [messages, setmessages] = useState([]);
  const user = JSON.parse(localStorage.getItem("newUser"));
  const [messagetobesend, setmessagetobesend] = useState("");
  const [channelName, setchannelName] = useState("");
  const [listOfMember, setlistOfMember] = useState("");
  const [channel, setchannel] = useState([]);
  const [isSuccess, setisSuccess] = useState(0);

  const handleClickOnchannel = (e) => {
    e.preventDefault();
    // URL: {{url}}/api/v1
    (async () => {
      const rawResponse = await fetch(`${URL}/api/v1/channels`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access-token": user.token,
          client: user.client,
          expiry: user.expiry,
          uid: user.uid,
        },
        body: JSON.stringify({
          name: channelName,
          user_ids: [listOfMember.split(",")],
        }),
      });
      const content = await rawResponse.json();

      console.log(content);
    })();
    // renderChannels();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      user = JSON.parse(localStorage.getItem("newUser"));
    } else {
      console.log(user, messagetobesend);
      console.log(typeof user.token);
      (async () => {
        const rawResponse = await fetch(`${URL}/api/v1/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "access-token": user.token,
            client: user.client,
            expiry: user.expiry,
            uid: user.uid,
          },
          body: JSON.stringify({
            receiver_id: 3,
            receiver_class: "User",
            body: messagetobesend,
          }),
        });
        const content = await rawResponse.json();
      })();
    }
  };
  const handleResponse = (data) => {
    const shows = data.map((item) => ({ id: item.id, name: item.name }));
    console.log(data);
    setchannel(shows);
  };
  const renderChannels = () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        "access-token": user.token,
        client: user.client,
        expiry: user.expiry,
        uid: user.uid,
      },
    };

    axios
      .get(`${URL}/api/v1/channels`, options)
      .then((response) => {
        console.log(response.status);
        setisSuccess(response.status);

        handleResponse(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
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
        <DirectMessages/>
      </aside>
      <span id="messages">
        <Routes>
          <Route path="/" element={<Messages />} />
        </Routes>
      </span>
      {searchModalOpen && <Search setOpenSearchModal={setSearchModalOpen} />}

      {/* render user channels */}
      {/* {console.log(isSuccess)}
      {isSuccess === 200
        ? channel.map((chan) => (
            <Channel name={chan.name} channelid={chan.id} />
          ))
         /*: renderChannels()} */}

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
