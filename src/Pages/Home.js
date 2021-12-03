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
import RenderRetrievedMessages from "../Components/DirectMessages/RendeRetrievedMessages";

import { BsFillChatDotsFill } from "react-icons/bs";
import MessageWrapper from "../Components/MessageWrapper";
import OptionModal from "../Components/OptionModal";
import ChannelSettings from "../Components/ChannelSettings";

const Home = ({ setClient }) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const [newChannel, setnewChannel] = useState(null);
  const [users, setusers] = useState(null);
  const [didRender, setdidRender] = useState(false);
  const [currentChan, setcurrentChan] = useState(null);
  const [renderMessages, setrenderMessages] = useState(false);
  const [isChannelSettings, setisChannelSettings] = useState(false);
  const [isAddChannel, setisAddChannel] = useState(false);

  const [messages, setmessages] = useState([]);
  const user = JSON.parse(localStorage.getItem("newUser"));
  const [messagetobesend, setmessagetobesend] = useState("");
  const [channelName, setchannelName] = useState("");
  const [listOfMember, setlistOfMember] = useState("");
  const [channel, setchannel] = useState([]);
  const [isSuccess, setisSuccess] = useState(0);
  const [isInChannel, setisInChannel] = useState(false);
  const [toggleOption, settoggleOption] = useState(false)

  useEffect(() => {
    renderChannelMessages();
    return () => {
      setrenderMessages(false);
    };
  }, [renderMessages]);

  useEffect(() => {
    renderChannels();
    return () => {
      setdidRender(false);
    };
  }, [didRender]);

  useEffect(() => {
    fetchUsers();
  }, []);
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
  const handleAddChannel = (e) => {
    e.preventDefault();
    setisAddChannel(true);
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    const header = user.headers;
    const param = {
      ...header,
      data: { receiver_id: currentChan.id, body: messagetobesend },
    };

    request
      .messageToChannel(param)
      .then(function (response) {
        setrenderMessages(true);
      })
      .catch(function (error) {
        console.error(error);
      });
    setmessagetobesend("");
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
            setnewChannel={setnewChannel}
            user={user}
            setdidRender={setdidRender}
            isAddChannel={isAddChannel}
          />
        )}
        <details className="flex justify-start text-left pl-2">
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
                    setisInChannel={setisInChannel}
                  />
                ))
              : renderChannels()}
          </p>
        </details>
        <DirectMessages setisInChannel={setisInChannel} />
      </aside>
      {isChannelSettings ? (
        <div className=" w-full flex justify-center items-center">
          <ChannelSettings
            setChannelSettings={setisChannelSettings}
            users={users}
            user={user}
            currentChan={currentChan}
          />
        </div>
      ) : isInChannel ? (
        <div>
          <div className="BodyHeader flex w-full">
            <h1 className="w-full flex items-center justify-center font-semibold text-2xl">
              {currentChan && currentChan.name}
            </h1>
            <OptionModal
              setChannelSettings={setisChannelSettings}
              isChannelSettings={isChannelSettings}
              toggleOption={toggleOption}
               settoggleOption={settoggleOption}
            />
          </div>

          <div className=" flex flex-col place-items-center h-3/4 overflow-y-scroll bottom-0">
            {messages.length !== 0 ? (
              messages.map((message) => (
                <MessageWrapper message={message} user={user} />
              ))
            ) : (
              <article className="flex items-center flex-col m-10">
                <BsFillChatDotsFill
                  style={{ color: "gray", fontSize: "8em" }}
                />

                <h1>Welcome to thisChat</h1>
                <p>
                  See<a> what's new</a> in this update
                </p>
              </article>
            )}
          </div>
          <form
            onSubmit={handleSendMessage}
            className="flex m-4 justify-center align-middle"
          >
            <input
              class="block shadow border-2 rounded w-2/3 py-2 px-4 text-black-700 mb-3 mr-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700 transition duration-500 ease-in-out"
              placeholder="Enter message here"
              onChange={({ target: { value } }) => {
                setmessagetobesend(value);
              }}
              value={messagetobesend}
              type="text"
            />
            <button type="submit m-4">
              <AiOutlineSend style={{ fontSize: "2em" }} />
            </button>
          </form>
        </div>
      ) : (
        <span id="messages">
          <Routes>
            <Route path="/" element={<Messages />} />
          </Routes>
        </span>
      )}
      {/* {/* <span id="messages">
        <Routes>
          <Route path="/" element={<Messages />} />
        </Routes>
      </span> */}
      {searchModalOpen && <Search setOpenSearchModal={setSearchModalOpen} />}
    </div>
  );
};

export default Home;
