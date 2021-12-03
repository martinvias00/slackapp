import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";

import Messages from "../Components/Messages";
import Search from "../Components/Search";
import DirectMessages from "../Components/DirectMessages/DirectMessages";

import Channel from "../Components/Channel";
import AddChannel from "../Components/Channel/AddChannel";
import { FaSearch } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
import request from "../util/request";
const Home = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const [users, setusers] = useState(null);
  const [didRender, setdidRender] = useState(false);
  const [currentChan, setcurrentChan] = useState(null);
  const [renderMessages, setrenderMessages] = useState(false);
  const [isAddChannel, setisAddChannel] = useState(false);

  const user = JSON.parse(localStorage.getItem("newUser"));
  const [messages, setmessages] = useState([]);
  const [channel, setchannel] = useState([]);
  const [isSuccess, setisSuccess] = useState(0);
<<<<<<< HEAD
  const [OnChannel, setOnChannel] = useState(false);
=======
  const [isInChannel, setisInChannel] = useState(false);
  const [toggleOption, settoggleOption] = useState(false)
>>>>>>> d82d669f99dad2f3c9d05dd5dc6857d4c8c8d7fb

  useEffect(() => {
    renderChannelMessages();
    return () => {
      setrenderMessages(false);
    };
  }, [renderMessages]);
  useEffect(() => {
    setInterval(() => {
      setrenderMessages(true);
    }, 5000);
  }, []);
  useEffect(() => {
    renderChannels();
    return () => {
      setdidRender(false);
    };
  }, [didRender]);

  useEffect(() => {
    fetchUsers();
  }, [isAddChannel]);

  const fetchUsers = () => {
    const options = user.headers;
    request.alluserData(options).then((response) => {
      const newdata = Object.values(response.data.data).map((data) => data);
      const userlist = newdata.map((data) => {
        const newobjt = { id: data.id, email: data.uid };
        return newobjt;
      });
      setusers(userlist);
      localStorage.setItem("users", JSON.stringify(newdata));
    });
  };

  const handleResponse = (data) => {
    const shows = data.map((item) => ({ id: item.id, name: item.name }));
    setchannel(shows);
  };
  const renderChannels = () => {
    const options = user.headers;

    request
      .channels(options)
      .then((response) => {
        setisSuccess(response.status);

        handleResponse(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const renderChannelMessages = () => {
    if (currentChan) {
      const header = user.headers;
      const param = {
        ...header,
        channelId: currentChan.id,
      };
      request
        .retriveCMessages(param)
        .then((response) => setmessages(response.data.data));
    }
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
          <HiPencilAlt
            className="pencilIcon"
            onClick={() => {
              setisAddChannel(!isAddChannel);
            }}
          />
        </span>
        {isAddChannel && (
          <AddChannel
            users={users}
            user={user}
            setdidRender={setdidRender}
            isAddChannel={isAddChannel}
            setOnChannel={setOnChannel}
          />
        )}
        <details className="flex justify-center text-left pl-2">
          <summary>Channels</summary>
          <p>
            {isSuccess === 200
              ? channel.map((chan) => (
                  <Channel
                    name={chan.name}
                    channelid={chan.id}
                    setcurrentChan={setcurrentChan}
                    currentChan={currentChan}
                    setrenderMessages={setrenderMessages}
                  />
                ))
              : renderChannels()}
          </p>
        </details>
        <DirectMessages />
      </aside>

      <span
        id="messages"
        onClick={() => {
          setOnChannel(!OnChannel);
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Messages
                setcurrentChan={setcurrentChan}
                currentChan={currentChan}
                setrenderMessages={setrenderMessages}
                messages={messages}
                users={users}
                OnChannel={OnChannel}
              />
            }
          />
        </Routes>
      </span>

      {searchModalOpen && <Search setOpenSearchModal={setSearchModalOpen} />}
    </div>
  );
};

export default Home;
